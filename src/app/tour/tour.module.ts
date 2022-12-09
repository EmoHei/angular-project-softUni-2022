import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TourRoutingModule } from './tour-routing.module';
import { AllToursComponent } from './all-tours/all-tours.component';
import { NewTourComponent } from './new-tour/new-tour.component';
import { TourDetailsComponent } from './tour-details/tour-details.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AllToursComponent,
    NewTourComponent,
    TourDetailsComponent
  ],
  imports: [
    CommonModule,
    TourRoutingModule,
  MaterialModule,
    FormsModule
  ]
})
export class TourModule { }
