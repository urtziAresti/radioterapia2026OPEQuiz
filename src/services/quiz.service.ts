import { Injectable } from '@angular/core';
import { RADIO_QUESTIONS } from '../data/radio_questions';
import { Question } from '../models/question.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class QuizService {

  private apiUrl = 'http://localhost:3000/api/GPT';

  constructor(private http: HttpClient) {}

  /**
   * Envía una pregunta al backend de Vercel para que este consulte con GPT
   * @param question Texto de la pregunta
   */
  ask(question: Question): Observable<string> {

    const formattedPrompt = `
  Responde únicamente con la letra correcta (a, b, c o d).
  No expliques nada.
  
  Pregunta:
  ${question.question}
  
  Opciones:
  a) ${question.options.a}
  b) ${question.options.b}
  c) ${question.options.c}
  d) ${question.options.d}
  `;
  
    return this.http.post<{ ok: boolean; answer: string }>(
      this.apiUrl,
      {
        question: formattedPrompt
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).pipe(
      map(res => res?.answer?.trim().toLowerCase() ?? '')
    );
  }

  getQuestions(count: number): Question[] {
    const randomQuestions = [...RADIO_QUESTIONS].sort(() => Math.random() - 0.5);
    return randomQuestions.slice(0, count);
  }

  checkAnswer(question: Question, answer: string): boolean {
    return question.correct === answer;
  }

  getQuestionsByIds(ids: number[]): Question[] {
    if (!Array.isArray(ids) || ids.length === 0) return [];
  
    const idSet = new Set(ids.map(id => Number(id)));
  
    return RADIO_QUESTIONS.filter(q => idSet.has(Number(q.id)));
  }
}