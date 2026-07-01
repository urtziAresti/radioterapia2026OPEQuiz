import { inject, Injectable } from "@angular/core";
import { RADIO_QUESTIONS } from "../data/radio-questions/radio_questions";
import { Question } from "../models/question.model";
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { QuestionProgress } from "../interfaces/progress";

export interface MagicAnswer {
  answer: string;
  explanation: string;
}

@Injectable({ providedIn: "root" })
export class QuizService {
  private apiUrl = "/api/GPT";
  private http = inject(HttpClient);
  private availableQuestions: Question[] = [];

  constructor() {
    this.resetQuestions();
  }
  /**
   * Envía una pregunta al backend para que GPT devuelva JSON estructurado
   */
  ask(question: Question): Observable<MagicAnswer> {
    const formattedPrompt = `
Eres un experto en Radioterapia.

Analiza cuidadosamente la pregunta y selecciona UNA ÚNICA respuesta correcta.

INSTRUCCIONES OBLIGATORIAS:

- Devuelve EXCLUSIVAMENTE un objeto JSON válido.
- No utilices Markdown.
- No escribas \`\`\`.
- No añadas comentarios.
- No añadas texto antes ni después del JSON.
- El campo "answer" SOLO puede contener uno de estos valores:
  "a"
  "b"
  "c"
  "d"
- Nunca inventes otros valores.
- Si dudas, elige siempre la opción más probable.
- La explicación debe estar en español y tener como máximo dos frases.

El formato debe ser EXACTAMENTE este:

{
  "answer": "a",
  "explanation": "Explicación breve en español."
}

Pregunta:
${question.question}

Opciones:
a) ${question.options.a}
b) ${question.options.b}
c) ${question.options.c}
d) ${question.options.d}
`;

    return this.http
      .post<{ ok: boolean; answer: string }>(
        this.apiUrl,
        {
          question: formattedPrompt,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .pipe(
        map((res) => {
          try {
            const json = JSON.parse(res.answer);

            // Validación mínima
            if (
              json &&
              ["a", "b", "c", "d"].includes(json.answer) &&
              typeof json.explanation === "string"
            ) {
              return json as MagicAnswer;
            }

            throw new Error("JSON inválido");
          } catch {
            // Fallback por si devuelve ```json ... ```
            try {
              const cleaned = res.answer
                .replace(/```json/gi, "")
                .replace(/```/g, "")
                .trim();

              const json = JSON.parse(cleaned);

              if (
                json &&
                ["a", "b", "c", "d"].includes(json.answer) &&
                typeof json.explanation === "string"
              ) {
                return json as MagicAnswer;
              }
            } catch {}

            return {
              answer: "",
              explanation: "Error parseando respuesta de la IA",
            };
          }
        })
      );
  }

  private shuffle(array: Question[]): void {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  private resetQuestions(): void {
    this.availableQuestions = [...RADIO_QUESTIONS];
    this.shuffle(this.availableQuestions);
  }

  /**
   * Devuelve preguntas sin repetir hasta agotar todas.
   */
  getQuestions(count: number): Question[] {
    if (this.availableQuestions.length < count) {
      this.resetQuestions();
    }

    return this.availableQuestions.splice(0, count);
  }

  /**
   * Comprueba respuesta correcta
   */
  checkAnswer(question: Question, answer: string): boolean {
    return question.correct === answer;
  }

  /**
   * Filtra preguntas por IDs
   */
  getQuestionsByIds(ids: number[]): Question[] {
    if (!Array.isArray(ids) || ids.length === 0) return [];

    const idSet = new Set(ids.map((id) => Number(id)));

    return RADIO_QUESTIONS.filter((q) => idSet.has(Number(q.id)));
  }

  /**
   * Devuelve el progreso del usuario.
   */
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
}
