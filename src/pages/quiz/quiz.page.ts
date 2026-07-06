import { Component, OnInit, OnDestroy, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute, Router } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { addIcons } from "ionicons";
import {
  sparklesOutline,
  chevronForwardCircleOutline,
  timeOutline,
} from "ionicons/icons";

import { QuizService, MagicAnswer } from "../../services/quiz.service";
import { HistoryService } from "../../services/history.service";
import { TimerService } from "../../services/timer.service";
import { LogService } from "../../services/log.service";
import { Question } from "../../interfaces/question";
import { TEST_TYPE } from "../../app/components/welcome/welcome.component";


addIcons({
  "sparkles-outline": sparklesOutline,
  "chevron-forward-outline": chevronForwardCircleOutline,
  "time-outline": timeOutline,
});

@Component({
  selector: "app-quiz",
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: "./quiz.page.html",
  styleUrls: ["./quiz.page.scss"],
})
export class QuizPage implements OnInit, OnDestroy {
  private readonly OK_QUESTION_TIME = 1500;

  private quizService = inject(QuizService);
  private historyService = inject(HistoryService);
  private timerService = inject(TimerService);

  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private logService = inject(LogService);

  questions: Question[] = [];
  currentIndex = 0;
  correctAnswers = 0;
  count = 0;

  playerName = "";
  quiz_type : TEST_TYPE = TEST_TYPE.RADIO;

  mode: "normal" | "failed" = "normal";

  failedIds: number[] = [];

  selectedOption: string | null = null;

  isAnswered = false;

  nextVisible = false;

  loadingMagic = false;

  magicAnswer: MagicAnswer | null = null;

  errorMessage: string | null = null;

  elapsedTime = "00:00";

  private navigationLocked = false;

  private answerLocked = false;

  private quizFinished = false;

  private questionTimeout: any = null;

  constructor() {
    this.timerService.elapsedTime$.subscribe((time) => {
      this.elapsedTime = time;
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (params["name"]) {
        this.playerName = params["name"];
      }

      if (params["quiz_type"]) {
        
        this.quiz_type = params["quiz_type"];
      }

      if (params["mode"] === "failed") {
        this.mode = "failed";

        this.failedIds = JSON.parse(params["ids"] || "[]");

        this.resetQuiz();

        this.questions = this.quizService.getQuestionsByIds(this.failedIds);

        return;
      }
      this.mode = "normal";
      this.count = +params["count"];
      this.resetQuiz();
      this.questions = this.quizService.getQuestions(this.quiz_type,this.count);
    });
  }

  private resetQuiz(): void {
    this.currentIndex = 0;

    this.correctAnswers = 0;

    this.selectedOption = null;

    this.isAnswered = false;

    this.nextVisible = false;

    this.loadingMagic = false;

    this.magicAnswer = null;

    this.answerLocked = false;

    this.navigationLocked = false;

    this.quizFinished = false;

    this.timerService.start();
  }

  get progress(): number {
    if (!this.questions.length) {
      return 0;
    }

    return this.currentIndex / this.questions.length;
  }
  answer(option: string): void {
    if (this.answerLocked || this.isAnswered) {
      return;
    }

    this.answerLocked = true;
    this.selectedOption = option;

    const currentQuestion = this.questions[this.currentIndex];

    const isCorrect = this.quizService.checkAnswer(currentQuestion, option);

    this.isAnswered = true;

    if (isCorrect) {
      this.correctAnswers++;
        
      if (this.mode === "failed") {
        
        this.failedIds = this.failedIds.filter(
          (id) => id !== currentQuestion.id
        );
      }
      this.slideError(this.OK_QUESTION_TIME);
    } else {
      this.nextVisible = true;
    }

    this.historyService.saveQuestion(currentQuestion.id, isCorrect);

    this.logService.log("ANSWER_SELECTED", {
      questionId: currentQuestion.id,
      correct: isCorrect,
    });
  }

  private slideError(delay: number): void {
    if (this.questionTimeout) {
      clearTimeout(this.questionTimeout);
    }

    this.questionTimeout = setTimeout(() => {
      this.nextQuestion();
    }, delay);
  }

  nextQuestion(): void {
    if (this.navigationLocked) {
      return;
    }

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

  private finishQuiz(): void {
    if (this.quizFinished) {
      return;
    }

    this.quizFinished = true;

    this.timerService.stop();
  }

  getOptionColor(optionKey: string): string {
    if (!this.isAnswered) {
      return this.selectedOption === optionKey ? "selected-option" : "";
    }

    const correct = this.questions[this.currentIndex].correct;

    if (optionKey === correct) {
      return "correct-option";
    }

    if (this.selectedOption === optionKey && optionKey !== correct) {
      return "incorrect-option";
    }

    return "disabled-option";
  }

  goToHome(): void {
    this.router.navigateByUrl("/", {
      skipLocationChange: true
    }).then(() => {
      this.router.navigateByUrl("/welcome", {
        replaceUrl: true
      });
    });
  }

  useMagic(question: Question): void {
    if (this.loadingMagic) {
      return;
    }

    this.loadingMagic = true;

    this.magicAnswer = null;

    this.errorMessage = null;

    this.quizService.ask(question).subscribe({
      next: (answer) => {
        this.magicAnswer = answer;

        this.loadingMagic = false;
      },

      error: () => {
        this.loadingMagic = false;

        this.magicAnswer = null;

        this.errorMessage = "Error consultando la magia 😅";
      },
    });
  }

  get resultsPage(): boolean {
    return this.currentIndex !== this.questions.length;
  }

  ngOnDestroy(): void {
    this.timerService.stop();

    if (this.questionTimeout) {
      clearTimeout(this.questionTimeout);

      this.questionTimeout = null;
    }
  }
}
