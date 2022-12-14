import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  getDocs,
  doc,
  updateDoc,
  deleteDoc

} from '@angular/fire/firestore';
import { getDoc } from 'firebase/firestore';
@Injectable({
  providedIn: 'root'
})
export class TourService {
  public data: any = [];

  form: any
  tourId!: string
  constructor(public firestore: Firestore) {
    this.getData()
  }

  // Get Data

  getData() {
    const dbInstance = collection(this.firestore, 'tours');
    getDocs(dbInstance)
      .then((res) => {
        console.log(res.docs.map((item) => {
          return { ...item.data(), id: item.id }
        }));

        this.data = [...res.docs.map((item) => {
          return { ...item.data(), id: item.id }

        })]
      })
  }

  // Update

  updateData(id: string) {
    const dataToUpdate = doc(this.firestore, 'tours', id)
    updateDoc(dataToUpdate, {

      tourName: '',
      tourPrice: '',
    })
      .then(() => {
        alert('Data Updated - <Successful>')
        this.getData() // returns the new data again
      })
      .catch((err => {
        alert(err.message)
      }))
    this.getData()
  }

  // Delete Data
  deleteData(id: string) {
    const dataToDelete = doc(this.firestore, 'tours', id)
    deleteDoc(dataToDelete)
      .then(() => {
        alert('Data Deleted - <Successful>')
        this.getData() // returns the new data again
      })
      .catch((err => {
        alert(err.message)
      }))
  }

  // getDataById
  getDataBtId(id: any) {
    const dbInstance = doc(this.firestore, 'tours', id);

    getDoc(dbInstance)
      .then((res) => {
        this.form = res.data();

      });
  }
}
