import { Component, EventEmitter, inject, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QuizConfig, QuizMode } from '../../../models/quiz.config.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {
  playerName: string = '';
  selectedMode: QuizMode | null = null;
  private router = inject(Router);
  // Emitimos un evento al componente padre (Appomponent o tu enrutador) cuando todo esté listo
  @Output() configSubmitted = new EventEmitter<QuizConfig>();

  selectMode(mode: QuizMode) {
    this.selectedMode = mode;
  }

  startQuiz() {
    if (this.playerName.trim() && this.selectedMode) {
      const config: QuizConfig = {
        playerName: this.playerName.trim(),
        mode: this.selectedMode
      };

      // 1. Sigues emitiendo el evento por si tu AppComponent lo necesita
      this.configSubmitted.emit(config);

      // 2. Navegamos a la ruta '/quiz' enviando los datos como parámetros de consulta (?mode=...&name=...)
      this.router.navigate(['/questions'], {
        queryParams: {
          mode: config.mode,
          name: config.playerName
        }
      });
    }
  }
}