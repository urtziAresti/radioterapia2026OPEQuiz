import {
  Component,
  EventEmitter,
  inject,
  Output,
  OnInit,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NavigationEnd, Router } from "@angular/router";
import { QuizService } from "../../services/quiz.service";
import { QuestionProgress } from "../../interfaces/progress";
import { IonicModule } from "@ionic/angular";
import { MailService } from "../../services/mail-service";
import { I18nService } from "../../../assets/i18n/i18n.service";

export enum TEST_TYPE {
  RADIO = "RADIO",
  COMMON = "COMMON",
  ALL = "ALL"
}
@Component({
  selector: "app-welcome",
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.scss"],
})
export class WelcomeComponent implements OnInit {
  private readonly i18n = inject(I18nService);
  texts = this.i18n.texts;
  questionCounts = [
    { value: 2, label: this.texts.WELCOME.questions[2] },
    { value: 5, label: this.texts.WELCOME.questions[5] },
    { value: 10, label: this.texts.WELCOME.questions[10] },
    { value: 25, label: this.texts.WELCOME.questions[25] },
    { value: 50, label: this.texts.WELCOME.questions[50] },
    { value: 110, label: this.texts.WELCOME.questions[110] },
    { value: 150, label: this.texts.WELCOME.questions[150] },
    { value: 200, label: this.texts.WELCOME.questions[200] },
    { value: 300, label: this.texts.WELCOME.questions[300] },
  ];
  username: string = "";
  selectedQuestionCount: number = 25;
  failedQuestions: number[] = [];
  private router = inject(Router);
  private quizService = inject(QuizService);
  private mailService = inject(MailService);
  progress!: QuestionProgress;
  TEST_TYPE: typeof TEST_TYPE = TEST_TYPE;

  @Output() configSubmitted = new EventEmitter<{
    username: string;
    count: number;
  }>();

  constructor() {
    inject(Router).events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.loadData();
      }
    });
  }

  ngOnInit() {
    const session = localStorage.getItem("userSession");
    if (session) {
      const user = JSON.parse(session);
      this.username = user.username;
    }

    this.progress = this.quizService.getProgress();
    this.failedQuestions = this.getFailedQuestions();
  }

  loadData() {
    const session = localStorage.getItem("userSession");
    if (session) {
      const user = JSON.parse(session);
      this.username = user.username;
    }

    this.progress = this.quizService.getProgress();
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

  startQuiz(type: TEST_TYPE) {
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
          quiz_type: type
        },
      });
    }
  }

  sendSuggestionsMail() {
    this.mailService.sendSuggestionsMail();
  }

  startRepasoMode() {
    const failedIds = this.failedQuestions;

    if (!failedIds.length) return;

    this.router.navigate(["/questions"], {
      queryParams: {
        name: this.username,
        mode: "failed",
        ids: JSON.stringify(failedIds),
      },
    });
  }
  viewData() {
    this.router.navigate(["/data"]);
  }
  viewInstructions(): void {
    this.router.navigate(["/instructions"]);
  }
  viewPanel(): void { 
    this.router.navigate(["/panel"]);
  }     
}
