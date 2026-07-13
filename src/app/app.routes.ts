import { Routes } from '@angular/router';
import { authGuard } from './guards/auth-guard';
import { loginGuard } from './guards/login.guard';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

const rootRedirect = () => {
  const router = inject(Router);

  return localStorage.getItem('userSession')
    ? router.createUrlTree(['/welcome'])
    : router.createUrlTree(['/login']);
};

export const routes: Routes = [
  {
    path: '',
    canActivate: [rootRedirect],
    component: class {}
  },

  {
    path: 'login',
    canActivate: [loginGuard],
    loadComponent: () =>
      import('../app/components/login/login.component').then(
        (m) => m.LoginComponent
      ),
  },

  {
    path: 'welcome',
    canActivate: [authGuard],
    loadComponent: () =>
      import('../app/components/welcome/welcome.component').then(
        (m) => m.WelcomeComponent
      ),
  },

  {
    path: 'questions',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/quiz/quiz.page').then((m) => m.QuizPage),
  },

  {
    path: 'data',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./components/references/references.component').then(
        (m) => m.ReferencesComponent
      ),
  },
  {
    path: 'instructions',
    canActivate: [authGuard],
    loadComponent: () =>
      import('../app/components/instructions/instructions.component').then(
        (m) => m.InstructionsComponent
      ),
  },
  {
    path: 'panel',
    canActivate: [authGuard],
    loadComponent: () =>
      import('../app/components/panel/panel.component').then(
        (m) => m.PanelComponent
      ),
  },
  {
    path: 'users',
    loadComponent: () =>
      import('../app/components/panel/users/users.component').then(m => m.UsersComponent)
  },

  {
    path: '**',
    redirectTo: '',
  },
];