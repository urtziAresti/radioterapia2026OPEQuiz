import { Component, OnInit, inject } from '@angular/core';
import { QuizService } from '../../services/quiz.service';
import { Question } from '../../models/question.model';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router'; // Añadidos para navegación y lectura de parámetros

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'], // Asegúrate de tener este archivo de estilos vinculado
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

  // Variables de configuración de modo
  mode: 'study' | 'exam' = 'study';
  playerName: string = '';

  // Control visual para Modo Estudio
  selectedOption: string | null = null;
  isAnswered: boolean = false;

  ngOnInit() {
    this.questions = this.quizService.getQuestions();

    // Capturamos el modo y el nombre desde la URL
    this.route.queryParams.subscribe(params => {
      if (params['mode']) this.mode = params['mode'];
      if (params['name']) this.playerName = params['name'];
    });
  }

  get progress(): number {
    if (!this.questions.length) return 0;
    return this.currentIndex / this.questions.length;
  }

  answer(option: string) {
    if (this.isAnswered && this.mode === 'study') return; // Evita doble clic en modo estudio

    this.selectedOption = option;
    const isCorrect = option === this.questions[this.currentIndex].correct;

    if (isCorrect) {
      this.correctAnswers++;
    }

    if (this.mode === 'study') {
      // En modo estudio, congelamos la pantalla un segundo para que el alumno vea la corrección en verde/rojo
      this.isAnswered = true;
      setTimeout(() => {
        this.nextQuestion();
      }, 1400);
    } else {
      // En modo examen avanza instantáneamente sin feedback
      this.nextQuestion();
    }
  }

  nextQuestion() {
    this.currentIndex++;
    // Reseteamos estados para la siguiente pregunta
    this.selectedOption = null;
    this.isAnswered = false;
  }

  // Clases dinámicas para pintar las opciones en Modo Estudio
  getOptionColor(optionKey: string): string {
    if (this.mode !== 'study' || !this.isAnswered) {
      return this.selectedOption === optionKey ? 'selected-option' : '';
    }

    const correctKey = this.questions[this.currentIndex].correct;
    if (optionKey === correctKey) {
      return 'correct-option'; // Verde si es la correcta
    }
    if (this.selectedOption === optionKey && optionKey !== correctKey) {
      return 'incorrect-option'; // Rojo si el usuario falló aquí
    }
    return 'disabled-option';
  }

  goToHome() {
    this.router.navigate(['/']);
  }
}