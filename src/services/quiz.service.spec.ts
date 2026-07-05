import { TestBed } from "@angular/core/testing";
import {
  HttpTestingController,
  provideHttpClientTesting,
} from "@angular/common/http/testing";
import { provideHttpClient } from "@angular/common/http";

import { QuizService } from "./quiz.service";
import { HistoryService } from "./history.service";
import { Question } from "../interfaces/question";

describe("QuizService", () => {
  let service: QuizService;
  let httpMock: HttpTestingController;

  const historySpy = jasmine.createSpyObj("HistoryService", [
    "saveWrongAnswer",
    "removeWrongAnswer",
    "getWrongAnswers",
    "hasWrongAnswers",
    "clearHistory",
    "getAllHistory",
  ]);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        QuizService,
        provideHttpClient(),
        provideHttpClientTesting(),
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

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should return questions", () => {
    const questions = service.getQuestions(5);

    expect(questions.length).toBe(5);
  });

  it("should return empty array if ids are empty", () => {
    expect(service.getQuestionsByIds([])).toEqual([]);
  });

  it("should check correct answer", () => {
    const question = {
      correct: "b",
    } as Question;

    expect(service.checkAnswer(question, "b")).toBeTrue();
    expect(service.checkAnswer(question, "a")).toBeFalse();
  });

  it("should calculate progress", () => {
    service.getQuestions(10);

    const progress = service.getProgress();

    expect(progress.total).toBeGreaterThan(0);
    expect(progress.answered).toBeGreaterThanOrEqual(10);
  });

  it("should call HistoryService.saveWrongAnswer", () => {
    service.saveWrongAnswer(5);

    expect(historySpy.saveWrongAnswer).toHaveBeenCalledWith(5);
  });

  it("should call HistoryService.removeWrongAnswer", () => {
    service.removeWrongAnswer(3);

    expect(historySpy.removeWrongAnswer).toHaveBeenCalledWith(3);
  });

  it("should call HistoryService.getWrongAnswers", () => {
    historySpy.getWrongAnswers.and.returnValue([1, 2]);

    expect(service.getWrongAnswers()).toEqual([1, 2]);
  });

  it("should call HistoryService.hasWrongAnswers", () => {
    historySpy.hasWrongAnswers.and.returnValue(true);

    expect(service.hasWrongAnswers()).toBeTrue();
  });

  it("should call HistoryService.clearHistory", () => {
    service.clearHistory();

    expect(historySpy.clearHistory).toHaveBeenCalled();
  });

  it("should call HistoryService.getAllHistory", () => {
    const history = [{ user: "urtzi" }];

    historySpy.getAllHistory.and.returnValue(history);

    expect(service.getHistory()).toEqual(history);
  });

  it("should parse valid GPT response", () => {
    const question = {
      question: "Pregunta",
      options: {
        a: "A",
        b: "B",
        c: "C",
        d: "D",
      },
    } as Question;

    service.ask(question).subscribe((res) => {
      expect(res.answer).toBe("a");
      expect(res.explanation).toBe("Correcta");
    });

    const req = httpMock.expectOne("/api/GPT");

    expect(req.request.method).toBe("POST");

    req.flush({
      ok: true,
      answer: JSON.stringify({
        answer: "a",
        explanation: "Correcta",
      }),
    });
  });

  it("should parse markdown GPT response", () => {
    const question = {
      question: "Pregunta",
      options: {
        a: "A",
        b: "B",
        c: "C",
        d: "D",
      },
    } as Question;

    service.ask(question).subscribe((res) => {
      expect(res.answer).toBe("c");
    });

    const req = httpMock.expectOne("/api/GPT");

    req.flush({
      ok: true,
      answer:
        "```json\n{\"answer\":\"c\",\"explanation\":\"Texto\"}\n```",
    });
  });

  it("should return fallback on invalid GPT response", () => {
    const question = {
      question: "Pregunta",
      options: {
        a: "A",
        b: "B",
        c: "C",
        d: "D",
      },
    } as Question;

    service.ask(question).subscribe((res) => {
      expect(res.answer).toBe("");
      expect(res.explanation).toContain("Error");
    });

    const req = httpMock.expectOne("/api/GPT");

    req.flush({
      ok: true,
      answer: "Respuesta inválida",
    });
  });
});