import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { Auth } from '@angular/fire/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';




// @Injectable({
//   providedIn: 'root'import { Component } from '@angular/core';
//   import { Injectable } from '@angular/core';
//   import { Routes, RouterModule, Router } from '@angular/router';


//   export class AuthenticationService  {

// }

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthenticationService {

//   constructor(private fireauth: AngularFireAuth, private router: Router) { }
//   // Login
//   loginUser(email: string, password: string) {
//     this.fireauth.signInWithEmailAndPassword(email, password).then(() => {
//       localStorage.setItem('token', 'true')
//       this.router.navigate(['/home'])
//     }, err => {
//       alert('Somethig went wrong');
//       this.router.navigate(['/login']);
//     })
//   }

//   // Register
//   registerUser(email: string, password: string) {
//     this.fireauth.createUserWithEmailAndPassword(email, password).then(() => {
//       alert('Registration Successful');
//       this.router.navigate(['/login']);

//     }, err => {
//       alert(err.message);
//       this.router.navigate(['/register']);
//     })
//   }

//   logout() {
//     this.fireauth.signOut().then(() => {
//       localStorage.removeItem('token');
//       this.router.navigate(['/login'])
//     }, err => {
//       alert(err.message)
//     })
//   }
// }
// })
// export class AuthenticationService {

//   constructor(public auth: Auth, public router: Router) { }
//   // Login
//   loginUser(email: string, password: string) {
//     signInWithEmailAndPassword(this.a email, password).then(() => {
//       localStorage.setItem('token', 'true')
//       this.router.navigate(['/home'])
//     }, err => {
//       alert('Somethig went wrong');
//       this.router.navigate(['/login']);
//     })
//   }

//   // Register
//   registerUser(email: string, password: string) {
//     this.fireauth.createUserWithEmailAndPassword(email, password).then(() => {
//       alert('Registration Successful');
//       this.router.navigate(['/login']);

//     }, err => {
//       alert(err.message);
//       this.router.navigate(['/register']);
//     })
//   }

//   logout() {
//     this.fireauth.signOut().then(() => {
//       localStorage.removeItem('token');
//       this.router.navigate(['/login'])
//     }, err => {
//       alert(err.message)
//     })
//   }
// }