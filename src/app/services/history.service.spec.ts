import { TestBed } from "@angular/core/testing";

import { HistoryService } from "./history.service";

describe("HistoryService", () => {
  let service: HistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoryService);

    localStorage.clear();
    localStorage.clear();

    localStorage.setItem(
      "userSession",
      JSON.stringify({
        username: "ADMIN",
      })
    );
  });

  afterEach(() => {
    localStorage.clear();
    localStorage.clear();
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should save a new question", () => {
    service.saveQuestion(1, true);

    const history = service.getAllHistory();

    expect(history.length).toBe(1);
    expect(history[0].user).toBe("ADMIN");
    expect(history[0].attempts.length).toBe(1);
    expect(history[0].attempts[0].questions.length).toBe(1);
    expect(history[0].attempts[0].questions[0].questionId).toBe(1);
    expect(history[0].attempts[0].questions[0].correct).toBeTrue();
  });

  it("should update an existing question instead of duplicating it", () => {
    service.saveQuestion(10, false);
    service.saveQuestion(10, true);

    const history = service.getAllHistory();

    const questions = history[0].attempts[0].questions;

    expect(questions.length).toBe(1);
    expect(questions[0].questionId).toBe(10);
    expect(questions[0].correct).toBeTrue();
  });

  it("should save multiple different questions", () => {
    service.saveQuestion(1, true);
    service.saveQuestion(2, false);
    service.saveQuestion(3, true);

    const history = service.getAllHistory();

    expect(history[0].attempts[0].questions.length).toBe(3);
  });

  it("should return incorrect answers", () => {
    service.saveQuestion(1, true);
    service.saveQuestion(2, false);
    service.saveQuestion(3, false);

    expect(service.getIncorrectAnswers()).toEqual([2, 3]);
  });

  it("should return empty incorrect answers", () => {
    service.saveQuestion(1, true);

    expect(service.getIncorrectAnswers()).toEqual([]);
  });

  it("should return hasIncorrectAnswers true", () => {
    service.saveQuestion(1, false);

    expect(service.hasIncorrectAnswers()).toBeTrue();
  });

  it("should return hasIncorrectAnswers false", () => {
    service.saveQuestion(1, true);

    expect(service.hasIncorrectAnswers()).toBeFalse();
  });

  it("should return answered questions count", () => {
    service.saveQuestion(1, true);
    service.saveQuestion(2, true);
    service.saveQuestion(3, false);

    expect(service.getAnsweredQuestionsCount()).toBe(3);
  });

  it("should not increase answered count when updating a question", () => {
    service.saveQuestion(1, false);
    service.saveQuestion(1, true);

    expect(service.getAnsweredQuestionsCount()).toBe(1);
  });

  it("should return answered ids", () => {
    service.saveQuestion(5, true);
    service.saveQuestion(8, false);

    expect(service.getAnsweredQuestionIds()).toEqual([5, 8]);
  });

  it("should start a new attempt", () => {
    service.saveQuestion(1, true);

    const history = service.getAllHistory();

    expect(history[0].attempts.length).toBe(1);
  });

  it("should save question in new attempt", () => {
    service.saveQuestion(1, true);

    service.saveQuestion(2, false);

    const history = service.getAllHistory();

    expect(history[0].attempts.length).toBe(1);
  });

  it("should clear history", () => {
    service.saveQuestion(1, true);

    service.clearHistory();

    expect(service.getAllHistory()).toEqual([]);
  });

  it("should return empty history when storage is empty", () => {
    expect(service.getAllHistory()).toEqual([]);
  });

  it("should return empty ids when no history exists", () => {
    expect(service.getAnsweredQuestionIds()).toEqual([]);
  });

  it("should return zero answered count without history", () => {
    expect(service.getAnsweredQuestionsCount()).toBe(0);
  });

  it("should return empty incorrect answers without history", () => {
    expect(service.getIncorrectAnswers()).toEqual([]);
  });

  it("should handle invalid session json", () => {
    localStorage.setItem("userSession", "{");

    service.saveQuestion(1, true);

    expect(service.getAllHistory()).toEqual([]);
  });

  it("should handle invalid history json", () => {
    localStorage.setItem("quiz_history", "{");

    expect(service.getAllHistory()).toEqual([]);
  });

  it("should support multiple users", () => {
    service.saveQuestion(1, true);

    localStorage.setItem(
      "userSession",
      JSON.stringify({
        username: "USER2",
      })
    );

    service.saveQuestion(2, false);

    const history = service.getAllHistory();

    expect(history.length).toBe(2);
  });

  it("should update incorrect answer to correct", () => {
    service.saveQuestion(10, false);

    expect(service.getIncorrectAnswers()).toEqual([10]);

    service.saveQuestion(10, true);

    expect(service.getIncorrectAnswers()).toEqual([]);
  });

  it("should preserve previous attempts", () => {
    service.saveQuestion(1, true);

    service.saveQuestion(2, false);

    const history = service.getAllHistory();

    expect(history[0].attempts.length).toBe(1);
    expect(history[0].attempts[0].questions.length).toBe(2);
  });
});