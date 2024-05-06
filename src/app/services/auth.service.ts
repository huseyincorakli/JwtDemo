import { Injectable, inject } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Subject, firstValueFrom } from 'rxjs';
import { HttpServiceService } from './http-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
public $refreshToken = new Subject<boolean>
http = inject(HttpServiceService)

  constructor(private jwtHelper:JwtHelperService) {
    this.$refreshToken.subscribe((res:any)=>{
      this.getNewTokenByRefreshToken();
    })
    
   }
  identityCheck(){
    const token:string = localStorage.getItem('token');
     let decodedToken = this.jwtHelper.decodeToken(token);
    _roles =decodedToken.roles;
    let expired:boolean;
    try {
      expired= this.jwtHelper.isTokenExpired(token)
    } catch {
      expired=true;
    }
    _isAuthenticated= token!=null && !expired;

    
  }
  async getNewTokenByRefreshToken() {
    console.log("burada refresh token methodunu çağır ve yenile");
    
  }


  get isAuthenticated():boolean{
    console.log(_isAuthenticated);
    
    return _isAuthenticated;
  }

  get userRoles():any{
    return _roles;
  }

  
}
export let _isAuthenticated:boolean
export let _roles:any