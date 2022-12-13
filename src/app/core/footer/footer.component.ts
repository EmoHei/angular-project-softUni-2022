import { Component, EventEmitter,Output, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

    @Output() isLogout = new EventEmitter<void>()
  constructor(private router: Router, private authService:AuthService){}

   ngOnInit(): void {

  }
  get isLoggedIn() {
    return this.authService.isLoggedIn
  }

  logout() {
    this.authService.logout()
    this.isLogout.emit()
    this.router.navigate(['/'])
  }

}
