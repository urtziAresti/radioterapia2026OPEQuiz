import { Component, EventEmitter, inject, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
  // Inicializamos por defecto en 300 preguntas
  selectedQuestionCount: number = 50; 
  
  private router = inject(Router);
  
  @Output() configSubmitted = new EventEmitter<{ playerName: string, count: number }>();

  startQuiz() {
    if (this.playerName.trim() && this.selectedQuestionCount) {
      const config = {
        playerName: this.playerName.trim(),
        count: this.selectedQuestionCount
      };

      // Emitimos el evento con la nueva configuración
      this.configSubmitted.emit(config);

      // Redirigimos pasando el nombre y la cantidad elegida
      this.router.navigate(['/questions'], {
        queryParams: {
          name: config.playerName,
          count: config.count
        }
      });
    }
  }
}