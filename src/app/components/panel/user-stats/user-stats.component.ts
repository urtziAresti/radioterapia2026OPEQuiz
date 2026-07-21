import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StatsService } from '../../../services/stats.service';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-user-stats',
  templateUrl: './user-stats.component.html',
  styleUrls: ['./user-stats.component.scss'],
  imports: [CommonModule, IonicModule],
})
export class UserStatsComponent implements OnInit {
  private statsService = inject(StatsService);
  private route = inject(ActivatedRoute);

  userStats: any[] = []; // Estadísticas del usuario
  username: string = ''; // Nombre del usuario
  loading: boolean = true; // Indicador de carga

  // Resumen global del usuario
  totals = {
    quizzes: 0,
    correctAnswers: 0,
    totalQuestions: 0,
    totalSeconds: 0,
    percentage: 0, // Porcentaje de aciertos
  };

  ngOnInit(): void {
    // Obtener el username desde los query params
    this.route.queryParams.subscribe((params) => {
      this.username = params['userName'];
      if (this.username) {
        this.fetchUserStats();
      }
    });
  }

  fetchUserStats(): void {
    this.loading = true;
  
    // Llamar al servicio para obtener todas las estadísticas
    this.statsService.getUserStats().subscribe(
      (response) => {
        if (response.success) {
          // Filtrar las estadísticas del usuario
          this.userStats = response.data
            .filter((stat: any) => stat.playerName === this.username)
            .map((stat: any) => ({
              ...stat,
              failedQuestions: stat.totalQuestions - stat.correctAnswers, // Calcular preguntas fallidas
            }));
  
          // Calcular el resumen global
          this.totals.quizzes = this.userStats.length;
          this.totals.correctAnswers = this.userStats.reduce(
            (sum: number, stat: any) => sum + stat.correctAnswers,
            0
          );
          this.totals.totalQuestions = this.userStats.reduce(
            (sum: number, stat: any) => sum + stat.totalQuestions,
            0
          );
          this.totals.totalSeconds = this.userStats.reduce((sum: number, stat: any) => {
            const [minutes, seconds] = stat.elapsedTime.split(':').map(Number);
            return sum + minutes * 60 + seconds;
          }, 0);
  
          // Calcular el porcentaje de aciertos
          this.totals.percentage = this.totals.totalQuestions
            ? Math.round((this.totals.correctAnswers / this.totals.totalQuestions) * 100)
            : 0;
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

    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }
}