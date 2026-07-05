import { TestBed } from "@angular/core/testing";
import { ActivatedRoute, Router } from "@angular/router";
import { of, throwError } from "rxjs";

import { QuizPage } from "./quiz.page";
import { QuizService } from "../../services/quiz.service";
import { HistoryService } from "../../services/history.service";
import { TimerService } from "../../services/timer.service";
import { LogService } from "../../services/log.service";

describe("QuizPage", () => {
  let component: QuizPage;

  let quizServiceMock: any;
  let historyServiceMock: any;
  let timerServiceMock: any;
  let logServiceMock: any;
  let routerMock: any;

  const routeMock = {
    queryParams: of({ count: 3, name: "Urtzi" }),
  };

  beforeEach(async () => {
    quizServiceMock = {
      getQuestions: jasmine.createSpy().and.returnValue([
        { id: 1, correct: "A" },
        { id: 2, correct: "B" },
      ]),
      getQuestionsByIds: jasmine.createSpy().and.returnValue([
        { id: 99, correct: "A" },
      ]),
      checkAnswer: jasmine.createSpy(),
      ask: jasmine.createSpy(),
    };

    historyServiceMock = {
      saveWrongAnswer: jasmine.createSpy(),
      removeWrongAnswer: jasmine.createSpy(),
    };

    timerServiceMock = {
      start: jasmine.createSpy(),
      stop: jasmine.createSpy(),
      elapsedTime$: of("00:10"),
    };

    logServiceMock = {
      log: jasmine.createSpy(),
    };

    routerMock = {
      navigate: jasmine.createSpy(),
    };

    await TestBed.configureTestingModule({
      imports: [QuizPage],
      providers: [
        { provide: QuizService, useValue: quizServiceMock },
        { provide: HistoryService, useValue: historyServiceMock },
        { provide: TimerService, useValue: timerServiceMock },
        { provide: LogService, useValue: logServiceMock },
        { provide: ActivatedRoute, useValue: routeMock },
        { provide: Router, useValue: routerMock },
      ],
    }).compileComponents();

    const fixture = TestBed.createComponent(QuizPage);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    jasmine.clock().uninstall?.();
  });
  it("should initialize in normal mode and load questions", () => {
    component.ngOnInit();
  
    expect(component.mode).toBe("normal");
    expect(component.playerName).toBe("Urtzi");
    expect(component.count).toBe(3);
  
    expect(quizServiceMock.getQuestions).toHaveBeenCalledWith(3);
    expect(timerServiceMock.start).toHaveBeenCalled();
  });

 
  it("should reset quiz state properly", () => {
    component.currentIndex = 5;
    component.correctAnswers = 3;
    component.selectedOption = "A";
    component.isAnswered = true;
    component.nextVisible = true;
  
    component["resetQuiz"]();
  
    expect(component.currentIndex).toBe(0);
    expect(component.correctAnswers).toBe(0);
    expect(component.selectedOption).toBeNull();
    expect(component.isAnswered).toBeFalse();
    expect(component.nextVisible).toBeFalse();
    expect(component.loadingMagic).toBeFalse();
    expect(component.magicAnswer).toBeNull();
    expect(component.wrongAnswersMap).toEqual({});
    expect(timerServiceMock.start).toHaveBeenCalled();
  });
  it("should handle correct answer", () => {
    component.questions = [{ id: 1, correct: "A" }] as any;
    component.currentIndex = 0;
  
    quizServiceMock.checkAnswer.and.returnValue(true);
  
    component.answer("A");
  
    expect(component.isAnswered).toBeTrue();
    expect(component.correctAnswers).toBe(1);
  
    expect(historyServiceMock.saveWrongAnswer).not.toHaveBeenCalled();
  
    expect(logServiceMock.log).toHaveBeenCalledWith(
      "ANSWER_SELECTED",
      jasmine.objectContaining({
        questionId: 1,
        correct: true,
      })
    );
  });
  
  it("should handle incorrect answer and save wrong answer", () => {
    component.questions = [{ id: 1, correct: "A" }] as any;
    component.currentIndex = 0;
  
    quizServiceMock.checkAnswer.and.returnValue(false);
  
    component.answer("B");
  
    expect(component.isAnswered).toBeTrue();
    expect(component.nextVisible).toBeTrue();
  
    expect(historyServiceMock.saveWrongAnswer).toHaveBeenCalledWith(1);
  
    expect(component.wrongAnswersMap[1]).toBe(1);
  
    expect(logServiceMock.log).toHaveBeenCalledWith(
      "ANSWER_SELECTED",
      jasmine.objectContaining({
        questionId: 1,
        correct: false,
      })
    );
  });
  
  it("should not allow answering twice", () => {
    component.isAnswered = true;
  
    component.answer("A");
  
    expect(quizServiceMock.checkAnswer).not.toHaveBeenCalled();
  });
  
  it("should not allow answering when locked", () => {
    component["answerLocked"] = true;
  
    component.answer("A");
  
    expect(quizServiceMock.checkAnswer).not.toHaveBeenCalled();
  });
  
  it("should increment wrongAnswersMap correctly on multiple failures", () => {
    component.questions = [{ id: 10, correct: "A" }] as any;
    component.currentIndex = 0;
  
    quizServiceMock.checkAnswer.and.returnValue(false);
  
    component.answer("B");
    component["answerLocked"] = false;
    component.isAnswered = false;
  
    component.answer("C");
  
    expect(component.wrongAnswersMap[10]).toBe(2);
  });
  it("should move to next question", () => {
    component.questions = [
      { id: 1, correct: "A" },
      { id: 2, correct: "B" },
    ] as any;
  
    component.currentIndex = 0;
  
    component.nextQuestion();
  
    expect(component.currentIndex).toBe(1);
    expect(component.nextVisible).toBeFalse();
    expect(component.isAnswered).toBeFalse();
    expect(component.selectedOption).toBeNull();
  });
  
  it("should finish quiz when reaching last question", () => {
    component.questions = [{ id: 1, correct: "A" }] as any;
    component.currentIndex = 0;
  
    component.nextQuestion();
  
    expect(timerServiceMock.stop).toHaveBeenCalled();
    expect(component["quizFinished"]).toBeTrue();
  });
  
  it("should not go next if navigation is locked", () => {
    component["navigationLocked"] = true;
  
    const initialIndex = component.currentIndex;
  
    component.nextQuestion();
  
    expect(component.currentIndex).toBe(initialIndex);
  });
  
  it("should call magic service successfully", () => {
    quizServiceMock.ask.and.returnValue(of({ answer: "magic-result" }));
  
    const question = { id: 1, correct: "A" } as any;
  
    component.useMagic(question);
  
    expect(quizServiceMock.ask).toHaveBeenCalledWith(question);
    expect(component.loadingMagic).toBeFalse();
  });
  
  it("should handle magic service error", () => {
    quizServiceMock.ask.and.returnValue(
      throwError(() => new Error("fail"))
    );
  
    const question = { id: 1, correct: "A" } as any;
  
    component.useMagic(question);
  
    expect(component.loadingMagic).toBeFalse();
    expect(component.magicAnswer).toBeNull();
    expect(component.errorMessage).toContain("Error consultando la magia");
  });
  
  it("should not call magic if already loading", () => {
    component.loadingMagic = true;
  
    component.useMagic({ id: 1 } as any);
  
    expect(quizServiceMock.ask).not.toHaveBeenCalled();
  });
  
  it("should cleanup on destroy", () => {
    component.ngOnDestroy();
  
    expect(timerServiceMock.stop).toHaveBeenCalled();
  });

  it("should calculate progress correctly", () => {
    component.questions = [{}, {}, {}] as any;
    component.currentIndex = 1;
  
    expect(component.progress).toBe(1 / 3);
  });
  
  it("should return 0 progress when no questions", () => {
    component.questions = [] as any;
  
    expect(component.progress).toBe(0);
  });
  
  it("should detect results page state", () => {
    component.questions = [{}, {}] as any;
    component.currentIndex = 2;
  
    expect(component.resultsPage).toBeFalse();
  });

  it("should return selected class before answer", () => {
    component.isAnswered = false;
    component.selectedOption = "a";
  
    expect(component.getOptionColor("a")).toBe("selected-option");
  });
  
  it("should return correct option class after answer", () => {
    component.isAnswered = true;
  
    component.questions = [{ correct: "a" }] as any;
    component.currentIndex = 0;
  
    expect(component.getOptionColor("a")).toBe("correct-option");
  });
  
  it("should return incorrect option class", () => {
    component.isAnswered = true;
    component.selectedOption = "b";
  
    component.questions = [{ correct: "a" }] as any;
    component.currentIndex = 0;
  
    expect(component.getOptionColor("b")).toBe("incorrect-option");
  });

  it("should not call magic if loading", () => {
    component.loadingMagic = true;
  
    component.useMagic({ id: 1 } as any);
  
    expect(quizServiceMock.ask).not.toHaveBeenCalled();
  });

  it("should stop quiz when finishing", () => {
    component.questions = [{}, {}] as any;
    component.currentIndex = 1;
  
    component.nextQuestion();
  
    expect(timerServiceMock.stop).toHaveBeenCalled();
  });
  it("should not navigate when locked", () => {
    component["navigationLocked"] = true;
  
    const index = component.currentIndex;
  
    component.nextQuestion();
  
    expect(component.currentIndex).toBe(index);
  });
  it("should detect end of quiz correctly", () => {
    component.questions = [{}, {}] as any;
    component.currentIndex = 2;
  
    expect(component.resultsPage).toBeFalse();
  });
  it("should return 0 progress when empty", () => {
    component.questions = [] as any;
  
    expect(component.progress).toBe(0);
  });
  it("should return empty class when not answered and no selection", () => {
    component.isAnswered = false;
    component.selectedOption = null;
  
    expect(component.getOptionColor("a")).toBe("");
  });
  it("should handle magic error fully", (done) => {
    quizServiceMock.ask.and.returnValue(
      throwError(() => new Error("fail"))
    );
  
    component.useMagic({ id: 1 } as any);
  
    setTimeout(() => {
      expect(component.loadingMagic).toBeFalse();
      expect(component.errorMessage).toContain("Error");
      done();
    });
  });

});