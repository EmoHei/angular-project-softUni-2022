
import { Injectable } from '@angular/core';


import { Routes, RouterModule, Router } from '@angular/router';
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
