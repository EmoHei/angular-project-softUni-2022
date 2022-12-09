import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivationStart, Router } from '@angular/router';
import { filter, map } from 'rxjs';

// TODO - Move to Auth and delete
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from '@angular/fire/auth'
// ===========END AUTH=================

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';
  //TODO Remove Auth to Auth
  constructor(private router: Router, private pageTitle: Title, public auth: Auth){

    this.router.events.pipe(
      filter((e): e is ActivationStart => e instanceof ActivationStart),
      map(e => e.snapshot.data?.['title']),
      filter((d) => !!d)
    ).subscribe((pageTitle) => {
      this.pageTitle.setTitle(pageTitle);
    });
  }

  // Auth
  //Register
  // handleRegister(value: any) {

  //   createUserWithEmailAndPassword(this.auth, value.email, value.password)
  //     .then((response: any) => {
  //       alert('Sign Up - <Successful>')
  //       console.log(response.user);

  //     })
  //     .catch((err) => {
  //       alert(err.message);
  //     })
  // }

  // Login
  // handleLogin(value: any) {

  //   signInWithEmailAndPassword(this.auth, value.email, value.password)
  //     .then((response: any) => {
  //       alert('Sign In - <Successful>')
  //       console.log(response.user);

  //     })
  //     .catch((err) => {
  //       alert(err.message);
  //     })
  // }
}
