import { Injectable } from '@angular/core';
import { ALL_QUESTIONS } from '../data/questions';
import { Question } from '../models/question.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class QuizService {

  constructor(private http: HttpClient) {}

  // 🔥 Netlify function (NO OpenAI directo)
  private apiUrl = '/.netlify/functions/ask';

  ask(question: string) {
    return this.http.post<any>(this.apiUrl, {
      question
    }).pipe(
      map(res => res.answer) // lo que devuelve Netlify
    );
  }

  getQuestions(count: number): Question[] {
    const randomQuestions = [...ALL_QUESTIONS].sort(() => Math.random() - 0.5);
    return randomQuestions.slice(0, count);
  }

  checkAnswer(question: Question, answer: string): boolean {
    return question.correct === answer;
  }

  getQuestionsByIds(ids: number[]): Question[] {
    if (!Array.isArray(ids) || ids.length === 0) return [];
  
    const idSet = new Set(ids.map(id => Number(id)));
  
    return ALL_QUESTIONS.filter(q => idSet.has(Number(q.id)));
  }
}