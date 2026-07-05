import { Injectable } from '@angular/core';

interface QuestionHistory {
  questionId: number;
  correct: boolean;
  date: string;
}

interface AttemptHistory {
  date: string;
  questions: QuestionHistory[];
}

interface UserHistory {
  user: string;
  attempts: AttemptHistory[];
}

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
  private getHistory(): UserHistory[] {

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
  private saveHistory(history: UserHistory[]): void {
    sessionStorage.setItem(
      this.STORAGE_KEY,
      JSON.stringify(history)
    );
  }

  /**
   * Devuelve el usuario del historial.
   */
  private getUser(history: UserHistory[], username: string): UserHistory {

    let user = history.find(u => u.user === username);

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
  private getCurrentAttempt(user: UserHistory): AttemptHistory {

    let attempt = user.attempts[user.attempts.length - 1];

    if (!attempt) {

      attempt = {
        date: new Date().toISOString(),
        questions: []
      };

      user.attempts.push(attempt);
    }

    if (!attempt.questions) {
      attempt.questions = [];
    }

    return attempt;
  }

  /**
   * Guarda una pregunta respondida.
   */
  saveQuestion(questionId: number, correct: boolean): void {

    const username = this.getUsername();
  
    if (!username) {
      return;
    }
  
    const history = this.getHistory();
  
    const user = this.getUser(history, username);
  
    const attempt = this.getCurrentAttempt(user);
  
    const existingQuestion = attempt.questions.find(
      q => q.questionId === questionId
    );
  
    if (existingQuestion) {
  
      existingQuestion.correct = correct;
      existingQuestion.date = new Date().toISOString();
  
    } else {
  
      attempt.questions.push({
        questionId,
        correct,
        date: new Date().toISOString()
      });
  
    }
  
    this.saveHistory(history);
  }

  /**
   * Devuelve las preguntas incorrectas del intento actual.
   */
  getIncorrectAnswers(): number[] {

    const username = this.getUsername();

    if (!username) {
      return [];
    }

    const history = this.getHistory();

    const user = history.find(u => u.user === username);

    if (!user || !user.attempts.length) {
      return [];
    }

    const attempt = this.getCurrentAttempt(user);

    return attempt.questions
      .filter(q => !q.correct)
      .map(q => q.questionId);
  }

  /**
   * Indica si existen preguntas incorrectas.
   */
  hasIncorrectAnswers(): boolean {
    return this.getIncorrectAnswers().length > 0;
  }


  getAnsweredQuestionsCount(): number {

    const username = this.getUsername();
  
    if (!username) {
      return 0;
    }
  
    const history = this.getHistory();
  
    const user = history.find(u => u.user === username);
  
    if (!user || !user.attempts.length) {
      return 0;
    }
  
    const attempt = this.getCurrentAttempt(user);
  
    return attempt.questions.length;
  }

  /**
   * Inicia un nuevo intento para el usuario actual.
   */
  startNewAttempt(): void {

    const username = this.getUsername();

    if (!username) {
      return;
    }

    const history = this.getHistory();

    const user = this.getUser(history, username);

    user.attempts.push({
      date: new Date().toISOString(),
      questions: []
    });

    this.saveHistory(history);
  }

  /**
   * Limpia el historial completo.
   */
  clearHistory(): void {
    sessionStorage.removeItem(this.STORAGE_KEY);
  }

  /**
   * Devuelve el historial completo.
   */
  getAllHistory(): UserHistory[] {
    return this.getHistory();
  }

  getAnsweredQuestionIds(): number[] {

    const username = this.getUsername();
  
    if (!username) {
      return [];
    }
  
    const history = this.getHistory();
  
    const user = history.find(u => u.user === username);
  
    if (!user) {
      return [];
    }
  
    return user.attempts.flatMap(attempt =>
      attempt.questions.map(question => question.questionId)
    );
  }

}