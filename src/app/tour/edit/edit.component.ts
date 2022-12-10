import { Component } from '@angular/core';
import { TourService } from 'src/app/services/tour.service';
import {
  Firestore,
  collection,
  // for get
  getDocs,
  // for update
  doc,
  updateDoc,
  // for delete
  deleteDoc

} from '@angular/fire/firestore';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  title = 'Edit'
  form = {
    tourName: '',
    tourPrice: '',
    tourDescription: '',
    tourImg: ''
  }
  constructor(private firestore: Firestore, tourService:TourService) {
  
   }
  // Update


  

}
