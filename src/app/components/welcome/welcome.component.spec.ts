import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NavigationEnd, Router } from "@angular/router";
import { Subject } from "rxjs";
import { TEST_TYPE, WelcomeComponent } from "./welcome.component";
import { QuizService } from "../../services/quiz.service";

describe("WelcomeComponent", () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;

  let router: jasmine.SpyObj<Router>;
  let routerEvents: Subject<any>;

  let quizService: jasmine.SpyObj<QuizService>;
  let routerMock: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    routerEvents = new Subject();
    routerMock = jasmine.createSpyObj("Router", ["navigate"]);

    router = jasmine.createSpyObj("Router", ["navigate"], {
      events: routerEvents.asObservable(),
    });

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

  it("should call loadData on NavigationEnd", () => {
    spyOn(component, "loadData");

    routerEvents.next(new NavigationEnd(1, "/questions", "/welcome"));

    expect(component.loadData).toHaveBeenCalled();
  });

  it("should NOT call loadData on other router events", () => {
    spyOn(component, "loadData");

    routerEvents.next({});

    expect(component.loadData).not.toHaveBeenCalled();
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

  it("should not load username without session", () => {
    fixture.detectChanges();

    expect(component.username).toBe("");
  });

  it("should load progress", () => {
    fixture.detectChanges();

    expect(quizService.getProgress).toHaveBeenCalled();

    expect(component.progress.total).toBe(100);
  });

  it("failedCount should return length", () => {
    component.failedQuestions = [1, 2, 3];

    expect(component.failedCount).toBe(3);
  });

  it("failedCount should return zero", () => {
    component.failedQuestions = [];

    expect(component.failedCount).toBe(0);
  });

  it("areFailedQuestions true", () => {
    spyOn(component, "getFailedQuestions").and.returnValue([1]);

    expect(component.areFailedQuestions).toBeTrue();
  });

  it("areFailedQuestions false", () => {
    spyOn(component, "getFailedQuestions").and.returnValue([]);

    expect(component.areFailedQuestions).toBeFalse();
  });

  it("should return [] without session", () => {
    expect(component.getFailedQuestions()).toEqual([]);
  });

  it("should return [] without history", () => {
    localStorage.setItem(
      "userSession",
      JSON.stringify({
        username: "urtzi",
      })
    );

    expect(component.getFailedQuestions()).toEqual([]);
  });

  it("should return [] if user not found", () => {
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
                },
                {
                  questionId: 2,
                  correct: false,
                },
              ],
            },
          ],
        },
      ])
    );

    expect(component.getFailedQuestions()).toEqual([1, 2]);
  });

  it("should remove corrected questions", () => {
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
                },
                {
                  questionId: 1,
                  correct: true,
                },
                {
                  questionId: 2,
                  correct: false,
                },
              ],
            },
          ],
        },
      ])
    );

    expect(component.getFailedQuestions()).toEqual([2]);
  });

  it("should emit config and navigate", () => {
    spyOn(component.configSubmitted, "emit");

    component.username = "urtzi";
    component.selectedQuestionCount = 50;

    component.startQuiz(TEST_TYPE.RADIO);
    expect(component.configSubmitted.emit).toHaveBeenCalledWith({
      username: "urtzi",
      count: 50,
    });

    expect(router.navigate).toHaveBeenCalledWith(["/questions"], {
      queryParams: {
        name: "urtzi",
        count: 50,
        quiz_type: "RADIO",
      },
    });
  });

  it("should not navigate if username empty", () => {
    component.username = "";

    component.startQuiz(TEST_TYPE.RADIO);

    expect(router.navigate).not.toHaveBeenCalled();
  });

  it("should not navigate if count is zero", () => {
    component.username = "urtzi";
    component.selectedQuestionCount = 0;

    component.startQuiz(TEST_TYPE.RADIO);

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

  it("should not navigate to failed mode", () => {
    component.failedQuestions = [];

    component.startRepasoMode();

    expect(router.navigate).not.toHaveBeenCalled();
  });

  it("should navigate to data", () => {
    component.viewData();

    expect(router.navigate).toHaveBeenCalledWith(["/data"]);
  });

  it("should open suggestion mail", () => {
    spyOn(window, "open");

    component.sendSuggestionsMail();

    expect(window.open).toHaveBeenCalled();
  });

  it("should execute ngOnInit", () => {
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
                },
                {
                  questionId: 20,
                  correct: false,
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
