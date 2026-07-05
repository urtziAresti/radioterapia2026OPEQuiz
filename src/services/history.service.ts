import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HistoryService {

  private readonly STORAGE_KEY = 'quiz_history';
  private readonly SESSION_KEY = 'userSession';

  /**
   * Devuelve el usuario logueado.
   */
  private getUsername(): string | null {

    const session = localStorage.getItem(this.SESSION_KEY);

    if (!session) {
      return null;
    }

    try {
      return JSON.parse(session).username;
    } catch {
      return null;
    }
  }

  /**
   * Obtiene todo el historial.
   */
  private getHistory(): any[] {

    const raw = sessionStorage.getItem(this.STORAGE_KEY);

    if (!raw) {
      return [];
    }

    try {
      return JSON.parse(raw);
    } catch {
      return [];
    }
  }

  /**
   * Guarda el historial.
   */
  private saveHistory(history: any[]): void {
    sessionStorage.setItem(
      this.STORAGE_KEY,
      JSON.stringify(history)
    );
  }

  /**
   * Devuelve el usuario del historial.
   */
  private getUser(history: any[], username: string): any {

    let user = history.find((u: any) => u.user === username);

    if (!user) {
      user = {
        user: username,
        attempts: []
      };

      history.push(user);
    }

    return user;
  }

  /**
   * Devuelve el intento actual.
   */
  private getCurrentAttempt(user: any): any {

    let attempt = user.attempts[user.attempts.length - 1];

    if (!attempt) {

      attempt = {
        date: new Date().toISOString(),
        wrongAnswers: {}
      };

      user.attempts.push(attempt);
    }

    if (!attempt.wrongAnswers) {
      attempt.wrongAnswers = {};
    }

    return attempt;
  }

  /**
   * Guarda una pregunta fallada.
   */
  saveWrongAnswer(questionId: number): void {

    const username = this.getUsername();

    if (!username) {
      return;
    }

    const history = this.getHistory();

    const user = this.getUser(history, username);

    const attempt = this.getCurrentAttempt(user);

    attempt.wrongAnswers[questionId] = true;

    this.saveHistory(history);
  }

  /**
   * Elimina una pregunta del historial de fallos.
   */
  removeWrongAnswer(questionId: number): void {

    const username = this.getUsername();

    if (!username) {
      return;
    }

    const history = this.getHistory();

    const user = history.find((u: any) => u.user === username);

    if (!user || !user.attempts.length) {
      return;
    }

    const attempt = user.attempts[user.attempts.length - 1];

    if (attempt.wrongAnswers) {
      delete attempt.wrongAnswers[questionId];
    }

    this.saveHistory(history);
  }

  /**
   * Devuelve las preguntas falladas del intento actual.
   */
  getWrongAnswers(): number[] {

    const username = this.getUsername();

    if (!username) {
      return [];
    }

    const history = this.getHistory();

    const user = history.find((u: any) => u.user === username);

    if (!user || !user.attempts.length) {
      return [];
    }

    const attempt = user.attempts[user.attempts.length - 1];

    return Object.keys(attempt.wrongAnswers || {})
      .map(Number);
  }

  /**
   * Limpia el historial completo.
   */
  clearHistory(): void {
    sessionStorage.removeItem(this.STORAGE_KEY);
  }

  /**
   * Indica si existen preguntas falladas.
   */
  hasWrongAnswers(): boolean {
    return this.getWrongAnswers().length > 0;
  }

  /**
   * Devuelve el historial completo.
   */
  getAllHistory(): any[] {
    return this.getHistory();
  }

}