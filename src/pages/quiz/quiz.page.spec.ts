import { ComponentFixture, TestBed, fakeAsync, tick } from "@angular/core/testing";
import { of, throwError } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";

import { QuizPage } from "./quiz.page";
import { QuizService } from "../../services/quiz.service";
import { HistoryService } from "../../services/history.service";
import { TimerService } from "../../services/timer.service";
import { LogService } from "../../services/log.service";
import { Question } from "../../interfaces/question";

describe("QuizPage", () => {
  let component: QuizPage;
  let fixture: ComponentFixture<QuizPage>;

  let quizService: jasmine.SpyObj<QuizService>;
  let historyService: jasmine.SpyObj<HistoryService>;
  let timerService: jasmine.SpyObj<TimerService>;
  let logService: jasmine.SpyObj<LogService>;
  let router: jasmine.SpyObj<Router>;

  const question: Question = {
    id: 1,
    question: "Pregunta",
    correct: "a",
    options: {
      a: "A",
      b: "B",
      c: "C",
      d: "D",
    },
  };

  beforeEach(async () => {
    quizService = jasmine.createSpyObj("QuizService", [
      "getQuestions",
      "getQuestionsByIds",
      "checkAnswer",
      "ask",
    ]);

    historyService = jasmine.createSpyObj("HistoryService", [
      "saveWrongAnswer",
      "removeWrongAnswer",
    ]);

    timerService = jasmine.createSpyObj(
      "TimerService",
      ["start", "stop"],
      {
        elapsedTime$: of("00:00"),
      }
    );

    logService = jasmine.createSpyObj("LogService", ["log"]);

    router = jasmine.createSpyObj("Router", ["navigate"]);

    quizService.getQuestions.and.returnValue([question]);

    await TestBed.configureTestingModule({
      imports: [QuizPage],
      providers: [
        {
          provide: QuizService,
          useValue: quizService,
        },
        {
          provide: HistoryService,
          useValue: historyService,
        },
        {
          provide: TimerService,
          useValue: timerService,
        },
        {
          provide: LogService,
          useValue: logService,
        },
        {
          provide: Router,
          useValue: router,
        },
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: of({
              count: 1,
              name: "urtzi",
            }),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(QuizPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should load questions", () => {
    expect(component.questions.length).toBe(1);
    expect(quizService.getQuestions).toHaveBeenCalled();
  });

  it("should calculate progress", () => {
    component.currentIndex = 1;
    expect(component.progress).toBe(1);
  });

  it("should answer correctly", fakeAsync(() => {
    quizService.checkAnswer.and.returnValue(true);

    component.answer("a");

    expect(component.correctAnswers).toBe(1);
    expect(logService.log).toHaveBeenCalled();

    tick(1500);
  }));

  it("should answer incorrectly", () => {
    quizService.checkAnswer.and.returnValue(false);

    component.answer("b");

    expect(historyService.saveWrongAnswer).toHaveBeenCalledWith(1);

    expect(component.nextVisible).toBeTrue();
  });

  it("should remove wrong answer in failed mode", fakeAsync(() => {
    component.mode = "failed";
    component.failedIds = [1];

    quizService.checkAnswer.and.returnValue(true);

    component.answer("a");

    expect(historyService.removeWrongAnswer).toHaveBeenCalledWith(1);

    tick(1500);
  }));

  it("should ignore second answer", () => {
    component["answerLocked"] = true;

    component.answer("a");

    expect(logService.log).not.toHaveBeenCalled();
  });

  it("should move to next question", () => {
    component.questions = [question, question];

    component.nextQuestion();

    expect(component.currentIndex).toBe(1);
  });

  it("should finish quiz", () => {
    component.questions = [question];
    component.currentIndex = 0;

    component.nextQuestion();

    expect(timerService.stop).toHaveBeenCalled();
  });

  it("should navigate home", () => {
    component.goToHome();

    expect(router.navigate).toHaveBeenCalledWith(["/welcome"]);
  });

  it("should call GPT", () => {
    quizService.ask.and.returnValue(
      of({
        answer: "a",
        explanation: "ok",
      })
    );

    component.useMagic(question as any);

    expect(component.magicAnswer?.answer).toBe("a");
  });

  it("should handle GPT error", () => {
    quizService.ask.and.returnValue(
      throwError(() => new Error())
    );

    component.useMagic(question as any);

    expect(component.errorMessage).toContain("Error");
  });

  it("should return correct option color", () => {
    component.questions = [question];
    component.selectedOption = "a";
    component.isAnswered = true;

    expect(component.getOptionColor("a")).toBe("correct-option");
  });

  it("should return incorrect option color", () => {
    component.questions = [question];
    component.selectedOption = "b";
    component.isAnswered = true;

    expect(component.getOptionColor("b")).toBe("incorrect-option");
  });

  it("should destroy component", () => {
    component.ngOnDestroy();

    expect(timerService.stop).toHaveBeenCalled();
  });
});