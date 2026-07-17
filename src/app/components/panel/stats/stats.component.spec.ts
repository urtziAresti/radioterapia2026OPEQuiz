import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { StatsComponent } from './stats.component';
import { StatsService } from '../../../services/stats.service';

describe('StatsComponent', () => {
  let component: StatsComponent;
  let fixture: ComponentFixture<StatsComponent>;
  let statsServiceSpy: jasmine.SpyObj<StatsService>;

  const mockResponse = {
    success: true,
    data: [
      {
        playerName: 'Juan',
        correctAnswers: 8,
        totalQuestions: 10,
        elapsedTime: '05:30',
        createdAt: '2026-07-01T10:00:00Z'
      },
      {
        playerName: 'Juan',
        correctAnswers: 9,
        totalQuestions: 10,
        elapsedTime: '04:30',
        createdAt: '2026-07-02T10:00:00Z'
      },
      {
        playerName: 'Pedro',
        correctAnswers: 6,
        totalQuestions: 10,
        elapsedTime: '06:00',
        createdAt: '2026-07-03T10:00:00Z'
      }
    ]
  };

  beforeEach(async () => {

    statsServiceSpy = jasmine.createSpyObj('StatsService', [
      'getUserStats'
    ]);

    await TestBed.configureTestingModule({
      imports: [StatsComponent],
      providers: [
        {
          provide: StatsService,
          useValue: statsServiceSpy
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(StatsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {

    statsServiceSpy.getUserStats.and.returnValue(
      of({
        success: true,
        data: []
      })
    );

    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  it('should call fetchUserStats on init', () => {

    statsServiceSpy.getUserStats.and.returnValue(
      of({
        success: true,
        data: []
      })
    );

    spyOn(component, 'fetchUserStats');

    component.ngOnInit();

    expect(component.fetchUserStats).toHaveBeenCalled();
  });

  it('should load and group user stats', () => {

    statsServiceSpy.getUserStats.and.returnValue(
      of(mockResponse)
    );

    component.fetchUserStats();

    expect(component.loading).toBeFalse();

    expect(component.userStats.length).toBe(2);

    const juan = component.userStats.find(
      (u: any) => u.playerName === 'Juan'
    );

    expect(juan.totalQuizzes).toBe(2);
    expect(juan.correctAnswers).toBe(17);
    expect(juan.totalQuestions).toBe(20);
    expect(juan.totalSeconds).toBe(600);
    expect(juan.percentage).toBe(85);
    expect(juan.elapsedTime).toBe('10:00');
  });

  it('should sort users by correct answers', () => {

    statsServiceSpy.getUserStats.and.returnValue(
      of(mockResponse)
    );

    component.fetchUserStats();

    expect(component.userStats[0].playerName).toBe('Juan');
    expect(component.userStats[1].playerName).toBe('Pedro');
  });

  it('should calculate totals', () => {

    statsServiceSpy.getUserStats.and.returnValue(
      of(mockResponse)
    );

    component.fetchUserStats();

    expect(component.totals.users).toBe(2);
    expect(component.totals.quizzes).toBe(3);
    expect(component.totals.correctAnswers).toBe(23);
    expect(component.totals.totalQuestions).toBe(30);
    expect(component.totals.totalSeconds).toBe(960);
  });

  it('should handle service errors', () => {

    spyOn(console, 'error');

    statsServiceSpy.getUserStats.and.returnValue(
      throwError(() => new Error('Server error'))
    );

    component.fetchUserStats();

    expect(component.loading).toBeFalse();
    expect(console.error).toHaveBeenCalled();
  });

  describe('formatTime', () => {

    it('should format seconds correctly', () => {

      expect(component.formatTime(0)).toBe('00:00:00');

      expect(component.formatTime(59))
        .toBe('00:00:59');

      expect(component.formatTime(60))
        .toBe('00:01:00');

      expect(component.formatTime(3661))
        .toBe('01:01:01');
    });

  });

});