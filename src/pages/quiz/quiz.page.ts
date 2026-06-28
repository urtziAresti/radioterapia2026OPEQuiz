import { Component, OnInit, inject } from '@angular/core';
import { QuizService } from '../../services/quiz.service';
import { Question } from '../../models/question.model';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { addIcons } from 'ionicons';
import {
  sparklesOutline,
  chevronForwardCircleOutline
} from 'ionicons/icons';

addIcons({
  'sparkles-outline': sparklesOutline,
  'chevron-forward-outline': chevronForwardCircleOutline
});

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class QuizPage implements OnInit {

  private readonly OK_QUESTION_TIME = 1500;

  private quizService = inject(QuizService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  // ===== DATA =====
  questions: Question[] = [];
  currentIndex = 0;
  correctAnswers = 0;

  playerName = '';
  count = 0;

  // ===== UI STATE =====
  selectedOption: string | null = null;
  isAnswered = false;
  nextVisible = false;

  magicAnswer: string | null = null;
  loadingMagic = false;

  // ===== CONTROL =====
  private navigationLocked = false;
  private answerLocked = false;
  private quizFinished = false;
  private questionTimeout: any = null;

  wrongAnswersMap: Record<number, number> = {};

  // ===== MODE =====
  mode: 'normal' | 'failed' = 'normal';
  failedIds: number[] = [];

  ngOnInit() {

    this.route.queryParams.subscribe(params => {

      // usuario
      if (params['name']) {
        this.playerName = params['name'];
      }

      // 🧠 MODO REPASO
      if (params['mode'] === 'failed') {
        this.mode = 'failed';

        this.failedIds = JSON.parse(params['ids'] || '[]');

        this.questions = this.quizService.getQuestionsByIds(this.failedIds);
        return;
      }

      // 🎯 MODO NORMAL
      if (params['count']) {
        this.mode = 'normal';

        this.count = +params['count'];
        this.questions = this.quizService.getQuestions(this.count);
      }
    });
  }

  // ===== PROGRESS =====
  get progress(): number {
    if (!this.questions || this.questions.length === 0) {
      return 0;
    }

    const value = this.currentIndex / this.questions.length;

    return Number.isFinite(value) ? value : 0;
  }

  // ===== ANSWER =====
  answer(option: string) {

    if (this.answerLocked || this.isAnswered) return;

    this.answerLocked = true;
    this.selectedOption = option;

    const currentQuestion = this.questions[this.currentIndex];
    const isCorrect = option === currentQuestion.correct;

    this.isAnswered = true;

    if (isCorrect) {
      this.correctAnswers++;
      this.slideError(this.OK_QUESTION_TIME);
    } else {
      this.nextVisible = true;

      const id = currentQuestion.id;
      this.wrongAnswersMap[id] = (this.wrongAnswersMap[id] || 0) + 1;
    }
  }

  // ===== AUTO NEXT =====
  slideError(slideTime: number) {

    if (this.questionTimeout) {
      clearTimeout(this.questionTimeout);
    }

    this.questionTimeout = setTimeout(() => {
      this.nextQuestion();
    }, slideTime);
  }

  nextQuestion() {

    if (this.navigationLocked) return;

    this.navigationLocked = true;

    this.currentIndex++;
    this.nextVisible = false;

    this.magicAnswer = null;
    this.loadingMagic = false;

    if (this.currentIndex >= this.questions.length) {
      this.finishQuiz();
      return;
    }

    this.selectedOption = null;
    this.isAnswered = false;
    this.answerLocked = false;

    setTimeout(() => {
      this.navigationLocked = false;
    }, 100);
  }

  // ===== FINISH =====
  finishQuiz() {

    if (this.quizFinished) return;

    this.quizFinished = true;

    // 🚫 NO guardar si es repaso
    if (this.mode === 'failed') return;

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
  }

  // ===== UI HELP =====
  getOptionColor(optionKey: string): string {

    if (!this.isAnswered) {
      return this.selectedOption === optionKey
        ? 'selected-option'
        : '';
    }

    const correctKey = this.questions[this.currentIndex].correct;

    if (optionKey === correctKey) {
      return 'correct-option';
    }

    if (this.selectedOption === optionKey && optionKey !== correctKey) {
      return 'incorrect-option';
    }

    return 'disabled-option';
  }

  // ===== NAV =====
  goToHome() {
    this.router.navigate(['/welcome']);
  }

  // ===== MAGIC HELP =====
  useMagic(question: string) {

    if (this.loadingMagic) return;

    this.loadingMagic = true;
    this.magicAnswer = null;

    this.quizService.ask(question).subscribe({
      next: (res) => {
        this.magicAnswer = res;
        this.loadingMagic = false;
      },
      error: (err) => {
        console.error(err);
        this.magicAnswer = 'Error consultando la magia 😅';
        this.loadingMagic = false;
      }
    });
  }

  
}