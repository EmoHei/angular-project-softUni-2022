import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  title = 'Register'
  isSignedIn = false
  form = {
    email: '',
    password: '',
    confirmPassword: ''
  };

  constructor(public firebaseService: FirebaseService, private router: Router) { }
  ngOnInit() {
    if (localStorage.getItem('user') !== null) {
      this.isSignedIn = true
    } else {
      this.isSignedIn = false
    }
  }
 

  // Register
  // handleRegister(value: any) {

  //   createUserWithEmailAndPassword(this.auth, value.email, value.password)

  //     .then((res: any) => {
  //       alert('Sign Up - <Successful>')

  //       this.router.navigate(['/'])
  //     })
  //     .catch((err) => {
  //       alert(err.message);
  //     })


  // }
  async onSignUp(email: string, password: string) {
    await this.firebaseService.signup(email, password)
    if (this.firebaseService.isLoggedIn) {
      this.isSignedIn = true
      console.log(email, password);
      console.log(this.isSignedIn);
      this.router.navigate(['/'])
    }
  }
};