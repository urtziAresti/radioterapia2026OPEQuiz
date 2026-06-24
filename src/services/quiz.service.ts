import { Injectable } from '@angular/core';
import { QUESTIONS } from '../data/questions';
import { Question } from '../models/question.model';

@Injectable({ providedIn: 'root' })
export class QuizService {

  getQuestions(): Question[] {
    return QUESTIONS;
  }

  checkAnswer(question: Question, answer: string): boolean {
    return question.correct === answer;
  }
}