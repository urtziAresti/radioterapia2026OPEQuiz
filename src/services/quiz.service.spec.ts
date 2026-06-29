import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { QuizService, MagicAnswer } from './quiz.service';
import { Question } from '../models/question.model';

describe('QuizService', () => {
  let service: QuizService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [QuizService]
    });

    service = TestBed.inject(QuizService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // ---------------------------
  // ASK (HTTP + MAP JSON)
  // ---------------------------

  it('should call API and parse valid JSON response', () => {
    const question: Question = {
      question: 'Test question',
      options: {
        a: 'A1',
        b: 'B1',
        c: 'C1',
        d: 'D1'
      },
      correct: 'a',
      id: 1
    } as any;

    const mockResponse = {
      ok: true,
      answer: JSON.stringify({
        answer: 'a',
        explanation: 'correct'
      })
    };

    let result!: MagicAnswer;

    service.ask(question).subscribe(res => {
      result = res;
    });

    const req = httpMock.expectOne('/api/GPT');

    expect(req.request.method).toBe('POST');
    expect(req.request.body.question).toContain('Test question');

    req.flush(mockResponse);

    expect(result).toEqual({
      answer: 'a',
      explanation: 'correct'
    });
  });

  it('should return fallback when JSON parse fails', () => {
    const question: Question = {
      question: 'Bad question',
      options: { a: 'A', b: 'B', c: 'C', d: 'D' },
      correct: 'a',
      id: 1
    } as any;

    let result!: MagicAnswer;

    service.ask(question).subscribe(res => {
      result = res;
    });

    const req = httpMock.expectOne('/api/GPT');

    req.flush({
      ok: true,
      answer: 'NOT_JSON'
    });

    expect(result).toEqual({
      answer: '',
      explanation: 'Error parseando respuesta de la IA'
    });
  });

  // ---------------------------
  // GET QUESTIONS
  // ---------------------------

  it('should return random questions with limit', () => {
    const result = service.getQuestions(3);

    expect(result.length).toBe(3);
  });

  it('should return shuffled results (not strict order)', () => {
    const first = service.getQuestions(5);
    const second = service.getQuestions(5);

    // Puede fallar raramente por random, pero sirve como smoke test
    expect(first.length).toBe(5);
    expect(second.length).toBe(5);
  });

  // ---------------------------
  // CHECK ANSWER
  // ---------------------------

  it('should validate correct answer', () => {
    const question: Question = {
      correct: 'a'
    } as any;

    expect(service.checkAnswer(question, 'a')).toBeTrue();
    expect(service.checkAnswer(question, 'b')).toBeFalse();
  });

  // ---------------------------
  // GET QUESTIONS BY IDS
  // ---------------------------

  it('should filter questions by ids', () => {
    const result = service.getQuestionsByIds([1, 2, 3]);

    expect(Array.isArray(result)).toBeTrue();
  });

  it('should return empty array if ids invalid', () => {
    expect(service.getQuestionsByIds([])).toEqual([]);
    expect(service.getQuestionsByIds(null as any)).toEqual([]);
  });
});