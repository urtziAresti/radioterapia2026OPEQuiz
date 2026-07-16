import { Component, OnInit } from '@angular/core';
import { StatsService } from '../../../services/stats.service';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
  standalone:true,
  imports: [CommonModule,IonicModule]
})
export class StatsComponent implements OnInit {
  userStats: any[] = []; // Lista para almacenar las estadísticas de los usuarios
  loading: boolean = true; // Indicador de carga

  constructor(private statsService: StatsService) {}

  ngOnInit() {
    this.fetchUserStats();
  }

  // Método para obtener las estadísticas
  fetchUserStats() {
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
  
            // Sumar tiempo (MM:SS -> segundos)
            const [minutes, seconds] = stat.elapsedTime.split(':').map(Number);
            acc[stat.playerName].totalSeconds += minutes * 60 + seconds;
  
            // Última partida
            if (new Date(stat.createdAt) > new Date(acc[stat.playerName].lastPlayed)) {
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
                ? Math.round((user.correctAnswers / user.totalQuestions) * 100)
                : 0,
              elapsedTime: `${minutes.toString().padStart(2, '0')}:${seconds
                .toString()
                .padStart(2, '0')}`,
              lastPlayed: new Date(user.lastPlayed).toLocaleString()
            };
          });
        }
  
        this.loading = false;
      },
      (error) => {
        console.error('Error al obtener las estadísticas:', error);
        this.loading = false;
      }
    );
  }
}