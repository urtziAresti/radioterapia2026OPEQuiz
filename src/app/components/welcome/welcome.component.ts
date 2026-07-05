import { Component, EventEmitter, inject, Output, OnInit, OnDestroy } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { IonicModule } from "@ionic/angular";

import { QuizService } from "../../../services/quiz.service";
import { QuestionProgress } from "../../../interfaces/progress";

@Component({
  selector: "app-welcome",
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.scss"],
})
export class WelcomeComponent implements OnInit, OnDestroy {

  username: string = "";

  selectedQuestionCount = 25;

  failedQuestions: number[] = [];

  progress!: QuestionProgress;

  private router = inject(Router);

  private quizService = inject(QuizService);

  @Output()
  configSubmitted = new EventEmitter<{
    username: string;
    count: number;
  }>();

  ngOnInit(): void {

    this.loadData();

    document.addEventListener(
      "visibilitychange",
      this.onVisibilityChange
    );

  }

  ngOnDestroy(): void {

    document.removeEventListener(
      "visibilitychange",
      this.onVisibilityChange
    );

  }

  private onVisibilityChange = (): void => {

    if (document.visibilityState === "visible") {
      this.loadData();
    }

  };

  private loadData(): void {

    const session = localStorage.getItem("userSession");

    if (session) {
      const user = JSON.parse(session);
      this.username = user.username;
    }

    this.progress = this.quizService.getProgress();

    this.failedQuestions = this.getFailedQuestions();

    console.log(this.progress);

  }

  get failedCount(): number {
    return this.failedQuestions.length;
  }

  get areFailedQuestions(): boolean {
    return this.failedQuestions.length > 0;
  }

  getFailedQuestions(): number[] {

    const session = localStorage.getItem("userSession");

    if (!session) return [];

    const currentUser = JSON.parse(session);

    const username = currentUser?.username || "anonymous";

    const raw = sessionStorage.getItem("quiz_history");

    if (!raw) return [];

    const history: any[] = JSON.parse(raw);

    const userHistory = history.find(u => u.user === username);

    if (!userHistory) return [];

    const failedQuestions: number[] = userHistory.attempts.flatMap((attempt: any) =>
      Object.entries(attempt.wrongAnswers || {})
        .filter(([_, count]) => Number(count) > 0)
        .map(([id]) => Number(id))
    );

    return [...new Set(failedQuestions)];

  }

  startQuiz(): void {

    if (this.username && this.selectedQuestionCount) {

      const config = {
        username: this.username,
        count: this.selectedQuestionCount,
      };

      this.configSubmitted.emit(config);

      this.router.navigate(
        ["/questions"],
        {
          queryParams: {
            name: config.username,
            count: config.count,
          },
        }
      );

    }

  }

  sendSuggestionsMail(): void {

    const email = "urtzi.aresti+OPEAPP@gmail.com";

    const subject = encodeURIComponent(
      "Sugerencias OPE - Test Radioterapia"
    );

    const body = encodeURIComponent(
      "Hola,\n\nQuería enviar las siguientes sugerencias sobre el test:\n\n"
    );

    window.location.href =
      `mailto:${email}?subject=${subject}&body=${body}`;

  }

  startRepasoMode(): void {

    if (!this.failedQuestions.length) {
      return;
    }

    this.router.navigate(
      ["/questions"],
      {
        queryParams: {
          name: this.username,
          mode: "failed",
          ids: JSON.stringify(this.failedQuestions),
        },
      }
    );

  }

  viewData(): void {

    this.router.navigate(["/data"]);

  }

}