import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);

  // 🔄 Leemos de localStorage la clave correcta 'userSession'
  const userSession = localStorage.getItem('userSession');

  if (userSession) {
    return true; // Permitir el paso si existe la sesión
  }

  // Si no hay sesión, rebota al login
  router.navigate(['/login']);
  return false;
};