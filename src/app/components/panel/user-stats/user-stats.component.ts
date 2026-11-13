import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import {
  StatsService,
  UserStatsDetail
} from '../../../services/stats.service';
import { addIcons } from 'ionicons';
import { phonePortraitOutline } from 'ionicons/icons';
addIcons({
  'document-text-outline': documentTextOutline,
  'checkmark-circle-outline': checkmarkCircleOutline,
  'close-circle-outline': closeCircleOutline,
  'time-outline': timeOutline
});


import {
  documentTextOutline,
  checkmarkCircleOutline,
  closeCircleOutline,
  timeOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-user-stats',
  templateUrl: './user-stats.component.html',
  styleUrls: ['./user-stats.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class UserStatsComponent implements OnInit {

  private statsService = inject(StatsService);
  private route = inject(ActivatedRoute);

  userStats: UserStatsDetail[] = [];

  username = '';

  loading = true;

  totals = {
    quizzes: 0,
    correctAnswers: 0,
    totalQuestions: 0,
    totalSeconds: 0,
    percentage: 0
  };

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const username = params['userName'];

      if (username) {
        this.username = username.trim();
        this.fetchUserStats();
      } else {
        this.userStats = [];
        this.resetTotals();
        this.loading = false;
      }
    });
  }

  fetchUserStats(): void {
    this.loading = true;

    this.statsService.getUserStatsDetail(this.username).subscribe({
      
next: (response: any) => {

  const stats: UserStatsDetail[] = Array.isArray(response)
    ? response
    : Array.isArray(response?.data)
      ? response.data
      : [];

  this.userStats = stats.map(stat => {

    const totalQuestions = Number(stat.totalQuestions) || 0;
    const correctAnswers = Number(stat.correctAnswers) || 0;

    const percentage = totalQuestions > 0
      ? Math.round((correctAnswers / totalQuestions) * 100)
      : 0;

    return {
      ...stat,
      percentage,
      failedQuestions: Math.max(0, totalQuestions - correctAnswers)
    };
  });

  this.calculateTotals();
  this.loading = false;

  console.log('DETALLE DEL USUARIO:', this.userStats);
  console.log('TOTALES DEL USUARIO:', this.totals);
},


      error: error => {
        console.error('Error al obtener las estadísticas:', error);

        this.userStats = [];
        this.resetTotals();
        this.loading = false;
      }
    });
  }

  private calculateTotals(): void {
    this.totals.quizzes = this.userStats.length;

    this.totals.correctAnswers = this.userStats.reduce(
      (sum, stat) => sum + (Number(stat.correctAnswers) || 0),
      0
    );

    this.totals.totalQuestions = this.userStats.reduce(
      (sum, stat) => sum + (Number(stat.totalQuestions) || 0),
      0
    );

    this.totals.totalSeconds = this.userStats.reduce(
      (sum, stat) => sum + this.parseElapsedTime(stat.elapsedTime),
      0
    );

    this.totals.percentage = this.totals.totalQuestions
      ? Math.round(
          (this.totals.correctAnswers / this.totals.totalQuestions) * 100
        )
      : 0;
  }

  private parseElapsedTime(value: string | undefined): number {
    if (!value) {
      return 0;
    }

    const parts = value.split(':').map(Number);

    if (parts.some(part => !Number.isFinite(part))) {
      return 0;
    }

    if (parts.length === 3) {
      const [hours, minutes, seconds] = parts;
      return hours * 3600 + minutes * 60 + seconds;
    }

    if (parts.length === 2) {
      const [minutes, seconds] = parts;
      return minutes * 60 + seconds;
    }

    return 0;
  }

  private resetTotals(): void {
    this.totals = {
      quizzes: 0,
      correctAnswers: 0,
      totalQuestions: 0,
      totalSeconds: 0,
      percentage: 0
    };
  }

  getObjectEntries(obj: any): Array<{ key: string; value: any }> {
    if (!obj || typeof obj !== 'object') {
      return [];
    }

    return Object.keys(obj).map(key => ({
      key,
      value: obj[key]
    }));
  }

  formatTime(totalSeconds: number): string {
    const secondsTotal = Number(totalSeconds) || 0;

    const hours = Math.floor(secondsTotal / 3600);
    const minutes = Math.floor((secondsTotal % 3600) / 60);
    const seconds = secondsTotal % 60;

    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }

  isObject(value: unknown): boolean {
    return value !== null &&
      typeof value === 'object' &&
      !Array.isArray(value) &&
      !(value instanceof Date);
  }
  
  formatValue(value: unknown): string {
    if (value === null || value === undefined) {
      return '-';
    }
  
    if (typeof value === 'object') {
      return JSON.stringify(value, null, 2);
    }
  
    return String(value);
  }

  isStatsArray(): boolean {
    return Array.isArray(this.userStats);
  }

  get sortedUserStats(): UserStatsDetail[] {
    return [...(this.userStats || [])].sort((a, b) => {
      return (
        new Date(b.createdAt).getTime() -
        new Date(a.createdAt).getTime()
      );
    });
  }
}