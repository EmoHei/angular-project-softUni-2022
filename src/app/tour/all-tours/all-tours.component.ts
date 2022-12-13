import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
import { formatCurrency } from '@angular/common';

@Component({
  selector: 'app-all-tours',
  templateUrl: './all-tours.component.html',
  styleUrls: ['./all-tours.component.scss']
})

export class AllToursComponent {
  title = 'All Tours';
  public data: any = [];
  public currentUserId: string;

  ReadMore: boolean = true;
  visible: boolean = false;

  constructor(public firestore: Firestore, public router: Router) {

    this.getData()
    const userData = localStorage.getItem('user')


    const user = JSON.parse(userData ?? "")
    this.currentUserId = user.uid

  }
  isCurrentUserOwner(ownerId: any) {
    return (this.currentUserId == ownerId)
  }

  // Get Data

  getData() {
    const dbInstance = collection(this.firestore, 'tours');

    getDocs(dbInstance)
      .then((res) => {
        console.log(res.docs.map((item) => {
          console.log(item.id);
          return { ...item.data(), id: item.id }
        }));

        this.data = [...res.docs.map((item) => {
          return { ...item.data(), id: item.id }

        })]
      })
  }

  // Delete Data
  deleteData(id: string) {
    const dataToDelete = doc(this.firestore, 'tours', id)
    deleteDoc(dataToDelete)
      .then(() => {
        alert('Data Deleted - <Successful>')
        this.getData()
      })
      .catch((err => {
        alert(err.message)
      }))
  }
  // Show/Hide
  onclick() {
    this.ReadMore = !this.ReadMore;
    this.visible = !this.visible;
  }
}
