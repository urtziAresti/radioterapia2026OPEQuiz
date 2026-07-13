import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { firstValueFrom } from "rxjs";

export interface User {
  username: string;
  code: string;
}

@Injectable({
  providedIn: "root",
})
export class UserService {

  private http = inject(HttpClient);

  private apiUrl = "/api/users";

  async getUsers(): Promise<User[]> {
    return await firstValueFrom(
      this.http.get<User[]>(this.apiUrl)
    );
  }

  async createUser(user: User): Promise<void> {
    await firstValueFrom(
      this.http.post(this.apiUrl, user)
    );
  }

  async deleteUser(username: string): Promise<void> {
    await firstValueFrom(
      this.http.delete(`${this.apiUrl}?username=${encodeURIComponent(username)}`)
    );
  }
}