import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { WelcomeComponent } from './welcome.component';

describe('WelcomeComponent', () => {
  let fixture: ComponentFixture<WelcomeComponent>;
  let component: WelcomeComponent;

  let routerMock: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    routerMock = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [WelcomeComponent], // standalone
      providers: [
        { provide: Router, useValue: routerMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;

    // reset storage before each test
    localStorage.clear();
    sessionStorage.clear();

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load username from localStorage on init', () => {
    localStorage.setItem('userSession', JSON.stringify({
      username: 'testUser'
    }));

    component.ngOnInit();

    expect(component.username).toBe('testUser');
  });

  it('should compute failed questions correctly from sessionStorage', () => {
    localStorage.setItem('userSession', JSON.stringify({
      username: 'testUser'
    }));

    sessionStorage.setItem('quiz_history', JSON.stringify([
      {
        user: 'testUser',
        attempts: [
          {
            wrongAnswers: {
              1: 2,
              2: 1
            }
          },
          {
            wrongAnswers: {
              2: 3,
              3: 1
            }
          }
        ]
      }
    ]));

    component.ngOnInit();

    expect(component.failedQuestions.sort()).toEqual([1, 2, 3]);
  });

  it('should return correct failedCount', () => {
    component.failedQuestions = [1, 2, 3];

    expect(component.failedCount).toBe(3);
  });

  it('should detect if there are failed questions', () => {
    spyOn(component, 'getFailedQuestions').and.returnValue([1]);

    expect(component.areFailedQuestions).toBeTrue();
  });

  it('should emit config and navigate on startQuiz', () => {
    spyOn(component.configSubmitted, 'emit');

    component.username = 'testUser';
    component.selectedQuestionCount = 25;

    component.startQuiz();

    expect(component.configSubmitted.emit).toHaveBeenCalledWith({
      username: 'testUser',
      count: 25
    });

    expect(routerMock.navigate).toHaveBeenCalledWith(
      ['/questions'],
      {
        queryParams: {
          name: 'testUser',
          count: 25
        }
      }
    );
  });

  it('should NOT navigate if username is empty', () => {
    component.username = '';
    component.selectedQuestionCount = 25;

    component.startQuiz();

    expect(routerMock.navigate).not.toHaveBeenCalled();
  });

  it('should navigate in repaso mode with failed ids', () => {
    component.username = 'testUser';
    component.failedQuestions = [1, 2, 3];

    component.startRepasoMode();

    expect(routerMock.navigate).toHaveBeenCalledWith(
      ['/questions'],
      {
        queryParams: {
          name: 'testUser',
          mode: 'failed',
          ids: JSON.stringify([1, 2, 3])
        }
      }
    );
  });

  it('should NOT navigate in repaso mode if no failed questions', () => {
    component.failedQuestions = [];

    component.startRepasoMode();

    expect(routerMock.navigate).not.toHaveBeenCalled();
  });

});