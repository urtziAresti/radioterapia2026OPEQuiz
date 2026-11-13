import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

import {
  StatsService,
  UserStatsSummary
} from '../../../services/stats.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class StatsComponent implements OnInit {

  private statsService = inject(StatsService);
  private router = inject(Router);

  userStats: UserStatsSummary[] = [];

  loading = true;

  totals = {
    users: 0,
    quizzes: 0,
    correctAnswers: 0,
    totalQuestions: 0,
    totalSeconds: 0
  };

  ngOnInit(): void {
    this.fetchUserStats();
  }

  fetchUserStats(): void {
    this.loading = true;

    this.statsService.getUserStats().subscribe({
      next: (response: any) => {
        console.log('RESPUESTA ESTADÍSTICAS:', response);

        // Aceptar tanto un array como { success, data }
        const stats: UserStatsSummary[] = Array.isArray(response)
          ? response
          : Array.isArray(response?.data)
            ? response.data
            : [];

        // Eliminar registros sin nombre y normalizar nombres
        this.userStats = stats
          .filter(stat => !!stat?.playerName)
          .map(stat => ({
            ...stat,
            playerName: stat.playerName.trim()
          }));

        this.calculateTotals();

        // IMPORTANTE: ocultar el indicador de carga
        this.loading = false;

        console.log('USUARIOS MOSTRADOS:', this.userStats);
        console.log('TOTALES GENERALES:', this.totals);
      },

      error: (error) => {
        console.error('Error cargando estadísticas:', error);

        this.userStats = [];
        this.resetTotals();
        this.loading = false;
      }
    });
  }

  private calculateTotals(): void {
    this.totals = {
      users: this.userStats.length,

      quizzes: this.userStats.reduce(
        (sum, stat) => sum + (Number(stat.totalTests) || 0),
        0
      ),

      correctAnswers: this.userStats.reduce(
        (sum, stat) => sum + (Number(stat.correctAnswers) || 0),
        0
      ),

      totalQuestions: this.userStats.reduce(
        (sum, stat) => sum + (Number(stat.totalQuestions) || 0),
        0
      ),

      totalSeconds: this.userStats.reduce(
        (sum, stat) => sum + (Number(stat.totalSeconds) || 0),
        0
      )
    };
  }

  private resetTotals(): void {
    this.totals = {
      users: 0,
      quizzes: 0,
      correctAnswers: 0,
      totalQuestions: 0,
      totalSeconds: 0
    };
  }

  openUserStats(username: string): void {
    if (!username) {
      return;
    }

    this.router.navigate(['/user-stats'], {
      queryParams: {
        userName: username
      }
    });
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
}