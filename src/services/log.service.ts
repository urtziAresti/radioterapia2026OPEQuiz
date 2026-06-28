import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class LogService {

  private apiUrl = '/api/log';

  constructor(private http: HttpClient) {}

  log(event: string, data?: any) {

    //TODO
    return;
    const payload = {
      event,
      data,
      user: this.getUser(),
      url: window.location.href,
      userAgent: navigator.userAgent
    };

    this.http.post(this.apiUrl, payload).subscribe({
      next: () => {},
      error: () => {}
    });
  }

  private getUser() {
    try {
      return JSON.parse(localStorage.getItem('userSession') || '{}')?.username;
    } catch {
      return null;
    }
  }
}