export interface Question {
    id: number;
    question: string;
    options: {
      a: string;
      b: string;
      c: string;
      d: string;
    };
    correct: "a" | "b" | "c" | "d";
    second_correct?: "a" | "b" | "c" | "d";
  }