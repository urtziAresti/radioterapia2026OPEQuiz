import { Component, OnInit, inject } from '@angular/core';
import { QuizService } from '../../services/quiz.service';
import { Question } from '../../models/question.model';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { sparklesOutline,chevronForwardCircleOutline } from 'ionicons/icons';

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

  private quizService = inject(QuizService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private readonly FAIL_QUESTION_TIME = 3000;
  private readonly OK_QUESTION_TIME = 1500;
  nextVisible = false;
  questions: Question[] = [];
  currentIndex = 0;
  correctAnswers = 0;
  magicAnswer: string | null = null;
  loadingMagic = false;
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
    this.selectedOption = option;
    const currentQuestion = this.questions[this.currentIndex];
    const isCorrect = option === currentQuestion.correct;

    if (isCorrect) {
      this.correctAnswers++;
      this.slideError(this.OK_QUESTION_TIME);
    } else {
      this.nextVisible = true;
      // 🔥 Guardar fallo por ID
      const id = currentQuestion.id;
      this.wrongAnswersMap[id] = (this.wrongAnswersMap[id] || 0) + 1;
    }
    this.slideError(this.FAIL_QUESTION_TIME);
    this.isAnswered = true;      
  }

  slideError(slideTime : number){
    setTimeout(() => {
      this.nextQuestion();
    }, slideTime);
  }

  nextQuestion() {
    this.currentIndex++;
    this.nextVisible = false;

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
    if (!this.isAnswered) {
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
    this.router.navigate(['/welcome']);
  }

  useMagic(question: string) {
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