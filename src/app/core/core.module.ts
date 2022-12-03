import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    PageNotFoundComponent,
    FooterComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],exports:[
    HeaderComponent,
  ]
})
export class CoreModule { }
