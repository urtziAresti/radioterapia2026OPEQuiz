import { Routes } from '@angular/router';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('../app/components/login/login.component').then(
        (m) => m.LoginComponent
      ),
  },
  {
    path: 'questions',
    canActivate: [authGuard], // 🔐 Protegido
    loadComponent: () =>
      import('../pages/quiz/quiz.page').then((m) => m.QuizPage),
  },
  {
    path: 'welcome',
    canActivate: [authGuard], // 🔐 Protegido
    loadComponent: () =>
      import('../app/components/welcome/welcome.component').then(
        (m) => m.WelcomeComponent
      ),
  },

  {
    path: 'data',
    canActivate: [authGuard], 
    loadComponent: () =>
      import('../app/components/data/data.component').then(
        (m) => m.DataComponent
      ),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];