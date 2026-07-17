import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { ResultsComponent } from './results.component';
import { StatsService } from '../../services/stats.service';
import { I18nService } from '../../../assets/i18n/i18n.service';

describe('ResultsComponent', () => {

  let component: ResultsComponent;
  let fixture: ComponentFixture<ResultsComponent>;

  let routerSpy: jasmine.SpyObj<Router>;
  let statsServiceSpy: jasmine.SpyObj<StatsService>;

  beforeEach(async () => {

    routerSpy = jasmine.createSpyObj('Router', [
      'navigateByUrl'
    ]);

    statsServiceSpy = jasmine.createSpyObj('StatsService', [
      'uploadProgress'
    ]);

    routerSpy.navigateByUrl.and.returnValue(Promise.resolve(true));
    statsServiceSpy.uploadProgress.and.returnValue(Promise.resolve());

    await TestBed.configureTestingModule({
      imports: [ResultsComponent],
      providers: [
        {
          provide: Router,
          useValue: routerSpy
        },
        {
          provide: StatsService,
          useValue: statsServiceSpy
        },
        {
          provide: I18nService,
          useValue: {
            texts: {}
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ResultsComponent);
    component = fixture.componentInstance;

    component.resultsData = {
      playerName: 'Juan',
      quiz_type: 'General',
      correctAnswers: 8,
      totalQuestions: 10,
      elapsedTime: '05:30'
    } as any;

    component.userName = 'Juan';

  });

  it('should create', () => {

    expect(component).toBeTruthy();

  });

  it('should call saveProgress on init', () => {

    spyOn(component, 'saveProgress');

    component.ngOnInit();

    expect(component.saveProgress).toHaveBeenCalled();

  });

  it('should upload progress', async () => {

    await component.saveProgress();

    expect(statsServiceSpy.uploadProgress).toHaveBeenCalledWith({
      playerName: 'Juan',
      quiz_type: 'General',
      correctAnswers: 8,
      totalQuestions: 10,
      elapsedTime: '05:30'
    });

  });

  it('should navigate to welcome when goToHome is called', async () => {

    await component.goToHome();

    expect(routerSpy.navigateByUrl).toHaveBeenCalledWith('/', {
      skipLocationChange: true
    });

    expect(routerSpy.navigateByUrl).toHaveBeenCalledWith('/welcome', {
      replaceUrl: true
    });

  });

});