import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  template:`
  <a routerLink="home">Home</a> | 
  <a routerLink="login">Login</a> |
  <a routerLink="register">Register</a> |
  <a routerLink="dashboard">Dashboard</a> |
  <br>
  <router-outlet></router-outlet>
  `
})
export class AppComponent {
  

  
  
}
