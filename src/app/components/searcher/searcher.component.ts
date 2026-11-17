import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { I18nService } from '../../../assets/i18n/i18n.service';
import { FormsModule } from '@angular/forms';
import { Question } from '../../interfaces/question';
import { QuizService } from '../../services/quiz.service';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { searchOutline, closeCircleOutline,
  libraryOutline } from 'ionicons/icons';

addIcons({
  'search-outline': searchOutline,
  'close-circle-outline': closeCircleOutline,
  'library-outline': libraryOutline
});

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss'],
  imports: [IonicModule, CommonModule,FormsModule],
})
export class SearcherComponent {
  private readonly i18n = inject(I18nService);
  private readonly router = inject(Router);
  private readonly quizService = inject(QuizService);
  texts = this.i18n.texts;

  constructor() { }

  searchText = '';

  // Array provisional
  questions: Question[] = [];

  filteredQuestions: Question[] = [];

  searchQuestions(event: any): void {
    console.warn(event);
    this.searchText = event.detail.value ?? '';

    const search = this.normalize(this.searchText.trim());

    if (search.length === 0) {
      this.filteredQuestions = [];
      return;
    }

    this.filteredQuestions = this.quizService.ALL_QUESTIONS.filter(
      (question: Question) => {

        const searchableText = [
          question.question,
          question.options.a,
          question.options.b,
          question.options.c,
          question.options.d
        ].join(' ');

        return this.normalize(searchableText).includes(search);
      }
    );


  }

  openQuestion(question: Question): void {  
      this.router.navigate(["/questions"], {
        queryParams: {
          name: '',
          mode: "failed",
          ids: JSON.stringify([question.id]),
        },
      });
    
  }


  /**
   * Normaliza texto para ignorar mayúsculas y acentos.
   */
  private normalize(value: string): string {
    return value
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }

  clearSearch(): void {
    this.searchText = '';
    this.filteredQuestions = [];
  }

}
