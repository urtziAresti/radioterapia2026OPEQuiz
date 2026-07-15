import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { RADIO_QUESTIONS } from "../../data/radio-questions/radio_questions";
import { QuestionProgress } from "../interfaces/progress";
import { HistoryService } from "./history.service";
import { Question } from "../../app/interfaces/question";
import { COMMON_QUESTIONS } from "../../data/common-questions/common_questions";
import { TEST_TYPE } from "../components/welcome/welcome.component";

export interface MagicAnswer {
  answer: string;
  explanation: string;
}

@Injectable({
  providedIn: "root",
})
export class QuizService {
  private readonly apiUrl = "/api/GPT";

  private http = inject(HttpClient);
  private history = inject(HistoryService);
  private availableQuestions: Question[] = [];

  ALL_QUESTIONS: Question[] = [...RADIO_QUESTIONS, ...COMMON_QUESTIONS];
  constructor() {
    this.resetQuestions();
  }

  // =====================================
  // GPT
  // =====================================

  ask(question: Question): Observable<MagicAnswer> {
    const formattedPrompt = `
Eres un experto en Radioterapia en Osakidetza.

Analiza cuidadosamente la pregunta y responde con UNA única opción.

Devuelve EXCLUSIVAMENTE un JSON válido.

Formato:

{
  "answer":"a",
  "explanation":"Explicación breve."
}

Pregunta:

${question.question}

Opciones

a) ${question.options.a}

b) ${question.options.b}

c) ${question.options.c}

d) ${question.options.d}
`;

    return this.http
      .post<{ ok: boolean; answer: string }>(this.apiUrl, {
        question: formattedPrompt,
      })
      .pipe(
        map((res) => {
          try {
            const json = JSON.parse(res.answer);

            if (json && ["a", "b", "c", "d"].includes(json.answer)) {
              return json as MagicAnswer;
            }

            throw new Error();
          } catch {
            try {
              const cleaned = res.answer
                .replace(/```json/g, "")
                .replace(/```/g, "")
                .trim();

              const json = JSON.parse(cleaned);

              if (json && ["a", "b", "c", "d"].includes(json.answer)) {
                return json;
              }
            } catch { }

            return {
              answer: "",

              explanation: "Error parseando respuesta",
            };
          }
        })
      );
  }

  getQuestions(quiz_type: TEST_TYPE, count: number): Question[] {
    if (quiz_type === TEST_TYPE.RADIO) {
      return this.getRadioQuestions(count);
    }

    if (quiz_type === TEST_TYPE.ALL) {
      const radioCount = Math.round(count * 0.8);
      const commonCount = count - radioCount;

      const questions = [
        ...this.getRadioQuestions(radioCount),
        ...this.getCommonQuestions(commonCount),
      ];
      return this.shuffle(questions);
    }

    return this.getCommonQuestions(count);
  }

  getRadioQuestions(count: number): Question[] {


    count = 1;

    return RADIO_QUESTIONS.slice(0, 1);



    const answeredIds = new Set(this.history.getAnsweredQuestionIds());

    const remainingQuestions = RADIO_QUESTIONS.filter(
      (q) => !answeredIds.has(q.id)
    );

    return this.shuffle(remainingQuestions).slice(0, count);
  }

  getCommonQuestions(count: number): Question[] {
    const answeredIds = new Set(this.history.getAnsweredQuestionIds());

    const remainingQuestions = COMMON_QUESTIONS.filter(
      (q) => !answeredIds.has(q.id)
    );

    return this.shuffle(remainingQuestions).slice(0, count);
  }

  getQuestionsByIds(ids: number[]): Question[] {
    if (!ids.length) {
      return [];
    }

    const set = new Set(ids);

    return this.ALL_QUESTIONS.filter((q) => set.has(q.id));
  }

  checkAnswer(question: Question, answer: string): boolean {
    if (question.second_correct) {
        return question.correct === answer || question.second_correct === answer;
      }
      return question.correct === answer;
  }

  private resetQuestions(): void {
    this.availableQuestions = [...RADIO_QUESTIONS];
    this.shuffle(this.availableQuestions);
  }

  private shuffle(array: Question[]): Question[] {
    const result = [...array];

    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }

  getProgress(): QuestionProgress {
    const answered = this.history.getAnsweredQuestionsCount();

    const total = this.ALL_QUESTIONS.length;

    const remaining = Math.max(0, total - answered);

    return {
      answered,
      total,
      remaining,
      percentage: Math.round((answered / total) * 100),
    };
  }

  getIncorrect(): number[] {
    return this.history.getIncorrectAnswers();
  }

  hasIncorrect(): boolean {
    return this.history.hasIncorrectAnswers();
  }

  clearHistory(): void {
    this.history.clearHistory();
  }

  getHistory() {
    return this.history.getAllHistory();
  }
}
