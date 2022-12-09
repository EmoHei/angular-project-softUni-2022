import { Injectable } from '@angular/core';
import { Auth, } from '@angular/fire/auth' // AngularFireAuth (before)
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  isLoggedIn = false;
  constructor(public firebaseAuth: Auth) { }
  // LOGIN
  async signIn(email: string, password: string) {
    await signInWithEmailAndPassword(this.firebaseAuth, email, password)
      .then(res => {
        this.isLoggedIn = true
        localStorage.setItem('user', JSON.stringify(res.user))
      })
      .catch((err) => {
        alert(err.message);
      })
  }
  // REGISTER
  async signup(email: string, password: string) {
    await createUserWithEmailAndPassword(this.firebaseAuth, email, password)
      .then(res => {
        this.isLoggedIn = true
        localStorage.setItem('user', JSON.stringify(res.user))
      })
      .catch((err) => {
        alert(err.message);
      })
  }

  // LOGOUT
  logout() {
    this.firebaseAuth.signOut()
    localStorage.removeItem('user')
    this.isLoggedIn = false
  }

  //Logout
  handleLogout() {
    this.isLoggedIn = false
  }

}
