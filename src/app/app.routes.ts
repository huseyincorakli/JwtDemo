import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',loadComponent:()=>import('./pages/home/home.component').then(s=>s.HomeComponent)},
    {path:'login',loadComponent:()=>import('./pages/login/login.component').then(s=>s.LoginComponent)},
    {path:'register',loadComponent:()=>import('./pages/register/register.component').then(s=>s.RegisterComponent)},
    {path:'dashboard',loadComponent:()=>import('./pages/dashboard/dashboard.component').then(s=>s.DashboardComponent),canActivate:[authGuard]},
];
