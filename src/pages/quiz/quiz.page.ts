import { Component, OnInit, inject, OnDestroy } from "@angular/core";
import { QuizService } from "../../services/quiz.service";
import { Question } from "../../models/question.model";
import { IonicModule } from "@ionic/angular";
import { CommonModule } from "@angular/common";
import { ActivatedRoute, Router } from "@angular/router";
import { addIcons } from "ionicons";
import { LogService } from "../../services/log.service";
import { sparklesOutline, chevronForwardCircleOutline,timeOutline } from "ionicons/icons";
interface MagicAnswer {
  answer: string;
  explanation?: string;
}
addIcons({
  "sparkles-outline": sparklesOutline,
  "chevron-forward-outline": chevronForwardCircleOutline,
  "time-outline": timeOutline,
});

@Component({
  selector: "app-quiz",
  templateUrl: "./quiz.page.html",
  styleUrls: ["./quiz.page.scss"],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class QuizPage implements OnInit, OnDestroy {
  private readonly OK_QUESTION_TIME = 1500;

  private quizService = inject(QuizService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private logService = inject(LogService);

  questions: Question[] = [];
  currentIndex = 0;
  correctAnswers = 0;

  playerName = "";
  count = 0;

  selectedOption: string | null = null;
  isAnswered = false;
  nextVisible = false;

  magicAnswer: MagicAnswer | null = null;
  errorMessage: string | null = null;
  loadingMagic = false;

  elapsedTime = "00:00";
  private timer: any = null;
  private elapsedSeconds = 0;

  private navigationLocked = false;
  private answerLocked = false;
  private quizFinished = false;
  private questionTimeout: any = null;

  wrongAnswersMap: Record<number, number> = {};

  mode: "normal" | "failed" = "normal";
  failedIds: number[] = [];

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (params["name"]) {
        this.playerName = params["name"];
      }

      if (params["mode"] === "failed") {
        this.mode = "failed";
        this.failedIds = JSON.parse(params["ids"] || "[]");

        this.resetQuizState();
        this.loadFailedQuestions();
        return;
      }

      if (params["count"]) {
        this.mode = "normal";
        this.count = +params["count"];

        this.resetQuizState();
        this.questions = this.quizService.getQuestions(this.count);
      }
    });
  }

  private resetQuizState() {
    this.currentIndex = 0;
    this.correctAnswers = 0;
  
    this.selectedOption = null;
    this.isAnswered = false;
    this.nextVisible = false;
  
    this.magicAnswer = null;
    this.loadingMagic = false;
  
    this.answerLocked = false;
    this.navigationLocked = false;
    this.quizFinished = false;
  
    this.wrongAnswersMap = {};
    this.questionTimeout = null;
  
    this.stopTimer();
    this.startTimer();
  }


  private loadFailedQuestions() {
    this.questions = this.quizService.getQuestionsByIds(this.failedIds);
    this.currentIndex = 0;

    this.selectedOption = null;
    this.isAnswered = false;
    this.nextVisible = false;
  }

  get progress(): number {
    if (!this.questions.length) return 0;
    return this.currentIndex / this.questions.length;
  }

  answer(option: string) {
    if (this.answerLocked || this.isAnswered) return;

    this.answerLocked = true;
    this.selectedOption = option;

    const currentQuestion = this.questions[this.currentIndex];
    const isCorrect = option === currentQuestion.correct;

    this.isAnswered = true;

    if (isCorrect) {
      this.correctAnswers++;

      if (this.mode === "failed") {
        this.removeQuestionFromWrongAnswers(currentQuestion.id);
        this.failedIds = this.failedIds.filter(
          (id) => id !== currentQuestion.id
        );
      }

      this.slideError(this.OK_QUESTION_TIME);
    } else {
      this.nextVisible = true;

      const id = currentQuestion.id;
      this.wrongAnswersMap[id] = (this.wrongAnswersMap[id] || 0) + 1;
    }

    this.logService.log("ANSWER_SELECTED", {
      questionId: currentQuestion.id,
      correct: isCorrect,
    });
  }

  slideError(slideTime: number) {
    if (this.questionTimeout) clearTimeout(this.questionTimeout);

    this.questionTimeout = setTimeout(() => {
      this.nextQuestion();
    }, slideTime);
  }

  nextQuestion() {
    if (this.navigationLocked) return;

    this.navigationLocked = true;

    this.currentIndex++;
    this.nextVisible = false;

    this.magicAnswer = null;
    this.loadingMagic = false;

    if (this.currentIndex >= this.questions.length) {
      this.finishQuiz();
      return;
    }

    this.selectedOption = null;
    this.isAnswered = false;
    this.answerLocked = false;

    setTimeout(() => {
      this.navigationLocked = false;
    }, 100);
  }

  finishQuiz() {
    if (this.quizFinished) return;
  
    this.stopTimer();
  
    this.quizFinished = true;
  
  }

  getOptionColor(optionKey: string): string {
    if (!this.isAnswered) {
      return this.selectedOption === optionKey ? "selected-option" : "";
    }

    const correctKey = this.questions[this.currentIndex].correct;

    if (optionKey === correctKey) return "correct-option";

    if (this.selectedOption === optionKey && optionKey !== correctKey) {
      return "incorrect-option";
    }

    return "disabled-option";
  }

  goToHome() {
    this.router.navigate(["/welcome"]);
  }

  useMagic(allquestion: any) {
    if (this.loadingMagic) return;

    this.loadingMagic = true;
    this.magicAnswer = null;

    this.quizService.ask(allquestion).subscribe({
      next: (res: MagicAnswer) => {
        this.magicAnswer = res;
        this.errorMessage = null;
        this.loadingMagic = false;
      },
      error: () => {
        this.magicAnswer = null;
        this.errorMessage = "Error consultando la magia 😅";
        this.loadingMagic = false;
      },
    });
  }

  get resultsPage(): boolean {
    return this.currentIndex !== this.questions.length;
  }

  private removeQuestionFromWrongAnswers(questionId: number): void {
    const session = localStorage.getItem("userSession");
    if (!session) return;
  
    const username = JSON.parse(session).username;
  
    const raw = sessionStorage.getItem("quiz_history");
    if (!raw) return;
  
    const history = JSON.parse(raw);
  
    const user = history.find((u: any) => u.user === username);
    if (!user) return;
  
    user.attempts.forEach((attempt: any) => {
      if (attempt.wrongAnswers) {
        delete attempt.wrongAnswers[questionId];
      }
    });
  
    sessionStorage.setItem("quiz_history", JSON.stringify(history));
  }

  private startTimer() {
    this.stopTimer();
  
    this.elapsedSeconds = 0;
    this.updateElapsedTime();
  
    this.timer = setInterval(() => {
      this.elapsedSeconds++;
      this.updateElapsedTime();
    }, 1000);
  }
  
  private stopTimer() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }
  
  private updateElapsedTime() {
    const hours = Math.floor(this.elapsedSeconds / 3600);
    const minutes = Math.floor((this.elapsedSeconds % 3600) / 60);
    const seconds = this.elapsedSeconds % 60;
  
    this.elapsedTime =
      (hours > 0 ? hours.toString().padStart(2, "0") + ":" : "") +
      minutes.toString().padStart(2, "0") +
      ":" +
      seconds.toString().padStart(2, "0");
  }
  
  ngOnDestroy(): void {
    this.stopTimer();
  
    if (this.questionTimeout) {
      clearTimeout(this.questionTimeout);
      this.questionTimeout = null;
    }
  }
}