import { Component, } from '@angular/core';
import {  Auth, signInWithEmailAndPassword} from '@angular/fire/auth'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
}) 
 
export class LoginComponent {
  title = 'Login'

   email: string = '';
   password: string = '';

  constructor(public auth: Auth, private router: Router) {}
  
  // LOGIN
  handleLogin(value: any) {

    signInWithEmailAndPassword(this.auth, value.email, value.password)
      .then((response: any) => {
        alert('Sign In - <Successful>')
        this.router.navigate(['/'])
        // console.log(response.user);
      })
      .catch((err) => {
        alert(err.message);
      })
  }
};
