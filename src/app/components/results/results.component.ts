import { Component, inject, Input, OnInit } from '@angular/core';
import { I18nService } from '../../../assets/i18n/i18n.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ResultsData } from '../../interfaces/results-data';
import { StatsService } from '../../services/stats.service';



@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
  imports: [CommonModule,IonicModule]
})
export class ResultsComponent  implements OnInit {
  @Input() resultsData!: ResultsData;
  private readonly i18n = inject(I18nService);
  private readonly router = inject(Router);
  private readonly statsService = inject(StatsService);


  texts = this.i18n.texts;

  constructor() { }

  ngOnInit() {
    this.saveProgress();
  }

  async saveProgress() {
    //TODO: Implement the logic to save the quiz progress using the StatsService
    const resultModel : ResultsData = {
      playerName: this.resultsData.playerName,
      quiz_type: this.resultsData.quiz_type,
      correctAnswers: this.resultsData.correctAnswers,
      totalQuestions: this.resultsData.totalQuestions,
      elapsedTime: this.resultsData.elapsedTime,
    };
    await this.statsService.uploadProgress(resultModel)
  }

  goToHome(): void {
    this.router.navigateByUrl("/", {
      skipLocationChange: true
    }).then(() => {
      this.router.navigateByUrl("/welcome", {
        replaceUrl: true
      });
    });
  }
}
