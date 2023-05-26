import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-show-id-card-details',
  templateUrl: './show-id-card-details.component.html',
  styleUrls: ['./show-id-card-details.component.css']
})
export class ShowIdCardDetailsComponent implements OnInit {
uid:any;
email:any;
date:any;
items:any;
name:any;
mobile:any;
image:any;
doj:any;
fuid:any;
profileurl: string = 'http://cdn.onlinewebfonts.com/svg/img_452489.png';
  constructor(public afa: AngularFireAuth, private fdb: AngularFirestore) {
    afa.user.subscribe(data => {
      // console.log('data-->');
      console.log(data);
      this.email = data?.email;

      this.uid = data?.uid;
      this.fuid = data?.displayName;
      this.image = data?.photoURL;
      this.date =new Date().getDate()+ "/"+new Date().getMonth()+ "/"+new Date().getFullYear()+ "  "+ new Date().getHours()+ ":" + new Date().getMinutes() + ":" + new Date().getSeconds()
      // let NewTime = hour + ":" + minuts + ":" + seconds
      console.log('<--data-->'); console.log(this.date); console.log('<--data-->');
      this.fdb.collection<any>('users').doc(this.uid).collection('kyc').doc('details').valueChanges().subscribe((doc: any) => { 
        if (doc!=undefined) {
          if (doc.profile!=undefined) {
            this.profileurl = doc.profile;
          }
        
        }
      });
      this.items = this.fdb.collection('users').doc(this.uid).valueChanges();
    this.items.subscribe((data:any) =>{
      console.log(data);
      this.name = data.fullName;
      this.mobile = data.mobNum;
      
      this.doj = new Date(data.joiningDate).toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' });;
    })
    })
   }

  ngOnInit(): void {
    
  }

}


// echo "# beforeHAckathon" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/Vaibhavnanne18/beforeHAckathon.git
// git push -u origin main