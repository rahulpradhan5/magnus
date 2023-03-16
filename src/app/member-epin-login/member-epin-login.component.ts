import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-member-epin-login',
  templateUrl: './member-epin-login.component.html',
  styleUrls: ['./member-epin-login.component.css']
})

export class MemberEpinLoginComponent implements OnInit {

  constructor(private http: HttpClient,private auth: AuthService, fStore: AngularFirestore, public auths: AngularFireAuth, private storage: AngularFireStorage, private router: Router) { }
  myId:any;
  mpin:any;
  revenue:any;
  payments:any;
  packag:any;
  packages: any = '';
  user: any = '';
  usdata:any = '';

  ngOnInit(): void {
    // const uid = 'ab00003';
      const uid = sessionStorage.getItem('firebaseUserId');
    this.myId = uid;
    this.http.get('http://moneysagaconsultancy.com/api/api/Package?user_id='+uid)
    .subscribe((data:any) => {
      console.log(data);
     if(data.epin == ''){
      this.mpin = 'not generated';
     }else{
      this.mpin = data.epin[0]['epin'];
     }
     if(data.revenue == ''){
      this.revenue = 0;
     }else{
      this.revenue = data.revenue[0]['revenue'];
     }
     this.payments = data.payments;
     console.log(this.payments);

     this.packag = data.package ;
     this.usdata = data.users;
    })
  }
  givepackage(event: Event){
    event.preventDefault();
    if(this.user === ''){
      alert('enter user id');
      return
    }
    if(this.packages === ''){
      alert('select any packages');
      return
    }
    if(this.mpin == 'not generated'){
      alert('Please Go check epin and genrate the epin');
      return
    }

    
    let myArray = this.packages.split(',');
    if(Number(myArray[1]) >= this.revenue){
      alert('you have low balance');
     
      return
    }
    if(Number(myArray[1]) >= this.revenue-this.revenue*10/100){
      alert('you have low balance');
     
      return
    }
    if(Number(myArray[1]) < this.revenue){
    this.http.get('http://moneysagaconsultancy.com/api/api/givePackage?user_id='+this.myId+'&guid='+this.user+'&package='+myArray[0])
    .subscribe( (data: any) => {
      alert(data.data);
    },
    (error: any) => {
      alert('Order placed successfully');
      location.reload(); // refresh the page on error
    }
    )
  }
   
  }
 

}
