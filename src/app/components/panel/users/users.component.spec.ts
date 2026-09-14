import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsersComponent } from './users.component';
import { User, UserService } from '../../../services/users.service';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let userService: jasmine.SpyObj<UserService>;

  beforeEach(async () => {
    userService = jasmine.createSpyObj<UserService>('UserService', [
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

  describe('creation', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
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

      expect(userService.getUsers).toHaveBeenCalledTimes(1);
      expect(component.users).toEqual(users);
    });
  });

  describe('loadUsers()', () => {
    it('should load and assign users', async () => {
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

      expect(userService.getUsers).toHaveBeenCalledTimes(1);
      expect(component.users).toEqual(users);
    });

    it('should support an empty users list', async () => {
      userService.getUsers.and.resolveTo([]);

      await component.loadUsers();

      expect(component.users).toEqual([]);
    });

    it('should call getUsers every time it is executed', async () => {
      await component.loadUsers();
      await component.loadUsers();

      expect(userService.getUsers).toHaveBeenCalledTimes(2);
    });
  });

  describe('addUser()', () => {
    it('should create a user with active true', async () => {
      component.newUsername = 'nuevo';
      component.newCode = '1234';

      spyOn(component, 'loadUsers').and.resolveTo();

      await component.addUser();

      expect(userService.createUser).toHaveBeenCalledTimes(1);
      expect(userService.createUser).toHaveBeenCalledWith({
        username: 'nuevo',
        code: '1234',
        active: true
      });

      expect(component.newUsername).toBe('');
      expect(component.newCode).toBe('');

      expect(component.loadUsers).toHaveBeenCalledTimes(1);
    });

    it('should not create a user when username is empty', async () => {
      component.newUsername = '';
      component.newCode = '1234';

      await component.addUser();

      expect(userService.createUser).not.toHaveBeenCalled();
    });

    it('should not create a user when code is empty', async () => {
      component.newUsername = 'admin';
      component.newCode = '';

      await component.addUser();

      expect(userService.createUser).not.toHaveBeenCalled();
    });

    it('should not create a user when username and code are empty', async () => {
      component.newUsername = '';
      component.newCode = '';

      await component.addUser();

      expect(userService.createUser).not.toHaveBeenCalled();
    });

    it('should reload users after creating a user', async () => {
      component.newUsername = 'nuevo';
      component.newCode = '1234';

      spyOn(component, 'loadUsers').and.resolveTo();

      await component.addUser();

      expect(component.loadUsers).toHaveBeenCalledTimes(1);
    });

    it('should clear username and code after creating a user', async () => {
      component.newUsername = 'nuevo';
      component.newCode = '1234';

      spyOn(component, 'loadUsers').and.resolveTo();

      await component.addUser();

      expect(component.newUsername).toBe('');
      expect(component.newCode).toBe('');
    });
  });

  describe('deleteUser()', () => {
    it('should delete the specified user', async () => {
      spyOn(component, 'loadUsers').and.resolveTo();

      await component.deleteUser('admin');

      expect(userService.deleteUser).toHaveBeenCalledTimes(1);
      expect(userService.deleteUser).toHaveBeenCalledWith('admin');
    });

    it('should reload users after deleting a user', async () => {
      spyOn(component, 'loadUsers').and.resolveTo();

      await component.deleteUser('admin');

      expect(component.loadUsers).toHaveBeenCalledTimes(1);
    });
  });

  describe('toggleUser()', () => {
    it('should deactivate an active user', async () => {
      const user: User = {
        username: 'admin',
        code: '1234',
        active: true
      };

      spyOn(component, 'loadUsers').and.resolveTo();

      await component.toggleUser(user);

      expect(userService.setActive).toHaveBeenCalledTimes(1);
      expect(userService.setActive).toHaveBeenCalledWith(
        'admin',
        false
      );

      expect(component.loadUsers).toHaveBeenCalledTimes(1);
    });

    it('should activate an inactive user', async () => {
      const user: User = {
        username: 'admin',
        code: '1234',
        active: false
      };

      spyOn(component, 'loadUsers').and.resolveTo();

      await component.toggleUser(user);

      expect(userService.setActive).toHaveBeenCalledTimes(1);
      expect(userService.setActive).toHaveBeenCalledWith(
        'admin',
        true
      );

      expect(component.loadUsers).toHaveBeenCalledTimes(1);
    });

    it('should not modify the user object directly', async () => {
      const user: User = {
        username: 'admin',
        code: '1234',
        active: true
      };

      spyOn(component, 'loadUsers').and.resolveTo();

      await component.toggleUser(user);

      expect(user.active).toBeTrue();
    });
  });
});
