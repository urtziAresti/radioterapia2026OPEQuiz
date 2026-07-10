import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const loginGuard: CanActivateFn = () => {
  const router = inject(Router);

  const session = localStorage.getItem('userSession');

  if (session) {
    const userSession = JSON.parse(session);
    if (!userSession.timestamp) {
      localStorage.removeItem('userSession');
      return router.createUrlTree(['/login']);
    }
    const timestamp = new Date(userSession.timestamp);
    const now = new Date();
    // 48 horas
    const hoursElapsed = (now.getTime() - timestamp.getTime()) / (1000 * 60 * 60); // Diferencia en horas
    if (hoursElapsed > 48) {
      localStorage.removeItem('userSession');
      return router.createUrlTree(['/login']);
    }
    return router.createUrlTree(['/welcome']);
  }
  return true;
};