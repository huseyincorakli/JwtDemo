import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Register } from '../../models/register';
import { HttpServiceService } from '../../services/http-service.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  template: `
    <form [formGroup]="frm" (ngSubmit)="register()">
      <input type="text" placeholder="Email" formControlName="email" />
      <input type="text" placeholder="Username" formControlName="userName" />
      <input type="text" placeholder="Fullname" formControlName="fullName" />
      <input
        type="password"
        autocomplete="on"
        placeholder="Password"
        formControlName="password"
      />
      <button>register</button>
    </form>
  `,
})
export class RegisterComponent {
  frm: FormGroup;
  http=inject(HttpServiceService)
  constructor(formBuilder: FormBuilder) {
    this.frm = formBuilder.group<Register>({
      email: '',
      userName: '',
      fullName: '',
      password: '',
    });
  }

  async register() {
    console.log(this.frm.value)
   var obs = this.http.post({
      action:'Register',controller:'Auth'
    },this.frm.value)
    await firstValueFrom (obs).then(data=>{
      console.log(data);
      
    }).catch(err=>{
      console.log(err.error);
    });
  }
}
// {
//   "email": "deneme@gmail.com",
//   "userName": "deneme1234",
//   "fullName": "abc",
//   "password": "123456aa"
// }
