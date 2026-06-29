import { inject, Injectable } from '@angular/core';
import { RADIO_QUESTIONS } from '../data/radio-questions/radio_questions';
import { Question } from '../models/question.model';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

export interface MagicAnswer {
  answer: string;
  explanation: string;
}

@Injectable({ providedIn: 'root' })
export class QuizService {

  private apiUrl = '/api/GPT';
  private http = inject(HttpClient);


  /**
   * Envía una pregunta al backend para que GPT devuelva JSON estructurado
   */
  ask(question: Question): Observable<MagicAnswer> {

    const formattedPrompt = `
Responde en formato JSON válido EXACTO.

NO escribas nada fuera del JSON.

Formato:
{
  "answer": "a|b|c|d",
  "explanation": "explicación breve en español"
}

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
      map(res => {
        try {
          // GPT devuelve JSON en string → lo convertimos a objeto real
          return JSON.parse(res.answer) as MagicAnswer;
        } catch (e) {
          // fallback seguro
          return {
            answer: '',
            explanation: 'Error parseando respuesta de la IA'
          };
        }
      })
    );
  }

  /**
   * Devuelve preguntas aleatorias
   */
  getQuestions(count: number): Question[] {
    const randomQuestions = [...RADIO_QUESTIONS]
      .sort(() => Math.random() - 0.5);

    return randomQuestions.slice(0, count);
  }

  /**
   * Comprueba respuesta correcta
   */
  checkAnswer(question: Question, answer: string): boolean {
    return question.correct === answer;
  }

  /**
   * Filtra preguntas por IDs
   */
  getQuestionsByIds(ids: number[]): Question[] {
    if (!Array.isArray(ids) || ids.length === 0) return [];

    const idSet = new Set(ids.map(id => Number(id)));

    return RADIO_QUESTIONS.filter(q => idSet.has(Number(q.id)));
  }
}