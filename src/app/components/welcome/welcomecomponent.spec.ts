import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WelcomeComponent } from './welcome.component';
import { Router } from '@angular/router';
import { QuizService } from '../../../services/quiz.service';
import { QuestionProgress } from '../../../interfaces/progress';

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;
  let router: jasmine.SpyObj<Router>;
  let quizService: jasmine.SpyObj<QuizService>;

  const progress: QuestionProgress = {
    answered: 10,
    total: 200,
    remaining: 190,
    percentage: 5,
  };

  beforeEach(async () => {
    router = jasmine.createSpyObj('Router', ['navigate']);
    quizService = jasmine.createSpyObj('QuizService', ['getProgress']);

    quizService.getProgress.and.returnValue(progress);

    await TestBed.configureTestingModule({
      imports: [WelcomeComponent],
      providers: [
        { provide: Router, useValue: router },
        { provide: QuizService, useValue: quizService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;

    localStorage.clear();
    sessionStorage.clear();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should load username and progress', () => {
      localStorage.setItem(
        'userSession',
        JSON.stringify({ username: 'urtzi' })
      );

      spyOn(component, 'getFailedQuestions').and.returnValue([1, 2]);

      component.ngOnInit();

      expect(component.username).toBe('urtzi');
      expect(component.progress).toEqual(progress);
      expect(component.failedQuestions).toEqual([1, 2]);
    });

    it('should work without session', () => {
      spyOn(component, 'getFailedQuestions').and.returnValue([]);

      component.ngOnInit();

      expect(component.username).toBe('');
      expect(component.progress).toEqual(progress);
    });
  });

  describe('failed questions', () => {
    it('should return empty array if there is no session', () => {
      expect(component.getFailedQuestions()).toEqual([]);
    });

    it('should return empty array if there is no history', () => {
      localStorage.setItem(
        'userSession',
        JSON.stringify({ username: 'urtzi' })
      );

      expect(component.getFailedQuestions()).toEqual([]);
    });

    it('should return unique failed questions', () => {
      localStorage.setItem(
        'userSession',
        JSON.stringify({ username: 'urtzi' })
      );

      sessionStorage.setItem(
        'quiz_history',
        JSON.stringify([
          {
            user: 'urtzi',
            attempts: [
              {
                wrongAnswers: {
                  1: 1,
                  2: 3,
                },
              },
              {
                wrongAnswers: {
                  2: 1,
                  3: 1,
                },
              },
            ],
          },
        ])
      );

      expect(component.getFailedQuestions()).toEqual([1, 2, 3]);
    });

    it('failedCount should return failed questions length', () => {
      component.failedQuestions = [1, 2, 3];

      expect(component.failedCount).toBe(3);
    });

    it('areFailedQuestions should return true when there are failed questions', () => {
      spyOn(component, 'getFailedQuestions').and.returnValue([1]);

      expect(component.areFailedQuestions).toBeTrue();
    });

    it('areFailedQuestions should return false when there are no failed questions', () => {
      spyOn(component, 'getFailedQuestions').and.returnValue([]);

      expect(component.areFailedQuestions).toBeFalse();
    });
  });

  describe('startQuiz', () => {
    it('should emit config and navigate', () => {
      spyOn(component.configSubmitted, 'emit');

      component.username = 'urtzi';
      component.selectedQuestionCount = 25;

      component.startQuiz();

      expect(component.configSubmitted.emit).toHaveBeenCalledWith({
        username: 'urtzi',
        count: 25,
      });

      expect(router.navigate).toHaveBeenCalledWith(['/questions'], {
        queryParams: {
          name: 'urtzi',
          count: 25,
        },
      });
    });

    it('should not navigate if username is empty', () => {
      component.username = '';

      component.startQuiz();

      expect(router.navigate).not.toHaveBeenCalled();
    });
  });

  describe('startRepasoMode', () => {
    it('should not navigate if there are no failed questions', () => {
      component.failedQuestions = [];

      component.startRepasoMode();

      expect(router.navigate).not.toHaveBeenCalled();
    });

    it('should navigate to review mode', () => {
      component.username = 'urtzi';
      component.failedQuestions = [1, 2];

      component.startRepasoMode();

      expect(router.navigate).toHaveBeenCalledWith(['/questions'], {
        queryParams: {
          name: 'urtzi',
          mode: 'failed',
          ids: JSON.stringify([1, 2]),
        },
      });
    });
  });

  describe('viewData', () => {
    it('should navigate to data page', () => {
      component.viewData();

      expect(router.navigate).toHaveBeenCalledWith(['/data']);
    });
  });

});