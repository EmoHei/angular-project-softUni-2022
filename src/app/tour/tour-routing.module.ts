import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllToursComponent } from './all-tours/all-tours.component';
import { EditComponent } from './edit/edit.component';
import { NewTourComponent } from './new-tour/new-tour.component';
import { TourDetailComponent } from './tour-detail/tour-detail.component';


const routes: Routes = [
  {
    path: 'tour',
    children: [
      { path: 'all-tours', component: AllToursComponent, data: { title: 'All Tours' } },
      { path: 'new-tour', component: NewTourComponent, data: { title: 'New Tour' } },
      { path: 'edit/:id', component: EditComponent, data: { title: 'Edit' } },
      { path: 'tourDetails/:id', component: TourDetailComponent, data: { title: 'Details' } },
 

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TourRoutingModule { }
