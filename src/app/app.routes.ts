import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'questions',
    loadComponent: () => import('../pages/quiz/quiz.page').then((m) => m.QuizPage),
  },
  {
    path: 'welcome',
    loadComponent: () => import('../app/components/welcome/welcome.component').then((m) => m.WelcomeComponent),
  },
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full',
  },
];
