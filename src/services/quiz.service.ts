import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { RADIO_QUESTIONS } from "../data/radio-questions/radio_questions";
import { QuestionProgress } from "../interfaces/progress";
import { HistoryService } from "./history.service";
import { Question } from "../interfaces/question";

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
            } catch {}

            return {
              answer: "",

              explanation: "Error parseando respuesta",
            };
          }
        })
      );
  }

  // =====================================
  // QUESTIONS
  // =====================================

  getQuestions(count: number): Question[] {
    debugger;
    if (this.availableQuestions.length < count) {
      debugger;
      this.resetQuestions();
    }
    return this.availableQuestions.splice(0, count);
  }

  getQuestionsByIds(ids: number[]): Question[] {
    if (!ids.length) {
      return [];
    }

    const set = new Set(ids);

    return RADIO_QUESTIONS.filter((q) => set.has(q.id));
  }

  checkAnswer(question: Question, answer: string): boolean {
    return question.correct === answer;
  }

  private resetQuestions(): void {
    this.availableQuestions = [...RADIO_QUESTIONS];

    this.shuffle(this.availableQuestions);
  }

  private shuffle(array: Question[]): void {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  // =====================================
  // PROGRESO
  // =====================================

  getProgress(): QuestionProgress {
    return {
      answered: RADIO_QUESTIONS.length - this.availableQuestions.length,

      total: RADIO_QUESTIONS.length,

      remaining: this.availableQuestions.length,

      percentage: Math.round(
        ((RADIO_QUESTIONS.length - this.availableQuestions.length) /
          RADIO_QUESTIONS.length) *
          100
      ),
    };
  }

  // =====================================
  // HISTORIAL
  // =====================================

  saveWrongAnswer(questionId: number): void {
    this.history.saveWrongAnswer(questionId);
  }

  removeWrongAnswer(questionId: number): void {
    this.history.removeWrongAnswer(questionId);
  }

  getWrongAnswers(): number[] {
    return this.history.getWrongAnswers();
  }

  hasWrongAnswers(): boolean {
    return this.history.hasWrongAnswers();
  }

  clearHistory(): void {
    this.history.clearHistory();
  }

  getHistory() {
    return this.history.getAllHistory();
  }
}
