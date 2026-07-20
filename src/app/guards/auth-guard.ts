import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = () => {

  const router = inject(Router);

  const session = localStorage.getItem('userSession');

  if (!session) {
    return router.createUrlTree(['/login']);
  }

  try {

    const user = JSON.parse(session);

    // Obligar a volver a iniciar sesión con el nuevo sistema
    if (user.version !== 2) {
      localStorage.removeItem('userSession');
      return router.createUrlTree(['/login']);
    }

    if (!user.username || !user.deviceId || !user.timestamp) {
      localStorage.removeItem('userSession');
      return router.createUrlTree(['/login']);
    }

    return true;

  } catch {

    localStorage.removeItem('userSession');
    return router.createUrlTree(['/login']);

  }

};