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
    const answeredIds = new Set(this.history.getAnsweredQuestionIds());

    const remainingQuestions = RADIO_QUESTIONS.filter(
      (q) => !answeredIds.has(q.id)
    );

    this.shuffle(remainingQuestions);

    return remainingQuestions.slice(0, count);
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
    const answered = this.history.getAnsweredQuestionsCount();

    const total = RADIO_QUESTIONS.length;

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
