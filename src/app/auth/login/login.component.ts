import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  title = 'Login'
  isSignedIn = false

  form = {
    email: '',
    password: '',

  };

  constructor(public firebaseService: FirebaseService, private router: Router) { }
  ngOnInit() {
    if (localStorage.getItem('user') !== null) {
      this.isSignedIn = true
    } else {
      this.isSignedIn = false
    }
  }

  //  Login
  async onSignIn(email: string, password: string) {

    await this.firebaseService.signIn(email, password)
    if (this.firebaseService.isLoggedIn) {
      this.isSignedIn = true
      console.log(email, password);
      console.log(this.isSignedIn);
      this.router.navigate(['/'])
    }
  }
};
