import { Component, OnInit, inject } from '@angular/core';
import { QuizService } from '../../services/quiz.service';
import { Question } from '../../models/question.model';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class QuizPage implements OnInit {

  private quizService = inject(QuizService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  questions: Question[] = [];
  currentIndex = 0;
  correctAnswers = 0;

  mode: 'study' | 'exam' = 'study';
  playerName: string = '';
  count = 0;

  selectedOption: string | null = null;
  isAnswered: boolean = false;

  // 🔥 NUEVO: mapa de fallos
  wrongAnswersMap: Record<number, number> = {};

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['name']) this.playerName = params['name'];
      if (params['count']) {
        this.count = +params['count'];
        this.questions = this.quizService.getQuestions(this.count);
      }
    });
  }

  get progress(): number {
    if (!this.questions.length) return 0;
    return this.currentIndex / this.questions.length;
  }

  answer(option: string) {
    if (this.isAnswered && this.mode === 'study') return;

    this.selectedOption = option;
    const currentQuestion = this.questions[this.currentIndex];
    const isCorrect = option === currentQuestion.correct;

    if (isCorrect) {
      this.correctAnswers++;
    } else {
      // 🔥 Guardar fallo por ID
      const id = currentQuestion.id;
      this.wrongAnswersMap[id] = (this.wrongAnswersMap[id] || 0) + 1;
    }

    if (this.mode === 'study') {
      this.isAnswered = true;
      setTimeout(() => {
        this.nextQuestion();
      }, 1400);
    } else {
      this.nextQuestion();
    }
  }

  nextQuestion() {
    this.currentIndex++;

    if (this.currentIndex >= this.questions.length) {
      this.finishQuiz();
      return;
    }

    this.selectedOption = null;
    this.isAnswered = false;
  }

  finishQuiz() {
    const userId = this.playerName || 'anonymous';

    const result = {
      user: userId,
      date: new Date().toISOString(),
      totalQuestions: this.questions.length,
      correctAnswers: this.correctAnswers,
      wrongAnswers: this.wrongAnswersMap
    };

    const existing = sessionStorage.getItem(userId);
    const history = existing ? JSON.parse(existing) : [];

    history.push(result);

    sessionStorage.setItem(userId, JSON.stringify(history));

    console.log('RESULT SAVED', result);
  }

  getOptionColor(optionKey: string): string {
    if (this.mode !== 'study' || !this.isAnswered) {
      return this.selectedOption === optionKey ? 'selected-option' : '';
    }

    const correctKey = this.questions[this.currentIndex].correct;

    if (optionKey === correctKey) return 'correct-option';

    if (this.selectedOption === optionKey && optionKey !== correctKey) {
      return 'incorrect-option';
    }

    return 'disabled-option';
  }

  goToHome() {
    this.router.navigate(['/']);
  }
}