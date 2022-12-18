import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Firestore, collection, getDocs, doc, deleteDoc } from '@angular/fire/firestore';
import { TourService } from 'src/app/services/tour.service';

@Component({
  selector: 'app-all-tours',
  templateUrl: './all-tours.component.html',
  styleUrls: ['./all-tours.component.scss']
})

export class AllToursComponent {
  public title = 'All Tours';
  public data: any = [];
  public currentUserId: string;
  public ReadMore: boolean = true;
  public visible: boolean = false;

  constructor(public firestore: Firestore, public router: Router, public service:TourService ) {

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
        this.data = [...res.docs.map((item) => {
          return { ...item.data(), id: item.id }
        })]
      })
  }

  // Delete 
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
  Filter
  getTotalTours() {
    return this.data.length;
  }


  getDailyTours() {
    return this.data.filter(tour => tour.category === 'Daily Tour').length;

  }
  getCityTours() {
    return this.data.filter(tour => tour.category === 'City Tour').length;
  }

  toursCountRadioButton: string = 'allTours';

  onFilterRadioButtonChanged(data: string) {
    this.toursCountRadioButton = data;
  }

  //  Search

  searchText: string = '';
  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
  }

}
