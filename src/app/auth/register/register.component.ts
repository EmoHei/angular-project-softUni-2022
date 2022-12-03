import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
// Register
export class RegisterComponent implements OnInit {
  title = 'Register'

  email: string = '';
  password: string = '';

  registerForm!: FormGroup
  constructor() { }

  ngOnInit(): void {
  }
  // register() {
  //   if (this.email == '') {
  //     alert('Please enter email');
  //     return;
  //   }
  //   if (this.password == '') {
  //     alert('Please enter password');
  //     return;
  //   }
  //   this.auth.registerUser(this.email, this.password);
  //   this.email = '';
  //   this.password = '';
  // }

}