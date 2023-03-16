import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-welcome-letter-details',
  templateUrl: './welcome-letter-details.component.html',
  styleUrls: ['./welcome-letter-details.component.css']
})
export class WelcomeLetterDetailsComponent implements OnInit {
  uid:any;
  email:any;
  date:any;
  items:any;
  name:any;
  mobile:any;
  image:any;
  doj:any;
    constructor(public afa: AngularFireAuth, private fdb: AngularFirestore) {
      afa.user.subscribe(data => {
        // console.log('data-->');
        console.log(data);
        this.email = data?.email;
  
        this.uid = data?.uid;
        this.image = data?.photoURL;
        this.date =new Date().getDate()+ "/"+new Date().getMonth()+ "/"+new Date().getFullYear()+ "  "+ new Date().getHours()+ ":" + new Date().getMinutes() + ":" + new Date().getSeconds()
        // let NewTime = hour + ":" + minuts + ":" + seconds
        console.log('<--data-->'); console.log(this.date); console.log('<--data-->');
        this.items = this.fdb.collection('users').doc(this.uid).valueChanges();
      this.items.subscribe((data:any) =>{
        console.log(data);
        this.name = data.fullName;
        this.mobile = data.mobNum;
        this.doj = data.joiningDate;
      })
      })
     }

  ngOnInit(): void {
  }

}
