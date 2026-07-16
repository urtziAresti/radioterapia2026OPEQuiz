import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { StatsService } from '../../../services/stats.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class StatsComponent implements OnInit {

  userStats: any[] = [];
  loading = true;

  totals = {
    users: 0,
    quizzes: 0,
    correctAnswers: 0,
    totalQuestions: 0,
    totalSeconds: 0
  };

  constructor(private statsService: StatsService) {}

  ngOnInit(): void {
    this.fetchUserStats();
  }

  fetchUserStats(): void {
    this.loading = true;

    this.statsService.getUserStats().subscribe(
      (response) => {

        if (response.success) {

          const groupedStats = response.data.reduce((acc: any, stat: any) => {

            if (!acc[stat.playerName]) {
              acc[stat.playerName] = {
                playerName: stat.playerName,
                totalQuizzes: 0,
                correctAnswers: 0,
                totalQuestions: 0,
                totalSeconds: 0,
                lastPlayed: stat.createdAt
              };
            }

            acc[stat.playerName].totalQuizzes++;
            acc[stat.playerName].correctAnswers += stat.correctAnswers;
            acc[stat.playerName].totalQuestions += stat.totalQuestions;

            // Convertir MM:SS a segundos
            const [minutes, seconds] = stat.elapsedTime
              .split(':')
              .map(Number);

            acc[stat.playerName].totalSeconds +=
              (minutes * 60) + seconds;

            // Última partida
            if (
              new Date(stat.createdAt) >
              new Date(acc[stat.playerName].lastPlayed)
            ) {
              acc[stat.playerName].lastPlayed = stat.createdAt;
            }

            return acc;

          }, {});

          this.userStats = Object.values(groupedStats).map((user: any) => {

            const minutes = Math.floor(user.totalSeconds / 60);
            const seconds = user.totalSeconds % 60;

            return {
              ...user,
              percentage: user.totalQuestions
                ? Math.round(
                    (user.correctAnswers / user.totalQuestions) * 100
                  )
                : 0,
              elapsedTime: `${minutes
                .toString()
                .padStart(2, '0')}:${seconds
                .toString()
                .padStart(2, '0')}`,
              lastPlayed: new Date(user.lastPlayed).toLocaleString()
            };

          });

          // Ordenar por aciertos (opcional)
          this.userStats.sort(
            (a: any, b: any) => b.correctAnswers - a.correctAnswers
          );

          // ======== TOTALES ========

          this.totals.users = this.userStats.length;

          this.totals.quizzes = this.userStats.reduce(
            (sum: number, u: any) => sum + u.totalQuizzes,
            0
          );

          this.totals.correctAnswers = this.userStats.reduce(
            (sum: number, u: any) => sum + u.correctAnswers,
            0
          );

          this.totals.totalQuestions = this.userStats.reduce(
            (sum: number, u: any) => sum + u.totalQuestions,
            0
          );

          this.totals.totalSeconds = this.userStats.reduce(
            (sum: number, u: any) => sum + u.totalSeconds,
            0
          );

        }

        this.loading = false;
      },
      (error) => {
        console.error('Error al obtener las estadísticas:', error);
        this.loading = false;
      }
    );
  }

  formatTime(totalSeconds: number): string {

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${hours
      .toString()
      .padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`;
  }

}