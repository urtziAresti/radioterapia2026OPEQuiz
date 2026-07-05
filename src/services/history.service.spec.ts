import { TestBed } from "@angular/core/testing";
import { HistoryService } from "./history.service";

describe("HistoryService", () => {
  let service: HistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    service = TestBed.inject(HistoryService);

    localStorage.clear();
    sessionStorage.clear();
  });

  afterEach(() => {
    localStorage.clear();
    sessionStorage.clear();
  });

  function login(username = "urtzi") {
    localStorage.setItem(
      "userSession",
      JSON.stringify({ username })
    );
  }

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should not save wrong answer without session", () => {
    service.saveWrongAnswer(10);

    expect(sessionStorage.getItem("quiz_history")).toBeNull();
  });

  it("should save wrong answer", () => {
    login();

    service.saveWrongAnswer(5);

    const history = service.getAllHistory();

    expect(history.length).toBe(1);
    expect(history[0].user).toBe("urtzi");
    expect(history[0].attempts.length).toBe(1);
    expect(history[0].attempts[0].wrongAnswers[5]).toBeTrue();
  });

  it("should save multiple wrong answers", () => {
    login();

    service.saveWrongAnswer(1);
    service.saveWrongAnswer(2);

    expect(service.getWrongAnswers()).toEqual([1, 2]);
  });

  it("should remove wrong answer", () => {
    login();

    service.saveWrongAnswer(10);
    service.saveWrongAnswer(20);

    service.removeWrongAnswer(10);

    expect(service.getWrongAnswers()).toEqual([20]);
  });

  it("should ignore remove if user does not exist", () => {
    login();

    service.removeWrongAnswer(1);

    expect(service.getWrongAnswers()).toEqual([]);
  });

  it("should return empty wrong answers without session", () => {
    expect(service.getWrongAnswers()).toEqual([]);
  });

  it("should return empty wrong answers if history is empty", () => {
    login();

    expect(service.getWrongAnswers()).toEqual([]);
  });

  it("should detect wrong answers", () => {
    login();

    expect(service.hasWrongAnswers()).toBeFalse();

    service.saveWrongAnswer(3);

    expect(service.hasWrongAnswers()).toBeTrue();
  });

  it("should clear history", () => {
    login();

    service.saveWrongAnswer(99);

    expect(service.getAllHistory().length).toBe(1);

    service.clearHistory();

    expect(service.getAllHistory()).toEqual([]);
  });

  it("should return full history", () => {
    login();

    service.saveWrongAnswer(1);

    const history = service.getAllHistory();

    expect(history.length).toBe(1);
  });

  it("should return empty history if storage contains invalid JSON", () => {
    sessionStorage.setItem("quiz_history", "invalid json");

    expect(service.getAllHistory()).toEqual([]);
  });

  it("should return null username if session JSON is invalid", () => {
    localStorage.setItem("userSession", "invalid");

    service.saveWrongAnswer(1);

    expect(service.getAllHistory()).toEqual([]);
  });

  it("should create a new attempt automatically", () => {
    login();

    service.saveWrongAnswer(100);

    const history = service.getAllHistory();

    expect(history[0].attempts.length).toBe(1);
    expect(history[0].attempts[0].date).toBeDefined();
  });

  it("should not fail removing from empty attempt", () => {
    login();

    const history = [
      {
        user: "urtzi",
        attempts: [
          {
            wrongAnswers: {},
          },
        ],
      },
    ];

    sessionStorage.setItem(
      "quiz_history",
      JSON.stringify(history)
    );

    service.removeWrongAnswer(999);

    expect(service.getWrongAnswers()).toEqual([]);
  });
});