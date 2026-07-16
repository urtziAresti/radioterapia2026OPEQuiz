import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const adminGuard: CanActivateFn = () => {
  const router = inject(Router);

  const session = localStorage.getItem('userSession');

  if (!session) {
    router.navigate(['/login']);
    return false;
  }

  try {
    const user = JSON.parse(session);

    if (user.username === 'ADMIN') {
      return true;
    }
  } catch {}

  router.navigate(['/']);
  return false;
};