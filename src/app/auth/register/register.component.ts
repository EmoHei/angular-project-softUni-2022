import { Component, OnInit } from '@angular/core';
import {Auth, createUserWithEmailAndPassword} from '@angular/fire/auth'
import { Router } from '@angular/router';
  
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  title = 'Register'

  form = {
    email: '',
    password: '',
   confirmPassword:''
  };
 
  constructor(public auth: Auth, private router: Router) { }

  ngOnInit(): void { }
  
  // Register
  handleRegister(value: any) {

    createUserWithEmailAndPassword(this.auth, value.email, value.password )
    
      .then((res: any) => {
        alert('Sign Up - <Successful>')
        this.router.navigate(['/'])
      })
      .catch((err) => {
        alert(err.message);
      })
  }
};