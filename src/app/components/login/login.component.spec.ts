import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { NgZone } from '@angular/core';
import { ToastController } from '@ionic/angular';

import { LoginComponent } from './login.component';
import { LogService } from '../../services/log.service';

describe('LoginComponent', () => {
  let fixture: ComponentFixture<LoginComponent>;
  let component: LoginComponent;

  let httpMock: HttpTestingController;

  let routerMock: jasmine.SpyObj<Router>;
  let logServiceMock: jasmine.SpyObj<LogService>;
  let toastControllerMock: jasmine.SpyObj<ToastController>;
  let ngZone: NgZone;

  beforeEach(async () => {
    routerMock = jasmine.createSpyObj('Router', ['navigate']);
    logServiceMock = jasmine.createSpyObj('LogService', ['log']);
    logServiceMock.log.and.returnValue(Promise.resolve());

    toastControllerMock = jasmine.createSpyObj('ToastController', ['create']);

    toastControllerMock = jasmine.createSpyObj('ToastController', ['create']);

    await TestBed.configureTestingModule({
      imports: [
        LoginComponent,
        HttpClientTestingModule
      ],
      providers: [
        { provide: Router, useValue: routerMock },
        { provide: LogService, useValue: logServiceMock },
        { provide: ToastController, useValue: toastControllerMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;

    httpMock = TestBed.inject(HttpTestingController);
    ngZone = TestBed.inject(NgZone);

    fixture.detectChanges();
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should NOT call API if form is invalid', async () => {
    component.loginForm.setValue({
      username: '',
      code: ''
    });

    await component.onLogin();

    httpMock.expectNone('/api/login');
  });

  it('should login successfully and navigate to welcome', fakeAsync(async () => {
    component.loginForm.setValue({
      username: 'test',
      code: '1234'
    });

    const promise = component.onLogin();

    const req = httpMock.expectOne('/api/login');
    expect(req.request.method).toBe('POST');

    req.flush({
      ok: true,
      username: 'test'
    });

    tick();
    await promise;

    expect(routerMock.navigate).toHaveBeenCalledWith(['/welcome']);
    expect(logServiceMock.log).toHaveBeenCalledWith('LOGIN_SUCCESS', jasmine.any(Object));
  }));

  it('should show error toast on failed login', fakeAsync(async () => {
    component.loginForm.setValue({
      username: 'test',
      code: 'wrong'
    });

    spyOn(component, 'presentErrorToast').and.resolveTo();

    const promise = component.onLogin();

    const req = httpMock.expectOne('/api/login');
    req.flush({ ok: false }, { status: 200, statusText: 'OK' });

    tick();
    await promise;

    expect(component.presentErrorToast).toHaveBeenCalled();
  }));

  it('should handle HTTP error response', fakeAsync(async () => {
    component.loginForm.setValue({
      username: 'test',
      code: 'wrong'
    });

    spyOn(component, 'presentErrorToast').and.resolveTo();

    const promise = component.onLogin();

    const req = httpMock.expectOne('/api/login');
    req.error(new ProgressEvent('Network error'), { status: 500 });

    tick();
    await promise;

    expect(component.presentErrorToast).toHaveBeenCalled();
    expect(logServiceMock.log).toHaveBeenCalledWith(
      'LOGIN_FAILED',
      jasmine.any(Object)
    );
  }));

  it('should generate a new deviceId if not present in localStorage', () => {
    spyOn(localStorage, 'getItem').and.returnValue(null);
    const setItemSpy = spyOn(localStorage, 'setItem');

    const deviceId = component.getDeviceId();

    expect(deviceId).toBeTruthy();
    expect(setItemSpy).toHaveBeenCalledWith('deviceId', deviceId);
  });

  it('should return existing deviceId from localStorage', () => {
    spyOn(localStorage, 'getItem').and.returnValue('existing-device-id');

    const deviceId = component.getDeviceId();

    expect(deviceId).toBe('existing-device-id');
  });

});