import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  // for create
  addDoc,
  Firestore,
  collection,
  // for get
  getDocs,
  // for update
  doc,
  updateDoc,
  // for delete
  deleteDoc

} from '@angular/fire/firestore'
@Component({
  selector: 'app-new-tour',
  templateUrl: './new-tour.component.html',
  styleUrls: ['./new-tour.component.scss']
})

export class NewTourComponent {

  title = 'Add Tour';
  public data: any = [];

  form = {
    tourName: '',
    // tourPrice: '',
    // tourImg: '',
    tourDescription:'',
    // ownerId:''
  };
  constructor(public firestore: Firestore,public router:Router) { }
  addData(value: any) {

    const dbInstance = collection(this.firestore, 'tours'); // "tours" is the name of collection in Firebase
    addDoc(dbInstance, value)
      .then(() => {
        alert('Data sending - <Successful>')
        console.log(value);
        this.router.navigate(['/tour/all-tours'])
      })
      .catch((err) => {
        alert(err.message)
      })
  }
}
