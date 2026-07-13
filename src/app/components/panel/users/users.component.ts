import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { User, UserService } from '../../../services/users.service';

@Component({
  selector: 'app-users',
  standalone: true,
  templateUrl: './users.component.html',
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ]
})
export class UsersComponent implements OnInit {

  private userService = inject(UserService);

  users: User[] = [];

  newUsername = '';
  newCode = '';

  async ngOnInit() {
    await this.loadUsers();
  }

  async loadUsers() {
    this.users = await this.userService.getUsers();
  }

  async addUser() {
    if (!this.newUsername || !this.newCode) {
      return;
    }

    await this.userService.createUser({
      username: this.newUsername,
      code: this.newCode
    });

    this.newUsername = '';
    this.newCode = '';

    await this.loadUsers();
  }

  async deleteUser(username: string) {
    await this.userService.deleteUser(username);
    await this.loadUsers();
  }
}