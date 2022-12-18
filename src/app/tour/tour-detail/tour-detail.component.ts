import { Component, } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TourService } from 'src/app/services/tour.service';
import {
  Firestore,
  collection,
  getDocs,
  doc,
  updateDoc,
  deleteDoc
} from '@angular/fire/firestore';
import { getDoc } from 'firebase/firestore';

@Component({
  selector: 'app-tour-detail',
  templateUrl: './tour-detail.component.html',
  styleUrls: ['./tour-detail.component.scss']
})
export class TourDetailComponent {
  public title = 'Details';
  public data: any = [];
  public currentUserId: string;
  public ReadMore: boolean = true;
  public visible: boolean = false;
  public form: any;
  public tourId!: string;
  public tour: any;

  constructor(private router:Router, private firestore: Firestore, private route: ActivatedRoute) {
    this.getData()
    const userData = localStorage.getItem('user')
    const user = JSON.parse(userData ?? "")
    this.currentUserId = user.uid
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getDataById(params['id']);
      this.tourId = params['id']
    });
  }
  // Get Data By Id
  getDataById(id: any) {
    const dbInstance = doc(this.firestore, 'tours', id);

    getDoc(dbInstance)
      .then((res) => {
        this.form = res.data();

      });
  }
  // Show/Hide
  onclick() {
    this.ReadMore = !this.ReadMore;
    this.visible = !this.visible;
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
  //Update
  updateData() {
    const dataToUpdate = doc(this.firestore, 'tours', this.tourId)
    updateDoc(dataToUpdate, this.form

    )
      .then(() => {
        this.router.navigate(['/tour/all-tours'])
      })
      .catch((err => {
        alert(err.message)
      }))
  }
  // Delete 
  deleteData(id: string) {
    const dataToDelete = doc(this.firestore, 'tours', id)
    deleteDoc(dataToDelete)
      .then(() => {
        this.getData()
        this.router.navigate(['/tour/all-tours'])
      })
      .catch((err => {
        alert(err.message)
      }))
  }

}
