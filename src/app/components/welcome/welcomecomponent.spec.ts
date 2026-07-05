import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Router } from "@angular/router";

import { WelcomeComponent } from "./welcome.component";
import { QuizService } from "../../../services/quiz.service";

describe("WelcomeComponent", () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;

  let router: jasmine.SpyObj<Router>;
  let quizService: jasmine.SpyObj<QuizService>;

  beforeEach(async () => {
    router = jasmine.createSpyObj("Router", ["navigate"]);

    quizService = jasmine.createSpyObj("QuizService", ["getProgress"]);

    quizService.getProgress.and.returnValue({
      answered: 5,
      total: 100,
      remaining: 95,
      percentage: 5,
    });

    localStorage.clear();
    sessionStorage.clear();

    await TestBed.configureTestingModule({
      imports: [WelcomeComponent],
      providers: [
        {
          provide: Router,
          useValue: router,
        },
        {
          provide: QuizService,
          useValue: quizService,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    localStorage.clear();
    sessionStorage.clear();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should load username", () => {
    localStorage.setItem(
      "userSession",
      JSON.stringify({
        username: "urtzi",
      })
    );

    fixture.detectChanges();

    expect(component.username).toBe("urtzi");
  });

  it("should not load username when session does not exist", () => {
    fixture.detectChanges();

    expect(component.username).toBe("");
  });

  it("should load progress", () => {
    fixture.detectChanges();

    expect(quizService.getProgress).toHaveBeenCalled();

    expect(component.progress.percentage).toBe(5);
  });

  it("failedCount should return length", () => {
    component.failedQuestions = [1, 2, 3];

    expect(component.failedCount).toBe(3);
  });

  it("failedCount should return zero", () => {
    component.failedQuestions = [];

    expect(component.failedCount).toBe(0);
  });

  it("areFailedQuestions should return true", () => {
    spyOn(component, "getFailedQuestions").and.returnValue([1]);

    expect(component.areFailedQuestions).toBeTrue();
  });

  it("areFailedQuestions should return false", () => {
    spyOn(component, "getFailedQuestions").and.returnValue([]);

    expect(component.areFailedQuestions).toBeFalse();
  });

  it("should return empty array without session", () => {
    expect(component.getFailedQuestions()).toEqual([]);
  });

  it("should return empty array without history", () => {
    localStorage.setItem(
      "userSession",
      JSON.stringify({
        username: "urtzi",
      })
    );

    expect(component.getFailedQuestions()).toEqual([]);
  });

  it("should return empty array when user does not exist", () => {
    localStorage.setItem(
      "userSession",
      JSON.stringify({
        username: "urtzi",
      })
    );

    sessionStorage.setItem(
      "quiz_history",
      JSON.stringify([
        {
          user: "otro",
          attempts: [],
        },
      ])
    );

    expect(component.getFailedQuestions()).toEqual([]);
  });

  it("should return empty array when user has no attempts", () => {
    localStorage.setItem(
      "userSession",
      JSON.stringify({
        username: "urtzi",
      })
    );

    sessionStorage.setItem(
      "quiz_history",
      JSON.stringify([
        {
          user: "urtzi",
          attempts: [],
        },
      ])
    );

    expect(component.getFailedQuestions()).toEqual([]);
  });

  it("should return failed questions", () => {
    localStorage.setItem(
      "userSession",
      JSON.stringify({
        username: "urtzi",
      })
    );

    sessionStorage.setItem(
      "quiz_history",
      JSON.stringify([
        {
          user: "urtzi",
          attempts: [
            {
              questions: [
                {
                  questionId: 1,
                  correct: false,
                  date: "2026",
                },
                {
                  questionId: 2,
                  correct: false,
                  date: "2026",
                },
              ],
            },
          ],
        },
      ])
    );

    expect(component.getFailedQuestions()).toEqual([1, 2]);
  });

  it("should remove duplicated failed questions", () => {
    localStorage.setItem(
      "userSession",
      JSON.stringify({
        username: "urtzi",
      })
    );

    sessionStorage.setItem(
      "quiz_history",
      JSON.stringify([
        {
          user: "urtzi",
          attempts: [
            {
              questions: [
                {
                  questionId: 1,
                  correct: false,
                  date: "2026",
                },
                {
                  questionId: 2,
                  correct: false,
                  date: "2026",
                },
              ],
            },
            {
              questions: [
                {
                  questionId: 2,
                  correct: false,
                  date: "2026",
                },
                {
                  questionId: 3,
                  correct: false,
                  date: "2026",
                },
              ],
            },
          ],
        },
      ])
    );

    expect(component.getFailedQuestions()).toEqual([1, 2, 3]);
  });
  it("should emit config and navigate", () => {
    spyOn(component.configSubmitted, "emit");

    component.username = "urtzi";
    component.selectedQuestionCount = 50;

    component.startQuiz();

    expect(component.configSubmitted.emit).toHaveBeenCalledWith({
      username: "urtzi",
      count: 50,
    });

    expect(router.navigate).toHaveBeenCalledWith(["/questions"], {
      queryParams: {
        name: "urtzi",
        count: 50,
      },
    });
  });

  it("should not navigate when username is empty", () => {
    component.username = "";
    component.selectedQuestionCount = 25;

    component.startQuiz();

    expect(router.navigate).not.toHaveBeenCalled();
  });

  it("should not navigate when count is zero", () => {
    component.username = "urtzi";
    component.selectedQuestionCount = 0;

    component.startQuiz();

    expect(router.navigate).not.toHaveBeenCalled();
  });

  it("should navigate to failed mode", () => {
    component.username = "urtzi";
    component.failedQuestions = [5, 7];

    component.startRepasoMode();

    expect(router.navigate).toHaveBeenCalledWith(["/questions"], {
      queryParams: {
        name: "urtzi",
        mode: "failed",
        ids: JSON.stringify([5, 7]),
      },
    });
  });

  it("should not navigate to failed mode when there are no failed questions", () => {
    component.failedQuestions = [];

    component.startRepasoMode();

    expect(router.navigate).not.toHaveBeenCalled();
  });

  it("should navigate to data page", () => {
    component.viewData();

    expect(router.navigate).toHaveBeenCalledWith(["/data"]);
  });

  it("should open suggestion mail", () => {
    spyOn(window, "open");

    component.sendSuggestionsMail();

    expect(window.open).toHaveBeenCalled();
  });

  it("should execute ngOnInit completely", () => {
    localStorage.setItem(
      "userSession",
      JSON.stringify({
        username: "urtzi",
      })
    );

    sessionStorage.setItem(
      "quiz_history",
      JSON.stringify([
        {
          user: "urtzi",
          attempts: [
            {
              questions: [
                {
                  questionId: 10,
                  correct: false,
                  date: "2026",
                },
                {
                  questionId: 20,
                  correct: false,
                  date: "2026",
                },
              ],
            },
          ],
        },
      ])
    );

    fixture.detectChanges();

    expect(component.username).toBe("urtzi");

    expect(component.progress.total).toBe(100);

    expect(component.failedQuestions).toEqual([10, 20]);
  });
});
