import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Login } from '../../models/login';
import { HttpServiceService } from '../../services/http-service.service';
import { firstValueFrom } from 'rxjs';
import { AuthService, _isAuthenticated } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  template:`
  <form [formGroup]="lgnFrm" (ngSubmit)="signIn()">
  Email: <br>
  <input type="text" formControlName="userNameOrEmail"> <br>
  Password: <br>
  <input type="password" formControlName="password" autocomplete="on">
  <br>
  <button>login</button>
  </form>
  `
})
export class LoginComponent {
lgnFrm:FormGroup
http= inject(HttpServiceService)
authService= inject(AuthService);
constructor(formBuilder:FormBuilder){

  
this.lgnFrm= formBuilder.group<Login>({
userNameOrEmail:"",
password:""
})
}
signIn(){
  
 var obs= this.http.post({
    controller:'Auth',
    action:'Login'
  },this.lgnFrm.value)
  firstValueFrom(obs).then((data:any)=>{
    localStorage.clear();
    localStorage.setItem('token',data.token)
    localStorage.setItem('refreshToken',data.refreshToken)
    
  }
  ).catch(err=>{
    console.log(err);
    
  })
}
}
