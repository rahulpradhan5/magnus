import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-check-epin',
  templateUrl: './check-epin.component.html',
  styleUrls: ['./check-epin.component.css']
})
export class CheckEpinComponent implements OnInit {
  firestore: AngularFirestore;
  phone_no: string = '';
  password: string = '';
  otp: string = '';
  otp_test: string = '';
  otp_verified: boolean = false;
  uid: any;
  userData: any;
  item: any;
  email: any;
  epin: any;
  mpin: any;
  constructor(private http: HttpClient, private auth: AuthService, fStore: AngularFirestore, public auths: AngularFireAuth, private storage: AngularFireStorage, private router: Router) {
    this.firestore = fStore;
  }

  ngOnInit(): void {
    this.auths.user.subscribe(data => {
      // console.log('data-->');
      // console.log(data);
      this.email = data?.email;

      this.uid = data?.displayName;
      // this.date =new Date().getDate()+ "/"+new Date().getMonth()+ "/"+new Date().getFullYear()+ "  "+ new Date().getHours()+ ":" + new Date().getMinutes() + ":" + new Date().getSeconds()
      // let NewTime = hour + ":" + minuts + ":" + seconds
      // console.log('<--data-->'); console.log(this.date); console.log('<--data-->');
    })
    // this.uid = 'ab00003';
    //  this.uid = sessionStorage.getItem('firebaseUserId');
  }

  checkPassword() {
    if (this.password === '') {
      alert('Please enter password');
      return;
    }
    this.auths.user.subscribe(data => {
      // console.log('data-->');
      // console.log(data);
      this.email = data?.email;

      this.uid = data?.displayName;
      // this.date =new Date().getDate()+ "/"+new Date().getMonth()+ "/"+new Date().getFullYear()+ "  "+ new Date().getHours()+ ":" + new Date().getMinutes() + ":" + new Date().getSeconds()
      // let NewTime = hour + ":" + minuts + ":" + seconds
      // console.log('<--data-->'); console.log(this.date); console.log('<--data-->');
      this.http.get('http://moneysagaconsultancy.com/api/api/getEpin?user_id=' + this.uid)
        .subscribe((data: any) => {
          if (data.data.length != 0) {
            this.mpin = data.data[0]['epin'];
          } else {
            this.mpin = 'undefined';
          }
          console.log(this.mpin);
          if (this.mpin == 'undefined') {
            const docRef = this.firestore.collection('users').doc(this.uid).valueChanges();
            docRef.subscribe((doc: any) => {
              if (doc != '') {
                // retrieve the password from the document
                this.email = doc.email;
                // verify the user's password
                console.log(this.email);
                this.auths.signInWithEmailAndPassword(this.email, this.password)
                  .then(userCredential => {
                    // password is correct
                    this.http.get('http://moneysagaconsultancy.com/api/api/generateEpin?user_id=' + this.uid)
                      .subscribe((data: any) => {
                        alert('your epin is=' + data.epin)
                      });
                  })
                  .catch(error => {
                    // password is incorrect or user doesn't exist
                    alert('password not same')
                  });
              } else {
                alert('data not exist');
              }
            });
          } else {
            alert('epin already generated = ' + this.mpin);
          }
        });
    })


  }

}

