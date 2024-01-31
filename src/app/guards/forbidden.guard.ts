import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const forbiddenGuard: CanActivateFn = (route, state) => {
  let router = inject(Router);
  let name = 'Mario'
  if (name == 'Pepe') {
    router.navigateByUrl('/');
    return false;
  }
  return true;
};
