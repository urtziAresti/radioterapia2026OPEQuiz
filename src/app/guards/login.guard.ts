import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const loginGuard: CanActivateFn = () => {
  const router = inject(Router);

  const session = localStorage.getItem('userSession');

  if (session) {
    return router.createUrlTree(['/welcome']);
  }

  return true;
};