import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
  
  ],
  imports: [
     AuthRoutingModule,
     CommonModule,
    FormsModule,
    MaterialModule, 
  ]
})
export class AuthModule { }
