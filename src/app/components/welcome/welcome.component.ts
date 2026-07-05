import { Component, EventEmitter, inject, Output, OnInit, OnDestroy } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NavigationEnd, Router } from "@angular/router";
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

  constructor() {

    inject(Router).events.subscribe(event => {
  
      if (event instanceof NavigationEnd) {

          this.loadData();
      }
  
    });
  
  }
  loadData(){
    alert("load data")
    const session = localStorage.getItem("userSession");
    if (session) {
      const user = JSON.parse(session);
      this.username = user.username;
    }
    
   this.progress = this.quizService.getProgress();

    console.log(this.progress);
    this.failedQuestions = this.getFailedQuestions();
  }

  ngOnInit() {
    alert("entra en el init wel");
    debugger;
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
  
    if (!session) {
      return [];
    }
  
    const currentUser = JSON.parse(session);
  
    const username = currentUser?.username;
  
    if (!username) {
      return [];
    }
  
    const raw = sessionStorage.getItem("quiz_history");
  
    if (!raw) {
      return [];
    }
  
    const history = JSON.parse(raw);
  
    const userHistory = history.find((u: any) => u.user === username);
  
    if (!userHistory) {
      return [];
    }
  
    const state = new Map<number, boolean>();
  
    for (const attempt of userHistory.attempts) {
  
      if (!attempt.questions) {
        continue;
      }
  
      for (const question of attempt.questions) {
        // La última respuesta registrada para cada pregunta prevalece
        state.set(question.questionId, question.correct);
      }
  
    }
  
    return Array.from(state.entries())
      .filter(([, correct]) => !correct)
      .map(([id]) => id);
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
    const subject = encodeURIComponent(
      "Sugerencias OPE - Test Radioterapia"
    );
    const body = encodeURIComponent(
      `Hola,\n\nQuería enviar las siguientes sugerencias sobre el test:\n\n`
    );
  
    window.open(
      `mailto:${email}?subject=${subject}&body=${body}`,
      "_self"
    );
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
