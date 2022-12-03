import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { ProfileComponent } from './profile/profile.component';
import { MaterialModule } from '../material/material.module';




@NgModule({
  declarations: [

    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    ProfileComponent
  ],
  imports: [
     AuthRoutingModule,
     CommonModule,
    MaterialModule, 
   
   
   

  ]
})
export class AuthModule { }
