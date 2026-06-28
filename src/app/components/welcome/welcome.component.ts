import { Component, EventEmitter, inject, Output, OnInit } from '@angular/core';
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
export class WelcomeComponent implements OnInit {
  username: string = '';
  selectedQuestionCount: number = 25;

  private router = inject(Router);

  @Output() configSubmitted = new EventEmitter<{ username: string, count: number }>();

  ngOnInit() {
    const session = localStorage.getItem('userSession');
    if (session) {
      const user = JSON.parse(session);
      this.username = user.username;
    }
  }

  startQuiz() {
    if (this.username && this.selectedQuestionCount) {
      const config = {
        username: this.username,
        count: this.selectedQuestionCount
      };

      this.configSubmitted.emit(config);

      this.router.navigate(['/questions'], {
        queryParams: {
          name: config.username,
          count: config.count
        }
      });
    }
  }

  sendSuggestionsMail() {
    const email = 'urtzi.aresti+OPEAPP@gmail.com';
    const subject = encodeURIComponent('Sugerencias OPE - Test Radioterapia');
    const body = encodeURIComponent(
      `Hola,\n\nQuería enviar las siguientes sugerencias sobre el test:\n\n`
    );

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  }
}