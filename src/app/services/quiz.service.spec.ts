import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { QuizService } from './quiz.service';
import { HistoryService } from './history.service';

import { RADIO_QUESTIONS } from '../../data/radio-questions/radio_questions';
import { COMMON_QUESTIONS } from '../../data/common-questions/common_questions';
import { TEST_TYPE } from '../components/welcome/welcome.component';

describe('QuizService', () => {
  let service: QuizService;
  let httpMock: HttpTestingController;

  let historySpy: jasmine.SpyObj<HistoryService>;

  beforeEach(() => {
    historySpy = jasmine.createSpyObj('HistoryService', [
      'getAnsweredQuestionIds',
      'getAnsweredQuestionsCount',
      'getIncorrectAnswers',
      'hasIncorrectAnswers',
      'clearHistory',
      'getAllHistory',
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

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  describe('checkAnswer()', () => {
    it('should return true when answer is correct', () => {
      const q: any = {
        correct: 'a',
      };

      expect(service.checkAnswer(q, 'a')).toBeTrue();
    });

    it('should return false when answer is wrong', () => {
      const q: any = {
        correct: 'a',
      };

      expect(service.checkAnswer(q, 'b')).toBeFalse();
    });

    it('should accept second_correct', () => {
      const q: any = {
        correct: 'a',
        second_correct: 'b',
      };

      expect(service.checkAnswer(q, 'b')).toBeTrue();
    });

    it('should still accept primary correct when second_correct exists', () => {
      const q: any = {
        correct: 'a',
        second_correct: 'b',
      };

      expect(service.checkAnswer(q, 'a')).toBeTrue();
    });

    it('should reject other answers', () => {
      const q: any = {
        correct: 'a',
        second_correct: 'b',
      };

      expect(service.checkAnswer(q, 'd')).toBeFalse();
    });
  });

  describe('getQuestionsByIds()', () => {
    it('should return empty array', () => {
      expect(service.getQuestionsByIds([])).toEqual([]);
    });

    it('should return matching questions', () => {
      const ids = service.ALL_QUESTIONS
        .slice(0, 2)
        .map((q) => q.id);

      const result = service.getQuestionsByIds(ids);

      expect(result.length).toBe(2);
      expect(result[0].id).toBe(ids[0]);
    });

    it('should ignore unknown ids', () => {
      const result = service.getQuestionsByIds([999999]);

      expect(result).toEqual([]);
    });
  });

  describe('getRadioQuestions()', () => {
    it('should return requested amount', () => {
      historySpy.getAnsweredQuestionIds.and.returnValue([]);

      const result = service.getRadioQuestions(5);

      expect(result.length).toBeLessThanOrEqual(5);
    });

    it('should exclude answered questions', () => {
      if (!RADIO_QUESTIONS.length) {
        return;
      }

      const answered = RADIO_QUESTIONS[0].id;

      historySpy.getAnsweredQuestionIds.and.returnValue([answered]);

      const result = service.getRadioQuestions(20);

      expect(result.some((q) => q.id === answered)).toBeFalse();
    });

    it('should return empty when all answered', () => {
      historySpy.getAnsweredQuestionIds.and.returnValue(
        RADIO_QUESTIONS.map((q) => q.id)
      );

      const result = service.getRadioQuestions(10);

      expect(result.length).toBe(0);
    });
  });

  describe('getCommonQuestions()', () => {
    it('should return requested amount', () => {
      historySpy.getAnsweredQuestionIds.and.returnValue([]);

      const result = service.getCommonQuestions(5);

      expect(result.length).toBeLessThanOrEqual(5);
    });

    it('should exclude answered', () => {
      if (!COMMON_QUESTIONS.length) {
        return;
      }

      const answered = COMMON_QUESTIONS[0].id;

      historySpy.getAnsweredQuestionIds.and.returnValue([answered]);

      const result = service.getCommonQuestions(20);

      expect(result.some((q) => q.id === answered)).toBeFalse();
    });

    it('should return empty when all answered', () => {
      historySpy.getAnsweredQuestionIds.and.returnValue(
        COMMON_QUESTIONS.map((q) => q.id)
      );

      expect(service.getCommonQuestions(5).length).toBe(0);
    });
  });

  describe('getQuestions()', () => {
    it('should return radio questions', () => {
      const result = service.getQuestions(TEST_TYPE.RADIO, 10);

      expect(result.length).toBeLessThanOrEqual(10);

      result.forEach((q) => {
        expect(
          RADIO_QUESTIONS.some((r) => r.id === q.id)
        ).toBeTrue();
      });
    });

    it('should return common questions', () => {
      const result = service.getQuestions(TEST_TYPE.COMMON, 10);

      expect(result.length).toBeLessThanOrEqual(10);

      result.forEach((q) => {
        expect(
          COMMON_QUESTIONS.some((r) => r.id === q.id)
        ).toBeTrue();
      });
    });

    it('should return mixed questions', () => {
      const result = service.getQuestions(TEST_TYPE.ALL, 20);

      expect(result.length).toBeLessThanOrEqual(20);

      const radio = result.filter((q) =>
        RADIO_QUESTIONS.some((r) => r.id === q.id)
      );

      const common = result.filter((q) =>
        COMMON_QUESTIONS.some((r) => r.id === q.id)
      );

      expect(radio.length).toBeGreaterThan(0);
      expect(common.length).toBeGreaterThan(0);
    });

    it('should work with zero questions', () => {
      expect(service.getQuestions(TEST_TYPE.ALL, 0)).toEqual([]);
    });

    it('should not exceed requested count', () => {
      const result = service.getQuestions(TEST_TYPE.ALL, 15);

      expect(result.length).toBeLessThanOrEqual(15);
    });
  });
});

