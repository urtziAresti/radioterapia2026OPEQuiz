import { Component, EventEmitter, inject, Output, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { QuizService } from "../../../services/quiz.service";
import { QuestionProgress } from "../../../interfaces/progress";
import { IonicModule } from "@ionic/angular";

@Component({
  selector: "app-welcome",
  standalone: true,
  imports: [CommonModule, FormsModule,IonicModule],
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.scss"],
})
export class WelcomeComponent implements OnInit {
  username: string = "";
  selectedQuestionCount: number = 25;
  failedQuestions: number[] = [];
  private router = inject(Router);
  private quizService = inject(QuizService);
  progress!: QuestionProgress;

  @Output() configSubmitted = new EventEmitter<{
    username: string;
    count: number;
  }>();

  ngOnInit() {
    const session = localStorage.getItem("userSession");
    if (session) {
      const user = JSON.parse(session);
      this.username = user.username;
    }
    
   this.progress = this.quizService.getProgress();

    console.log(this.progress);
    this.failedQuestions = this.getFailedQuestions();
  }

  get failedCount(): number {
    return this.failedQuestions.length;
  }

  get areFailedQuestions(): boolean {
    return this.getFailedQuestions().length > 0;
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

  startQuiz() {
    if (this.username && this.selectedQuestionCount) {
      const config = {
        username: this.username,
        count: this.selectedQuestionCount,
      };

      this.configSubmitted.emit(config);

      this.router.navigate(["/questions"], {
        queryParams: {
          name: config.username,
          count: config.count,
        },
      });
    }
  }

  sendSuggestionsMail() {
    const email = "urtzi.aresti+OPEAPP@gmail.com";
    const subject = encodeURIComponent("Sugerencias OPE - Test Radioterapia");
    const body = encodeURIComponent(
      `Hola,\n\nQuería enviar las siguientes sugerencias sobre el test:\n\n`
    );

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  }

  startRepasoMode() {
    const failedIds = this.failedQuestions;
  
    if (!failedIds.length) return;
  
    this.router.navigate(['/questions'], {
      queryParams: {
        name: this.username,
        mode: 'failed',
        ids: JSON.stringify(failedIds)
      }
    });
    
  }
  viewData(){
    this.router.navigate(["/data"])
  }

}
