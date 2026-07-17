import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { User, UserService } from './users.service';


describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;

  const apiUrl = '/api/users';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService],
    });

    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  describe('getUsers()', () => {
    it('should return users', async () => {
      const users: User[] = [
        {
          username: 'admin',
          code: '1234',
          active: true,
        },
        {
          username: 'user',
          code: '5678',
          active: false,
        },
      ];

      const promise = service.getUsers();

      const req = httpMock.expectOne(apiUrl);

      expect(req.request.method).toBe('GET');

      req.flush(users);

      const result = await promise;

      expect(result).toEqual(users);
    });

    it('should return empty array', async () => {
      const promise = service.getUsers();

      const req = httpMock.expectOne(apiUrl);

      req.flush([]);

      const result = await promise;

      expect(result).toEqual([]);
    });
  });

  describe('createUser()', () => {
    it('should POST user', async () => {
      const user: User = {
        username: 'nuevo',
        code: 'abcd',
        active: true,
      };

      const promise = service.createUser(user);

      const req = httpMock.expectOne(apiUrl);

      expect(req.request.method).toBe('POST');
      expect(req.request.body).toEqual(user);

      req.flush({});

      await promise;
    });

    it('should send inactive user', async () => {
      const user: User = {
        username: 'test',
        code: '0000',
        active: false,
      };

      const promise = service.createUser(user);

      const req = httpMock.expectOne(apiUrl);

      expect(req.request.body.active).toBeFalse();

      req.flush({});

      await promise;
    });
  });

  describe('deleteUser()', () => {
    it('should DELETE user', async () => {
      const promise = service.deleteUser('admin');

      const req = httpMock.expectOne(
        '/api/users?username=admin'
      );

      expect(req.request.method).toBe('DELETE');

      req.flush({});

      await promise;
    });

    it('should encode username', async () => {
      const username = 'usuario prueba';

      const promise = service.deleteUser(username);

      const req = httpMock.expectOne(
        `/api/users?username=${encodeURIComponent(username)}`
      );

      expect(req.request.method).toBe('DELETE');

      req.flush({});

      await promise;
    });
  });

  describe('setActive()', () => {
    it('should PATCH active=true', async () => {
      const promise = service.setActive('admin', true);

      const req = httpMock.expectOne(apiUrl);

      expect(req.request.method).toBe('PATCH');

      expect(req.request.body).toEqual({
        username: 'admin',
        active: true,
      });

      req.flush({});

      await promise;
    });

    it('should PATCH active=false', async () => {
      const promise = service.setActive('admin', false);

      const req = httpMock.expectOne(apiUrl);

      expect(req.request.method).toBe('PATCH');

      expect(req.request.body).toEqual({
        username: 'admin',
        active: false,
      });

      req.flush({});

      await promise;
    });
  });

  describe('HTTP errors', () => {
    it('getUsers should reject on error', async () => {
      const promise = service.getUsers();

      const req = httpMock.expectOne(apiUrl);

      req.flush('Error', {
        status: 500,
        statusText: 'Server Error',
      });

      await expectAsync(promise).toBeRejected();
    });

    it('createUser should reject on error', async () => {
      const promise = service.createUser({
        username: 'admin',
        code: '1234',
        active: true,
      });

      const req = httpMock.expectOne(apiUrl);

      req.flush('Error', {
        status: 500,
        statusText: 'Server Error',
      });

      await expectAsync(promise).toBeRejected();
    });

    it('deleteUser should reject on error', async () => {
      const promise = service.deleteUser('admin');

      const req = httpMock.expectOne(
        '/api/users?username=admin'
      );

      req.flush('Error', {
        status: 500,
        statusText: 'Server Error',
      });

      await expectAsync(promise).toBeRejected();
    });

    it('setActive should reject on error', async () => {
      const promise = service.setActive('admin', true);

      const req = httpMock.expectOne(apiUrl);

      req.flush('Error', {
        status: 500,
        statusText: 'Server Error',
      });

      await expectAsync(promise).toBeRejected();
    });
  });
});