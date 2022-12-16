import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TourRoutingModule } from './tour-routing.module';
import { AllToursComponent } from './all-tours/all-tours.component';
import { NewTourComponent } from './new-tour/new-tour.component';

import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { SearchComponent } from './search/search.component';
import { FilterComponent } from './filter/filter.component';

@NgModule({
  declarations: [
    AllToursComponent,
    NewTourComponent,
    EditComponent,
    SearchComponent,
    FilterComponent
  ],
  imports: [
    CommonModule,
    TourRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class TourModule { }
