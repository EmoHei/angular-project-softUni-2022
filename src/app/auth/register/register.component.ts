import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
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

  constructor(public authService: AuthService, private router: Router) { }
  ngOnInit() {
    if (localStorage.getItem('user') !== null) {
      this.isSignedIn = true
    } else {
      this.isSignedIn = false
    }
  }
 
  // Register
 
  async onSignUp(email: string, password: string) {
    await this.authService.signup(email, password)
    if (this.authService.isLoggedIn) {
      this.isSignedIn = true
      this.router.navigate(['/tour/all-tours'])
    }
  }
};