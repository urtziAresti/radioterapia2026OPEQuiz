import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsersComponent } from './users.component';
import { UserService, User } from '../../../services/users.service';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let userService: jasmine.SpyObj<UserService>;

  beforeEach(async () => {
    userService = jasmine.createSpyObj('UserService', [
      'getUsers',
      'createUser',
      'deleteUser',
      'setActive'
    ]);

    userService.getUsers.and.resolveTo([]);
    userService.createUser.and.resolveTo();
    userService.deleteUser.and.resolveTo();
    userService.setActive.and.resolveTo();

    await TestBed.configureTestingModule({
      imports: [UsersComponent],
      providers: [
        {
          provide: UserService,
          useValue: userService
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit()', () => {
    it('should load users', async () => {
      const users: User[] = [
        {
          username: 'admin',
          code: '1234',
          active: true
        }
      ];

      userService.getUsers.and.resolveTo(users);

      await component.ngOnInit();

      expect(userService.getUsers).toHaveBeenCalled();
      expect(component.users).toEqual(users);
    });
  });

  describe('loadUsers()', () => {
    it('should assign users', async () => {
      const users: User[] = [
        {
          username: 'pepe',
          code: '1111',
          active: true
        },
        {
          username: 'juan',
          code: '2222',
          active: false
        }
      ];

      userService.getUsers.and.resolveTo(users);

      await component.loadUsers();

      expect(component.users.length).toBe(2);
      expect(component.users).toEqual(users);
    });

    it('should support empty list', async () => {
      userService.getUsers.and.resolveTo([]);

      await component.loadUsers();

      expect(component.users).toEqual([]);
    });
  });

  describe('addUser()', () => {
    it('should create user', async () => {
      component.newUsername = 'nuevo';
      component.newCode = '1234';

      spyOn(component, 'loadUsers').and.resolveTo();

      await component.addUser();

      expect(userService.createUser).toHaveBeenCalledWith({
        username: 'nuevo',
        code: '1234',
        active: true
      });

      expect(component.newUsername).toBe('');
      expect(component.newCode).toBe('');

      expect(component.loadUsers).toHaveBeenCalled();
    });

    it('should not create when username empty', async () => {
      component.newUsername = '';
      component.newCode = '1234';

      await component.addUser();

      expect(userService.createUser).not.toHaveBeenCalled();
    });

    it('should not create when code empty', async () => {
      component.newUsername = 'admin';
      component.newCode = '';

      await component.addUser();

      expect(userService.createUser).not.toHaveBeenCalled();
    });

    it('should not create when both empty', async () => {
      component.newUsername = '';
      component.newCode = '';

      await component.addUser();

      expect(userService.createUser).not.toHaveBeenCalled();
    });
  });

  describe('deleteUser()', () => {
    it('should delete and reload', async () => {
      spyOn(component, 'loadUsers').and.resolveTo();

      await component.deleteUser('admin');

      expect(userService.deleteUser).toHaveBeenCalledWith('admin');
      expect(component.loadUsers).toHaveBeenCalled();
    });
  });

  describe('toggleUser()', () => {
    it('should disable active user', async () => {
      spyOn(component, 'loadUsers').and.resolveTo();

      await component.toggleUser({
        username: 'admin',
        code: '',
        active: true
      });

      expect(userService.setActive).toHaveBeenCalledWith(
        'admin',
        false
      );

      expect(component.loadUsers).toHaveBeenCalled();
    });

    it('should enable inactive user', async () => {
      spyOn(component, 'loadUsers').and.resolveTo();

      await component.toggleUser({
        username: 'admin',
        code: '',
        active: false
      });

      expect(userService.setActive).toHaveBeenCalledWith(
        'admin',
        true
      );

      expect(component.loadUsers).toHaveBeenCalled();
    });
  });

  describe('extra coverage', () => {
    it('should keep users after load', async () => {
      const users: User[] = [
        {
          username: 'u1',
          code: '1',
          active: true
        }
      ];

      userService.getUsers.and.resolveTo(users);

      await component.loadUsers();

      expect(component.users[0].username).toBe('u1');
    });

    it('should call getUsers every load', async () => {
      await component.loadUsers();
      await component.loadUsers();

      expect(userService.getUsers).toHaveBeenCalledTimes(2);
    });

    it('should clear inputs after add', async () => {
      component.newUsername = 'abc';
      component.newCode = '999';

      spyOn(component, 'loadUsers').and.resolveTo();

      await component.addUser();

      expect(component.newUsername).toEqual('');
      expect(component.newCode).toEqual('');
    });
  });
});