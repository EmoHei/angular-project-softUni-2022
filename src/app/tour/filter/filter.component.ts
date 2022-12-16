import { Component,  EventEmitter,  Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {

  constructor(){}
  
  @Input() allTours: number = 0;
  @Input() dailyTours: number = 0;
  @Input() cityTours: number = 0;

  selectedRadioButtonValue: string = 'allTours'

  @Output()
filterRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();

  onRadioButtonSelectionChanged(){
   this.filterRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);

    
  }
}
