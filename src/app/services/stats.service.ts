import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, Observable, map } from 'rxjs';
import { ResultsData } from '../interfaces/results-data';

// Respuesta común de la API
export interface StatsApiResponse<T> {
  success: boolean;
  data: T;
  error?: string;
}

// Tipos de quiz agrupados dentro de cada usuario
export interface UserQuizType {
  quiz_type: string;
  totalQuestions: number;
  correctAnswers: number;
  percentage: number;
}

// Resumen general: una entrada por usuario
export interface UserStatsSummary {
  playerName: string;
  totalTests: number;
  totalQuestions: number;
  correctAnswers: number;
  averagePercentage: number;
  lastAttempt: string;
  totalSeconds: number;
  quizTypes: UserQuizType[];
}

// Información del dispositivo
export interface DeviceInfo {
  [key: string]: unknown;
}

// Detalle individual de cada intento
export interface UserStatsDetail {
  _id: string;
  playerName: string;
  quiz_type: string;
  correctAnswers: number;
  totalQuestions: number;
  elapsedTime?: string;
  percentage: number;
  failedQuestions?: number;
  createdAt: string;
  [key: string]: any;
}

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  private http = inject(HttpClient);

  private readonly apiUrl = '/api/stats';

  // CREAR ESTADÍSTICA
  async uploadProgress(data: ResultsData): Promise<void> {

    const totalQuestions = Number(data.totalQuestions) || 0;
    const correctAnswers = Number(data.correctAnswers) || 0;

    const percentage = totalQuestions > 0
      ? Math.round((correctAnswers / totalQuestions) * 100)
      : 0;

    await firstValueFrom(
      this.http.post<{
        success: boolean;
        id?: string;
      }>(this.apiUrl, {
        ...data,
        percentage
      })
    );
  }

  // OBTENER RESUMEN GENERAL DE TODOS LOS USUARIOS
  getUserStats(): Observable<UserStatsSummary[]> {

    return this.http
      .get<StatsApiResponse<UserStatsSummary[]>>(this.apiUrl)
      .pipe(
        map(response => {
          if (!response?.success || !Array.isArray(response.data)) {
            console.error(
              'La API no ha devuelto un resumen válido:',
              response
            );

            return [];
          }

          return response.data;
        })
      );
  }

  // OBTENER HISTORIAL COMPLETO DE UN USUARIO
  getUserStatsDetail(
    playerName: string
  ): Observable<UserStatsDetail[]> {

    return this.http
      .get<StatsApiResponse<UserStatsDetail[]>>(this.apiUrl, {
        params: {
          playerName: playerName.trim()
        }
      })
      .pipe(
        map(response => {
          if (!response?.success || !Array.isArray(response.data)) {
            console.error(
              'La API no ha devuelto un detalle válido:',
              response
            );

            return [];
          }

          return response.data;
        })
      );
  }
}