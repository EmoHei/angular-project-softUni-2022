// import { Injectable } from '@angular/core'; //
// import { Router } from '@angular/router'
// import { Auth, } from '@angular/fire/auth'
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

// @Injectable({
//     providedIn: 'root'
// })
// export class FirebaseService {

//     isLoggedIn = false;
//     constructor(public firebaseAuth: Auth, private router: Router) { }

//     // Register old
//     // handleRegister(value: any) {

//     //    createUserWithEmailAndPassword(this.auth, value.email, value.password)

//     //         .then((res: any) => {
//     //             alert('Sign Up - <Successful>')

//     //             this.router.navigate(['/'])
//     //         })
//     //         .catch((err) => {
//     //             alert(err.message);
//     //         })
//     // }

//     // Rgister New

//     async handleRegister(value: any) {

//         await createUserWithEmailAndPassword(this.firebaseAuth, value.email, value.password)

//             .then((res: any) => {
//                 this.isLoggedIn = true
//                 localStorage.setItem('user', JSON.stringify(res.user))
//                 this.router.navigate(['/']) 
//                 alert('Sign Up - <Successful>')
//             })
//             .catch((err) => {
//                 alert(err.message);
//             })
//     }
//     // LOGIN old
//     // handleLogin(value: any) {

//     //     signInWithEmailAndPassword(this.auth, value.email, value.password)
//     //         .then((response: any) => {
//     //             localStorage.setItem('token', 'true')

//     //             alert('Sign In - <Successful>')

//     //             this.router.navigate(['/'])
//     //         })
//     //         .catch((err) => {
//     //             alert(err.message);
//     //         })

//     // }
//     //Login new
//     handleLogin(value: any) {

//         signInWithEmailAndPassword(this.firebaseAuth, value.email, value.password)
//             .then((res: any) => {
//                 this.isLoggedIn = true
//                 localStorage.setItem('user', JSON.stringify(res.user))

//                 alert('Sign In - <Successful>')

//                 this.router.navigate(['/'])
//             })
//             .catch((err) => {
//                 alert(err.message);
//             })

//     }

    
//    // Logout old
//     // logout() {
//     //     this.auth.signOut().then(() => {
//     //         alert('Logout')
//     //         localStorage.removeItem('token')
//     //         this.router.navigate(['/'])
//     //     })
//     // }
//     // LOGOUT
//     logout() {
//         this.firebaseAuth.signOut()
//         localStorage.removeItem('user')
//         this.isLoggedIn = false
//     }

// }
