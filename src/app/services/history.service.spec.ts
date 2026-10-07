import { TestBed } from "@angular/core/testing";

import { HistoryService } from "./history.service";
import { TEST_TYPE } from "../components/welcome/welcome.component";

describe("HistoryService", () => {
  let service: HistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoryService);

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
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should save a new question", () => {
    service.saveQuestion(1, true, TEST_TYPE.COMMON);

    const history = service.getAllHistory();

    expect(history.length).toBe(1);
    expect(history[0].user).toBe("ADMIN");
    expect(history[0].attempts.length).toBe(1);
    expect(history[0].attempts[0].questions.length).toBe(1);
    expect(history[0].attempts[0].questions[0].questionId).toBe(1);
    expect(history[0].attempts[0].questions[0].correct).toBeTrue();
    expect(history[0].attempts[0].questions[0].type).toBe(TEST_TYPE.COMMON);
  });

  it("should update an existing question instead of duplicating it", () => {
    service.saveQuestion(10, false, TEST_TYPE.COMMON);
    service.saveQuestion(10, true, TEST_TYPE.COMMON);

    const history = service.getAllHistory();

    const questions = history[0].attempts[0].questions;

    expect(questions.length).toBe(1);
    expect(questions[0].questionId).toBe(10);
    expect(questions[0].correct).toBeTrue();
  });

  it("should save multiple different questions", () => {
    service.saveQuestion(1, true, TEST_TYPE.COMMON);
    service.saveQuestion(2, false, TEST_TYPE.COMMON);
    service.saveQuestion(3, true, TEST_TYPE.COMMON);

    const history = service.getAllHistory();

    expect(history[0].attempts[0].questions.length).toBe(3);
  });

  it("should return incorrect answers", () => {
    service.saveQuestion(1, true, TEST_TYPE.COMMON);
    service.saveQuestion(2, false, TEST_TYPE.COMMON);
    service.saveQuestion(3, false, TEST_TYPE.COMMON);

    expect(service.getIncorrectAnswers()).toEqual([2, 3]);
  });

  it("should return empty incorrect answers", () => {
    service.saveQuestion(1, true, TEST_TYPE.COMMON);

    expect(service.getIncorrectAnswers()).toEqual([]);
  });

  it("should return hasIncorrectAnswers true", () => {
    service.saveQuestion(1, false, TEST_TYPE.COMMON);

    expect(service.hasIncorrectAnswers()).toBeTrue();
  });

  it("should return hasIncorrectAnswers false", () => {
    service.saveQuestion(1, true, TEST_TYPE.COMMON);

    expect(service.hasIncorrectAnswers()).toBeFalse();
  });

  it("should return answered questions count", () => {
    service.saveQuestion(1, true, TEST_TYPE.COMMON);
    service.saveQuestion(2, true, TEST_TYPE.COMMON);
    service.saveQuestion(3, false, TEST_TYPE.COMMON);

    expect(service.getAnsweredQuestionsCount()).toBe(3);
  });

  it("should not increase answered count when updating a question", () => {
    service.saveQuestion(1, false, TEST_TYPE.COMMON);
    service.saveQuestion(1, true, TEST_TYPE.COMMON);

    expect(service.getAnsweredQuestionsCount()).toBe(1);
  });

  it("should return answered ids", () => {
    service.saveQuestion(5, true, TEST_TYPE.COMMON);
    service.saveQuestion(8, false, TEST_TYPE.COMMON);

    expect(service.getAnsweredQuestionIds()).toEqual([5, 8]);
  });

  it("should start a new attempt", () => {
    service.saveQuestion(1, true, TEST_TYPE.COMMON);

    const history = service.getAllHistory();

    expect(history[0].attempts.length).toBe(1);
  });

  it("should save question in new attempt", () => {
    service.saveQuestion(1, true, TEST_TYPE.COMMON);

    service.saveQuestion(2, false, TEST_TYPE.COMMON);

    const history = service.getAllHistory();

    expect(history[0].attempts.length).toBe(1);
  });

  it("should clear history", () => {
    service.saveQuestion(1, true, TEST_TYPE.COMMON);

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

    service.saveQuestion(1, true, TEST_TYPE.COMMON);

    expect(service.getAllHistory()).toEqual([]);
  });

  it("should handle invalid history json", () => {
    localStorage.setItem("quiz_history", "{");

    expect(service.getAllHistory()).toEqual([]);
  });

  it("should support multiple users", () => {
    service.saveQuestion(1, true, TEST_TYPE.COMMON);

    localStorage.setItem(
      "userSession",
      JSON.stringify({
        username: "USER2",
      })
    );

    service.saveQuestion(2, false, TEST_TYPE.COMMON);

    const history = service.getAllHistory();

    expect(history.length).toBe(2);
  });

  it("should update incorrect answer to correct", () => {
    service.saveQuestion(10, false, TEST_TYPE.COMMON);

    expect(service.getIncorrectAnswers()).toEqual([10]);

    service.saveQuestion(10, true, TEST_TYPE.COMMON);

    expect(service.getIncorrectAnswers()).toEqual([]);
  });

  it("should preserve previous attempts", () => {
    service.saveQuestion(1, true, TEST_TYPE.COMMON);

    service.saveQuestion(2, false, TEST_TYPE.COMMON);

    const history = service.getAllHistory();

    expect(history[0].attempts.length).toBe(1);
    expect(history[0].attempts[0].questions.length).toBe(2);
  });

  it("should save radio questions with radio type", () => {
    service.saveQuestion(1, true, TEST_TYPE.RADIO);

    const history = service.getAllHistory();

    expect(history[0].attempts[0].questions[0].type).toBe(TEST_TYPE.RADIO);
  });

  it("should reset common questions without resetting radio questions", () => {
    service.saveQuestion(1, true, TEST_TYPE.COMMON);
    service.saveQuestion(2, true, TEST_TYPE.COMMON);
    service.saveQuestion(3, true, TEST_TYPE.RADIO);

    service.resetAvailableQuestions(TEST_TYPE.COMMON);

    const history = service.getAllHistory();

    const questions = history[0].attempts[0].questions;

    expect(questions.length).toBe(1);
    expect(questions[0].questionId).toBe(3);
    expect(questions[0].type).toBe(TEST_TYPE.RADIO);
  });

  it("should reset radio questions without resetting common questions", () => {
    service.saveQuestion(1, true, TEST_TYPE.COMMON);
    service.saveQuestion(2, true, TEST_TYPE.RADIO);
    service.saveQuestion(3, true, TEST_TYPE.RADIO);

    service.resetAvailableQuestions(TEST_TYPE.RADIO);

    const history = service.getAllHistory();

    const questions = history[0].attempts[0].questions;

    expect(questions.length).toBe(1);
    expect(questions[0].questionId).toBe(1);
    expect(questions[0].type).toBe(TEST_TYPE.COMMON);
  });

  it("should reset all common questions from all attempts", () => {
    service.saveQuestion(1, true, TEST_TYPE.COMMON);
    service.saveQuestion(2, true, TEST_TYPE.RADIO);

    service.resetAvailableQuestions(TEST_TYPE.COMMON);

    const history = service.getAllHistory();

    const questions = history[0].attempts[0].questions;

    expect(questions.length).toBe(1);
    expect(questions[0].questionId).toBe(2);
    expect(questions[0].type).toBe(TEST_TYPE.RADIO);
  });

  it("should do nothing when resetting questions without history", () => {
    service.resetAvailableQuestions(TEST_TYPE.COMMON);

    expect(service.getAllHistory()).toEqual([]);
  });

  it("should reset common questions and make them available again", () => {
    service.saveQuestion(1, true, TEST_TYPE.COMMON);
    service.saveQuestion(2, true, TEST_TYPE.COMMON);

    expect(service.getAnsweredQuestionIds()).toEqual([1, 2]);

    service.resetAvailableQuestions(TEST_TYPE.COMMON);

    expect(service.getAnsweredQuestionIds()).toEqual([]);
  });
});
