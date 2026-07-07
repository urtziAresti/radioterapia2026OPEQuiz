import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StatsService {

  uploadProgress(data: { playerName: string; quizType: string; correctAnswers: number; totalQuestions: number; elapsedTime: number }): void {

  }
  
}
