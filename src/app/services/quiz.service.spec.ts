import { TestBed } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";

import { QuizService } from "./quiz.service";
import { HistoryService } from "./history.service";
import { RADIO_QUESTIONS } from "../../data/radio-questions/radio_questions";
import { COMMON_QUESTIONS } from "../../data/common-questions/common_questions";
import { Question } from "../../app/interfaces/question";

describe("QuizService", () => {
  let service: QuizService;
  let httpMock: HttpTestingController;

  let historySpy: jasmine.SpyObj<HistoryService>;
  let ALL_QUESTIONS: Question[] = [...RADIO_QUESTIONS, ...COMMON_QUESTIONS];

  beforeEach(() => {
    historySpy = jasmine.createSpyObj("HistoryService", [
      "getAnsweredQuestionIds",
      "getAnsweredQuestionsCount",
      "getIncorrectAnswers",
      "hasIncorrectAnswers",
      "clearHistory",
      "getAllHistory",
    ]);

    historySpy.getAnsweredQuestionIds.and.returnValue([]);
    historySpy.getAnsweredQuestionsCount.and.returnValue(0);
    historySpy.getIncorrectAnswers.and.returnValue([]);
    historySpy.hasIncorrectAnswers.and.returnValue(false);
    historySpy.getAllHistory.and.returnValue([]);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        QuizService,
        {
          provide: HistoryService,
          useValue: historySpy,
        },
      ],
    });

    service = TestBed.inject(QuizService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  // ====================================================
  // GPT
  // ====================================================

  it("should create", () => {
    expect(service).toBeTruthy();
  });

  it("should parse GPT valid json", () => {
    let result: any;

    service.ask(RADIO_QUESTIONS[0]).subscribe((r) => (result = r));

    const req = httpMock.expectOne("/api/GPT");

    expect(req.request.method).toBe("POST");

    req.flush({
      ok: true,
      answer: JSON.stringify({
        answer: "a",
        explanation: "Correcto",
      }),
    });

    expect(result.answer).toBe("a");
    expect(result.explanation).toBe("Correcto");
  });

  it("should parse markdown json", () => {
    let result: any;

    service.ask(RADIO_QUESTIONS[0]).subscribe((r) => (result = r));

    const req = httpMock.expectOne("/api/GPT");

    req.flush({
      ok: true,
      answer: '```json\n{"answer":"b","explanation":"Texto"}\n```',
    });

    expect(result.answer).toBe("b");
  });

  it("should return parse error", () => {
    let result: any;

    service.ask(RADIO_QUESTIONS[0]).subscribe((r) => (result = r));

    const req = httpMock.expectOne("/api/GPT");

    req.flush({
      ok: true,
      answer: "xxxxx",
    });

    expect(result.answer).toBe("");
    expect(result.explanation).toContain("Error");
  });

  // ====================================================
  // QUESTIONS
  // ====================================================

  it("should return requested number of questions", () => {
    const questions = service.getRadioQuestions(20);

    expect(questions.length).toBe(20);
  });

  it("should never return answered questions", () => {
    historySpy.getAnsweredQuestionIds.and.returnValue([
      RADIO_QUESTIONS[0].id,
      RADIO_QUESTIONS[1].id,
      RADIO_QUESTIONS[2].id,
    ]);

    const questions = service.getRadioQuestions(100);

    expect(questions.some((q) => q.id === RADIO_QUESTIONS[0].id)).toBeFalse();

    expect(questions.some((q) => q.id === RADIO_QUESTIONS[1].id)).toBeFalse();

    expect(questions.some((q) => q.id === RADIO_QUESTIONS[2].id)).toBeFalse();
  });

  it("should get questions by ids", () => {
    const ids = [RADIO_QUESTIONS[0].id, RADIO_QUESTIONS[5].id];

    const result = service.getQuestionsByIds(ids);

    expect(result.length).toBe(2);
    expect(result[0].id).toBe(ids[0]);
  });

  it("should return empty array if ids are empty", () => {
    expect(service.getQuestionsByIds([])).toEqual([]);
  });

  it("should validate correct answer", () => {
    expect(
      service.checkAnswer(RADIO_QUESTIONS[0], RADIO_QUESTIONS[0].correct)
    ).toBeTrue();
  });

  it("should validate incorrect answer", () => {
    expect(service.checkAnswer(RADIO_QUESTIONS[0], "z")).toBeFalse();
  });

  // ====================================================
  // PROGRESS
  // ====================================================

  it("should calculate progress", () => {
    historySpy.getAnsweredQuestionsCount.and.returnValue(60);

    const progress = service.getProgress();

    expect(progress.answered).toBe(60);
    expect(progress.total).toBe(ALL_QUESTIONS.length);

    expect(progress.total).toBe(ALL_QUESTIONS.length);
    expect(progress.remaining).toBe(ALL_QUESTIONS.length - 60);

    expect(progress.percentage).toBe(
      Math.round((60 / ALL_QUESTIONS.length) * 100)
    );
  });

  // ====================================================
  // HISTORY
  // ====================================================

  it("should return incorrect questions", () => {
    historySpy.getIncorrectAnswers.and.returnValue([1, 2]);

    expect(service.getIncorrect()).toEqual([1, 2]);
  });

  it("should know if there are incorrect questions", () => {
    historySpy.hasIncorrectAnswers.and.returnValue(true);

    expect(service.hasIncorrect()).toBeTrue();
  });

  it("should clear history", () => {
    service.clearHistory();

    expect(historySpy.clearHistory).toHaveBeenCalled();
  });

  it("should return history", () => {
    const history = [{ user: "ADMIN", attempts: [] }];

    historySpy.getAllHistory.and.returnValue(history);

    expect(service.getHistory()).toEqual(history);
  });
});
