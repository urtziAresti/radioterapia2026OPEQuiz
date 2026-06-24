import { Injectable } from '@angular/core';
import { QUESTIONS } from '../data/questions';
import { Question } from '../models/question.model';

@Injectable({ providedIn: 'root' })
export class QuizService {

  getQuestions(count: number): Question[] {
    const randomQuestions = [...QUESTIONS].sort(() => Math.random() - 0.5);

    // devuelve solo el número pedido
    return randomQuestions.slice(0, count);
  }

  checkAnswer(question: Question, answer: string): boolean {
    return question.correct === answer;
  }
}