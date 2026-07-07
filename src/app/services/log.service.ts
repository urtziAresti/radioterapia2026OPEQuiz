import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  private readonly apiUrl = '/api/log';

  private http = inject(HttpClient);

  async log(event: string, data?: any): Promise<void> {

    const payload = {
      event,
      data: this.clean(data),
      user: this.getUser(),
      url: window.location.pathname,
      timestamp: new Date().toISOString()
    };

    try {
      await firstValueFrom(
        this.http.post('/api/log', payload)      );
    } catch (error) {
      console.error('[LogService]', error);
    }
  }

  private getUser(): string | null {
    try {
      const session = JSON.parse(localStorage.getItem('userSession') || '{}');
      return session?.username ?? null;
    } catch {
      return null;
    }
  }

  /**
   * Evita enviar objetos enormes o con referencias circulares.
   */
  private clean(data: any): any {
    if (data == null) {
      return null;
    }

    try {
      return JSON.parse(JSON.stringify(data));
    } catch {
      return String(data);
    }
  }
}