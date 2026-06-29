import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { LogService } from './log.service';

describe('LogService', () => {
  let service: LogService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LogService]
    });

    service = TestBed.inject(LogService);
    httpMock = TestBed.inject(HttpTestingController);

    localStorage.clear();
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send log payload with event and data', async () => {
    localStorage.setItem('userSession', JSON.stringify({
      username: 'testUser'
    }));

    const promise = service.log('TEST_EVENT', { foo: 'bar' });

    const req = httpMock.expectOne('http://localhost:3000/api/log');

    expect(req.request.method).toBe('POST');

    expect(req.request.body.event).toBe('TEST_EVENT');
    expect(req.request.body.user).toBe('testUser');
    expect(req.request.body.data).toEqual({ foo: 'bar' });

    // ✅ NO dependemos del valor exacto de location
    expect(typeof req.request.body.url).toBe('string');

    expect(req.request.body.timestamp).toBeTruthy();

    req.flush({ ok: true });

    await promise;
  });

  it('should handle missing userSession gracefully', async () => {
    const promise = service.log('EVENT_NO_USER', { a: 1 });

    const req = httpMock.expectOne('http://localhost:3000/api/log');

    expect(req.request.body.user).toBeNull();

    req.flush({ ok: true });

    await promise;
  });

  it('should clean null data', async () => {
    const promise = service.log('EVENT_NULL', null);

    const req = httpMock.expectOne('http://localhost:3000/api/log');

    expect(req.request.body.data).toBeNull();

    req.flush({ ok: true });

    await promise;
  });

  it('should fallback to string for non-serializable data', async () => {
    const circular: any = {};
    circular.self = circular;

    const promise = service.log('EVENT_CIRCULAR', circular);

    const req = httpMock.expectOne('http://localhost:3000/api/log');

    expect(typeof req.request.body.data).toBe('string');

    req.flush({ ok: true });

    await promise;
  });

  it('should not throw when API fails', async () => {
    spyOn(console, 'error');

    const promise = service.log('EVENT_FAIL', { test: true });

    const req = httpMock.expectOne('http://localhost:3000/api/log');

    req.error(new ProgressEvent('Network error'));

    await promise;

    expect(console.error).toHaveBeenCalled();
  });
});