import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { of, Subject } from 'rxjs';

import { QuizPage } from './quiz.page';
import { QuizService } from '../../services/quiz.service';
import { LogService } from '../../services/log.service';

describe('QuizPage', () => {
  let fixture: ComponentFixture<QuizPage>;
  let component: QuizPage;

  let routerMock: jasmine.SpyObj<Router>;
  let logServiceMock: jasmine.SpyObj<LogService>;
  let quizServiceMock: jasmine.SpyObj<QuizService>;

  let routeSubject: Subject<any>;

  beforeEach(async () => {
    routerMock = jasmine.createSpyObj('Router', ['navigate']);
    logServiceMock = jasmine.createSpyObj('LogService', ['log']);

    quizServiceMock = jasmine.createSpyObj('QuizService', [
      'getQuestions',
      'getQuestionsByIds',
      'ask'
    ]);

    quizServiceMock.getQuestions.and.returnValue([
      { id: 1, correct: 'A', options: [] },
      { id: 2, correct: 'B', options: [] }
    ] as any);

    quizServiceMock.getQuestionsByIds.and.returnValue([
      { id: 1, correct: 'A', options: [] }
    ] as any);

    quizServiceMock.ask.and.returnValue(of({
      answer: 'test',
      explanation: 'ok'
    }));

    routeSubject = new Subject();

    await TestBed.configureTestingModule({
      imports: [QuizPage],
      providers: [
        { provide: Router, useValue: routerMock },
        { provide: LogService, useValue: logServiceMock },
        { provide: QuizService, useValue: quizServiceMock },
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: routeSubject.asObservable()
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(QuizPage);
    component = fixture.componentInstance;

    localStorage.clear();
    sessionStorage.clear();

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load normal quiz mode from query params', () => {
    routeSubject.next({
      name: 'testUser',
      count: 2
    });

    expect(component.playerName).toBe('testUser');
    expect(component.count).toBe(2);
    expect(component.questions.length).toBe(2);
  });

  it('should load failed mode correctly', () => {
    routeSubject.next({
      name: 'testUser',
      mode: 'failed',
      ids: JSON.stringify([1])
    });

    expect(component.mode).toBe('failed');
    expect(component.questions.length).toBe(1);
  });

  it('should progress when answering correctly', () => {
    component.questions = [
      { id: 1, correct: 'A', options: [] } as any
    ];

    component.answer('A');

    expect(component.correctAnswers).toBe(1);
    expect(logServiceMock.log).toHaveBeenCalledWith(
      'ANSWER_SELECTED',
      jasmine.any(Object)
    );
  });

  it('should mark wrong answer and increase wrongAnswersMap', () => {
    component.questions = [
      { id: 1, correct: 'A', options: [] } as any
    ];

    component.answer('B');

    expect(component.wrongAnswersMap[1]).toBe(1);
    expect(component.nextVisible).toBeTrue();
  });

  it('should navigate home', () => {
    component.goToHome();
    expect(routerMock.navigate).toHaveBeenCalledWith(['/welcome']);
  });

  it('should finish quiz when reaching end', () => {
    component.questions = [
      { id: 1, correct: 'A', options: [] } as any
    ];

    component.currentIndex = 0;

    component.nextQuestion();

    expect(component['quizFinished']).toBeTrue();
  });

  it('should compute progress correctly', () => {
    component.questions = [1, 2, 3] as any;
    component.currentIndex = 1;

    expect(component.progress).toBe(1 / 3);
  });

  it('should call magic API and set response', fakeAsync(() => {
    component.questions = [
      { id: 1, correct: 'A', options: [] } as any
    ];

    component.useMagic({ question: 'test' });

    tick();

    expect(quizServiceMock.ask).toHaveBeenCalled();
    expect(component.magicAnswer).toEqual({
      answer: 'test',
      explanation: 'ok'
    });
  }));

  it('should not allow double answer', () => {
    component.questions = [
      { id: 1, correct: 'A', options: [] } as any
    ];

    component.answer('A');
    component.answer('A');

    expect(component.correctAnswers).toBe(1);
  });

  it('should reset timer on init/reset', fakeAsync(() => {
    component['startTimer']();

    tick(3000);

    expect(component.elapsedTime).toContain(':');
  }));
});