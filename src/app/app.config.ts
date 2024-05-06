import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { HttpServiceService } from './services/http-service.service';
import { JwtModule } from '@auth0/angular-jwt';
import { jwtInterceptorInterceptor } from './services/jwt-interceptor.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withInterceptors([jwtInterceptorInterceptor])),
    HttpServiceService,
    importProvidersFrom( JwtModule.forRoot({
      config:{
        tokenGetter:()=>localStorage.getItem('token'),
        allowedDomains:['localhost:5128']
      }
    })),
    {provide:'baseUrl',useValue:'http://localhost:5182/api',multi:true},
    
  ],
};
