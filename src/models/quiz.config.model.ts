export type QuizMode = 'study' | 'exam';

export interface QuizConfig {
  playerName: string;
  mode: QuizMode;
}