import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('../app/components/login/login.component').then((m) => m.LoginComponent),
  },
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
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
