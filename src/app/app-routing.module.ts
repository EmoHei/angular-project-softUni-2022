import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './core/contact/contact.component';
import { HomeComponent } from './core/home/home.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

const routes: Routes = [

  { path: '', pathMatch: 'full', component: HomeComponent, data: { title: 'Home' } },
  { path: 'contact',  component: ContactComponent, data: { title: 'Contact' } },
  { path: 'not-found', component: PageNotFoundComponent, data: { title: 'Not Found' } },
  { path: '**', redirectTo:'/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
