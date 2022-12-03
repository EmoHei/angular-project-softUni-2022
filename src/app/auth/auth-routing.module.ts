import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'auth/login', component: LoginComponent, data: { title: 'Login' } },
  { path: 'auth/register', component: RegisterComponent, data: { title: 'Register' } },
  { path: 'auth/logout', component: RegisterComponent, data: { title: 'Logout' } },
  { path: 'auth/profile', component: RegisterComponent, data: { title: 'Profile' } },
];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class AuthRoutingModule { }
  export const AuthRoutingModule = RouterModule.forChild(routes);