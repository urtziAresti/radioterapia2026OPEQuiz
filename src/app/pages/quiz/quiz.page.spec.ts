import { TestBed } from "@angular/core/testing";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
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
    queryParams: of({
      count: 3,
      name: "Urtzi",
    }),
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
      saveQuestion: jasmine.createSpy(),
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

    routerMock = jasmine.createSpyObj("Router", [
      "navigate",
      "navigateByUrl"
    ]);

    routerMock = jasmine.createSpyObj(
      "Router",
      ["navigate", "navigateByUrl"],
      {
        events: of(new NavigationEnd(1, "/", "/"))
      }
    );
    
    routerMock.navigateByUrl.and.returnValue(Promise.resolve(true));

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
  xit("should initialize in normal mode and load questions", () => {
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
    expect(timerServiceMock.start).toHaveBeenCalled();
  });

  it("should answer correctly", () => {
    component.questions = [{ id: 1, correct: "A" }] as any;

    quizServiceMock.checkAnswer.and.returnValue(true);

    component.answer("A");

    expect(component.isAnswered).toBeTrue();
    expect(component.correctAnswers).toBe(1);

    expect(historyServiceMock.saveQuestion).toHaveBeenCalledWith(1, true);

    expect(logServiceMock.log).toHaveBeenCalledWith(
      "ANSWER_SELECTED",
      {
        questionId: 1,
        correct: true,
      }
    );
  });

  it("should answer incorrectly", () => {
    component.questions = [{ id: 1, correct: "A" }] as any;

    quizServiceMock.checkAnswer.and.returnValue(false);

    component.answer("B");

    expect(component.isAnswered).toBeTrue();
    expect(component.nextVisible).toBeTrue();

    expect(historyServiceMock.saveQuestion).toHaveBeenCalledWith(1, false);

    expect(logServiceMock.log).toHaveBeenCalledWith(
      "ANSWER_SELECTED",
      {
        questionId: 1,
        correct: false,
      }
    );
  });

  it("should ignore second answer", () => {
    component.isAnswered = true;

    component.answer("A");

    expect(quizServiceMock.checkAnswer).not.toHaveBeenCalled();
    expect(historyServiceMock.saveQuestion).not.toHaveBeenCalled();
  });

  it("should ignore answer when locked", () => {
    component["answerLocked"] = true;

    component.answer("A");

    expect(quizServiceMock.checkAnswer).not.toHaveBeenCalled();
    expect(historyServiceMock.saveQuestion).not.toHaveBeenCalled();
  });

  it("should remove failed id after correct answer in failed mode", () => {
    component.mode = "failed";

    component.failedIds = [1, 2, 3];

    component.questions = [
      {
        id: 2,
        correct: "A",
      },
    ] as any;

    quizServiceMock.checkAnswer.and.returnValue(true);

    component.answer("A");

    expect(component.failedIds).toEqual([1, 3]);
  });

  it("should not remove failed id after incorrect answer", () => {
    component.mode = "failed";

    component.failedIds = [1, 2, 3];

    component.questions = [
      {
        id: 2,
        correct: "A",
      },
    ] as any;

    quizServiceMock.checkAnswer.and.returnValue(false);

    component.answer("B");

    expect(component.failedIds).toEqual([1, 2, 3]);
  });

  it("should call slideError after correct answer", () => {
    spyOn<any>(component, "slideError");

    component.questions = [{ id: 1, correct: "A" }] as any;

    quizServiceMock.checkAnswer.and.returnValue(true);

    component.answer("A");

    expect(component["slideError"]).toHaveBeenCalledWith(1500);
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
    expect(component.magicAnswer).toBeNull();
    expect(component.loadingMagic).toBeFalse();
    expect(component.selectedOption).toBeNull();
    expect(component.isAnswered).toBeFalse();
  });

  it("should finish quiz on last question", () => {
    component.questions = [{ id: 1, correct: "A" }] as any;

    component.currentIndex = 0;

    component.nextQuestion();

    expect(timerServiceMock.stop).toHaveBeenCalled();
    expect(component["quizFinished"]).toBeTrue();
  });

  it("should not finish quiz twice", () => {
    component["finishQuiz"]();
    component["finishQuiz"]();

    expect(timerServiceMock.stop).toHaveBeenCalledTimes(1);
  });

  it("should not navigate if locked", () => {
    component["navigationLocked"] = true;

    component.nextQuestion();

    expect(component.currentIndex).toBe(0);
  });

  it("should calculate progress", () => {
    component.questions = [{}, {}, {}] as any;

    component.currentIndex = 1;

    expect(component.progress).toBe(1 / 3);
  });

  it("should return zero progress without questions", () => {
    component.questions = [];

    expect(component.progress).toBe(0);
  });

  it("should return false on results page", () => {
    component.questions = [{}, {}] as any;

    component.currentIndex = 2;

    expect(component.resultsPage).toBeFalse();
  });

  it("should return true before finishing", () => {
    component.questions = [{}, {}] as any;

    component.currentIndex = 1;

    expect(component.resultsPage).toBeTrue();
  });

  it("should return selected-option", () => {
    component.selectedOption = "a";

    expect(component.getOptionColor("a")).toBe("selected-option");
  });

  it("should return empty string when nothing selected", () => {
    component.selectedOption = null;

    expect(component.getOptionColor("a")).toBe("");
  });

  it("should return correct-option", () => {
    component.isAnswered = true;

    component.questions = [
      {
        correct: "a",
      },
    ] as any;

    expect(component.getOptionColor("a")).toBe("correct-option");
  });

  it("should return incorrect-option", () => {
    component.isAnswered = true;

    component.selectedOption = "b";

    component.questions = [
      {
        correct: "a",
      },
    ] as any;

    expect(component.getOptionColor("b")).toBe("incorrect-option");
  });

  it("should return disabled-option", () => {
    component.isAnswered = true;

    component.selectedOption = "b";

    component.questions = [
      {
        correct: "a",
      },
    ] as any;

    expect(component.getOptionColor("c")).toBe("disabled-option");
  });
  it("should navigate home", async () => {

    await component.goToHome();
  
    expect(routerMock.navigateByUrl).toHaveBeenCalledTimes(2);
  
    expect(routerMock.navigateByUrl.calls.argsFor(0)).toEqual([
      "/",
      {
        skipLocationChange: true
      }
    ]);
  
    expect(routerMock.navigateByUrl.calls.argsFor(1)).toEqual([
      "/welcome",
      {
        replaceUrl: true
      }
    ]);
  
  });

  it("should call magic service successfully", () => {
    const response = {
      answer: "a",
      explanation: "correct",
    };

    quizServiceMock.ask.and.returnValue(of(response));

    const question = {
      id: 1,
      correct: "A",
    } as any;

    component.useMagic(question);

    expect(quizServiceMock.ask).toHaveBeenCalledWith(question);
    expect(component.loadingMagic).toBeFalse();
    expect(component.magicAnswer).toEqual(response);
    expect(component.errorMessage).toBeNull();
  });

  it("should handle magic service error", () => {
    quizServiceMock.ask.and.returnValue(
      throwError(() => new Error("fail"))
    );

    component.useMagic({ id: 1 } as any);

    expect(component.loadingMagic).toBeFalse();
    expect(component.magicAnswer).toBeNull();
    expect(component.errorMessage).toContain(
      "Error consultando la magia"
    );
  });

  it("should not call magic service if already loading", () => {
    component.loadingMagic = true;

    component.useMagic({ id: 1 } as any);

    expect(quizServiceMock.ask).not.toHaveBeenCalled();
  });

  it("should stop timer on destroy", () => {
    component.ngOnDestroy();

    expect(timerServiceMock.stop).toHaveBeenCalled();
  });

  it("should clear timeout on destroy", () => {
    jasmine.clock().install();

    component["questionTimeout"] = setTimeout(() => {}, 1000);

    spyOn(window, "clearTimeout").and.callThrough();

    component.ngOnDestroy();

    expect(clearTimeout).toHaveBeenCalled();
    expect(component["questionTimeout"]).toBeNull();
  });

  it("should execute slideError", () => {
    jasmine.clock().install();

    spyOn(component, "nextQuestion");

    component["slideError"](1500);

    jasmine.clock().tick(1500);

    expect(component.nextQuestion).toHaveBeenCalled();
  });

  it("should replace previous timeout in slideError", () => {
    jasmine.clock().install();

    spyOn(window, "clearTimeout").and.callThrough();

    component["questionTimeout"] = setTimeout(() => {}, 1000);

    component["slideError"](1500);

    expect(clearTimeout).toHaveBeenCalled();
  });

  it("should update elapsed time from timer service", () => {
    expect(component.elapsedTime).toBe("00:10");
  });

  it("should initialize in failed mode", () => {
    const failedRoute = {
      queryParams: of({
        mode: "failed",
        ids: JSON.stringify([10, 20]),
      }),
    };

    TestBed.resetTestingModule();

    TestBed.configureTestingModule({
      imports: [QuizPage],
      providers: [
        { provide: QuizService, useValue: quizServiceMock },
        { provide: HistoryService, useValue: historyServiceMock },
        { provide: TimerService, useValue: timerServiceMock },
        { provide: LogService, useValue: logServiceMock },
        { provide: ActivatedRoute, useValue: failedRoute },
        { provide: Router, useValue: routerMock },
      ],
    });

    const fixture = TestBed.createComponent(QuizPage);
    const failedComponent = fixture.componentInstance;

    failedComponent.ngOnInit();

    expect(failedComponent.mode).toBe("failed");
    expect(failedComponent.failedIds).toEqual([10, 20]);

    expect(quizServiceMock.getQuestionsByIds)
      .toHaveBeenCalledWith([10, 20]);
  });

});