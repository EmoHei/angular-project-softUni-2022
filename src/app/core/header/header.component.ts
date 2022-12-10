import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService} from 'src/app/services/auth.service';


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
  constructor(private authService: AuthService, private router: Router) { }


  get isLoggedIn() {
    return this.authService.isLoggedIn
  }

  logout() {
    this.authService.logout() //clear all cocies from the browser
    this.isLogout.emit()
    this.router.navigate(['/'])
  }

}

                                                                 

