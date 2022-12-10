import { Component, OnInit } from '@angular/core';
import { TourService } from 'src/app/services/tour.service';
import { ActivatedRoute, Router } from '@angular/router';
import {
  Firestore,
  doc,
  updateDoc,
  getDoc,

} from '@angular/fire/firestore';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  title = 'Edit'
  form: any
  tourId!: string
  // form = {
  //   tourName: '',
  //   tourPrice: '',
  //   tourDescription: '',
  //   tourImg: ''
  // }
  constructor(private firestore: Firestore, public tourService: TourService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {

      this.getDataBtId(params['id']);
      this.tourId = params['id']
    });
  }
  // getDataById
  getDataBtId(id: any) {
    const dbInstance = doc(this.firestore, 'tours', id);

    getDoc(dbInstance)
      .then((res) => {
        this.form = res.data();

      });
  }
  // Update

  updateData() {
    const dataToUpdate = doc(this.firestore, 'tours', this.tourId)
    updateDoc(dataToUpdate, this.form

    )
      .then(() => {
        alert('Data Updated - <Successful>')
        this.router.navigate(['/tour/all-tours'])
      })
      .catch((err => {
        alert(err.message)
      }))
  }
}




