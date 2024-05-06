import { isPlatformBrowser } from '@angular/common';
import { HttpErrorResponse, HttpInterceptorFn, HttpXhrBackend } from '@angular/common/http';
import { Inject, PLATFORM_ID, inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { AuthService } from './auth.service';

export const jwtInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  const platFormId= inject(PLATFORM_ID);
  const authService= inject(AuthService)
  let token ;
  if (isPlatformBrowser(platFormId)) {
    token = localStorage.getItem('token')
    console.log(token);
    
  }

  const newReq = req.clone({
    setHeaders:{
      Authorization : `Bearer ${token}`
    }
  })
  return next(newReq).pipe(catchError((error:HttpErrorResponse)=>{
   
    if (error.status) {
      authService.$refreshToken.next(true)
    }
    return throwError(error);
  }));
};
