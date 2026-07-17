import { TestBed } from '@angular/core/testing';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { authGuard } from './auth-guard';

describe('authGuard', () => {

  let router: jasmine.SpyObj<Router>;
  let mockUrlTree: UrlTree;

  beforeEach(() => {

    mockUrlTree = {} as UrlTree;

    router = jasmine.createSpyObj('Router', ['createUrlTree']);
    router.createUrlTree.and.returnValue(mockUrlTree);

    TestBed.configureTestingModule({
      providers: [
        {
          provide: Router,
          useValue: router
        }
      ]
    });

    localStorage.clear();

  });

  function executeGuard() {
    return TestBed.runInInjectionContext(() =>
      authGuard(
        {} as ActivatedRouteSnapshot,
        {} as RouterStateSnapshot
      )
    );
  }

  it('should allow access when session is valid', () => {

    localStorage.setItem('userSession', JSON.stringify({
      version: 2,
      username: 'admin',
      deviceId: '12345',
      timestamp: new Date().toISOString()
    }));

    const result = executeGuard();

    expect(result).toBeTrue();

  });

  it('should redirect when session does not exist', () => {

    const result = executeGuard();

    expect(router.createUrlTree).toHaveBeenCalledWith(['/login']);
    expect(result).toBe(mockUrlTree);

  });

  it('should redirect when version is incorrect', () => {

    spyOn(localStorage, 'removeItem').and.callThrough();

    localStorage.setItem('userSession', JSON.stringify({
      version: 1,
      username: 'admin',
      deviceId: '12345',
      timestamp: new Date().toISOString()
    }));

    const result = executeGuard();

    expect(localStorage.removeItem).toHaveBeenCalledWith('userSession');
    expect(router.createUrlTree).toHaveBeenCalledWith(['/login']);
    expect(result).toBe(mockUrlTree);

  });

  it('should redirect when username is missing', () => {

    localStorage.setItem('userSession', JSON.stringify({
      version: 2,
      deviceId: '12345',
      timestamp: new Date().toISOString()
    }));

    const result = executeGuard();

    expect(router.createUrlTree).toHaveBeenCalledWith(['/login']);
    expect(result).toBe(mockUrlTree);

  });

  it('should redirect when deviceId is missing', () => {

    localStorage.setItem('userSession', JSON.stringify({
      version: 2,
      username: 'admin',
      timestamp: new Date().toISOString()
    }));

    const result = executeGuard();

    expect(router.createUrlTree).toHaveBeenCalledWith(['/login']);
    expect(result).toBe(mockUrlTree);

  });

  it('should redirect when timestamp is missing', () => {

    localStorage.setItem('userSession', JSON.stringify({
      version: 2,
      username: 'admin',
      deviceId: '12345'
    }));

    const result = executeGuard();

    expect(router.createUrlTree).toHaveBeenCalledWith(['/login']);
    expect(result).toBe(mockUrlTree);

  });

  it('should redirect when session has expired', () => {

    const expired = new Date(Date.now() - (49 * 60 * 60 * 1000));

    localStorage.setItem('userSession', JSON.stringify({
      version: 2,
      username: 'admin',
      deviceId: '12345',
      timestamp: expired.toISOString()
    }));

    const result = executeGuard();

    expect(router.createUrlTree).toHaveBeenCalledWith(['/login']);
    expect(result).toBe(mockUrlTree);

  });

  it('should redirect when session contains invalid JSON', () => {

    spyOn(localStorage, 'removeItem').and.callThrough();

    localStorage.setItem('userSession', '{invalid json');

    const result = executeGuard();

    expect(localStorage.removeItem).toHaveBeenCalledWith('userSession');
    expect(router.createUrlTree).toHaveBeenCalledWith(['/login']);
    expect(result).toBe(mockUrlTree);

  });

});