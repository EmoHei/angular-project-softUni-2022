import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isSignedIn = false;

  @Output() isLogout = new EventEmitter<void>()

  ngOnInit(): void {

  }
  constructor(private firebaseService: FirebaseService, private router: Router) { }


  get isLoggedIn() {
    return this.firebaseService.isLoggedIn
  }

  logout() {
    this.firebaseService.logout() //clear all cocies from the browser
    this.isLogout.emit()
    this.router.navigate(['/'])
  }

}


// Header Template

// <nav class="navbar" >
//   <!--LOGO -->

//     <div class="logo" > TRAVEL - MARKET < /div>

//       < !--NAVIGATION MENU-- >

//         <ul class="nav-links" >
//           <!--USING CHECKBOX HACK-- >

//             <input type="checkbox" id = "checkbox_toggle" />

//               <label for= "checkbox_toggle" class= "hamburger" >&#9776; </label>

//                 < !--NAVIGATION MENUS-- >

//                   <div class="menu" >
//                     <!--Loged In Users-- >
//                       <ng-template #loggedInUser >
//                         <li><a routerLink="/" > Home < /a></li >
//                           <li><a routerLink="/auth/profile" > Profile < /a></li >
//                             <li><a (click)="logout()" > Logout < /a></li >
//                               <li><a routerLink="/tour/all-tours" > All - Tours < /a></li >
//                                 <li><a routerLink="/tour/new-tour" > New - Tours < /a></li >
//                                   <li><a routerLink="contact" > Contact < /a></li >
//                                     </ng-template>
//                                     < !--Guest -->
//                                       <ng-template #loggedOutUser >
//                                         <li><a routerLink="/" > Home < /a></li >
//                                           <li><a routerLink="/auth/login" > Login < /a></li >
//                                             <li><a routerLink="/auth/register" > Register < /a></li >
//                                               </ng-template>

//                                               < !-- < a > Tours < /a> -->
//                                               < li class="services" >
//                                                 <!--DROPDOWN MENU-- >

//                                                   <ul class="dropdown" >

//                                                     <ng-template #loggedOutUser >
//                                                       <li><a routerLink="/" > Home < /a></li >
//                                                         <li><a routerLink="/auth/profile" > Profile < /a></li >
//                                                           <li><a (click)="logout()" > Logout < /a></li >
//                                                             <li><a routerLink="/tour/all-tours" > All - Tours < /a></li >
//                                                               <li><a routerLink="/tour/new-tour" > New - Tours < /a></li >
//                                                                 <li><a routerLink="contact" > Contact < /a></li >
//                                                                   </ng-template>

//                                                                   < /ul>
//                                                                   < /li>
//                                                                   < /div>
//                                                                   < /ul>
//                                                                   < ng - container * ngTemplateOutlet="isLoggedIn ? loggedInUser : loggedOutUser" >
//                                                                     </ng-container>
//                                                                     < /nav>

