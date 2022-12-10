import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


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

  constructor(public authService: AuthService, private router: Router) { }
  ngOnInit() {
    if (localStorage.getItem('user') !== null) {
      this.isSignedIn = true
    } else {
      this.isSignedIn = false
    }
  }

  //  Login
  async onSignIn(email: string, password: string) {

    await this.authService.signIn(email, password)
    if (this.authService.isLoggedIn) {
      this.isSignedIn = true
      console.log(email, password);
      console.log(this.isSignedIn);
      this.router.navigate(['/tour/all-tours'])
    }
  }
};
