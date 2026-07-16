import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { firstValueFrom, Observable } from "rxjs";
import { ResultsData } from "../interfaces/results-data";

@Injectable({
  providedIn: "root",
})
export class StatsService {

  private http = inject(HttpClient);

  private apiUrl = "/api/stats";

  async uploadProgress(data: ResultsData): Promise<void> {

    const percentage =
      Math.round((data.correctAnswers / data.totalQuestions) * 100);

    await firstValueFrom(
      this.http.post(this.apiUrl, {
        ...data,
        percentage
      })
    );
  }

  getUserStats(): Observable<any> {
    return this.http.get<any[]>(this.apiUrl);
  }
}