import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService, _isAuthenticated } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  inject(AuthService).identityCheck();
  if(!_isAuthenticated){
    inject(Router).navigate(['/login']);
  }
  return true;
};
