import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthService } from '../shared/auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customerinfo',
  templateUrl: './customerinfo.component.html',
  styleUrls: ['./customerinfo.component.css']
})


export class CustomerinfoComponent implements OnInit {
  userService: any;
  doExist: boolean = false;
  email: any;
  uid: any;
  password: string = '';
  docRef: any;
  updateObject: any;
  fullName: any = 'User';
  mobNum: number = 0;;
  state: any;
  country: any;
  street_name1: any;
  street_name2: any;
  pin_code: any;
  dob: any;
  gender: any;
  revenue: any;
  pancard_time?: string = 'To be Uploaded';
  pancard_no: string = '';
  gstin_code: string = '';;
  nominee_name: string = '';;
  nominee_relation: string = '';            //      [(ngModel)]="nominee_name"
  account_name: string = '';;
  account_no: string = '';;
  account_type: string = '';
  bank_name: string = '';;
  bank_address: string = '';
  bank_branch: string = '';
  nominee_dob_day: string = '';
  nominee_dob_month: string = '';
  nominee_dob_year: string = '';

  ifsc_code: string = '';;
  DateOfBirthDay: number = 1;
  DateOfBirthMonth: string = 'January';
  DateOfBirthYear: number = 2000;
  // email: any;
  // email: any;
  // email: any;
  // email: any;
  input: string = 'hidden';
  constructor(private http: HttpClient, private firestore: AngularFirestore, private auth: AuthService, public auths: AngularFireAuth, private storage: AngularFireStorage, private router: Router) { }
  ngOnInit(): void {
    this.auths.user.subscribe(user => {
      //   
      this.uid = user?.uid;
      // this.fullName=user?.fullName;
      console.log(user)
      this.firestore.collection<any>('users').doc(user?.uid).valueChanges().subscribe((doc) => {
        this.email = doc?.email;
        this.mobNum = doc?.mobNum;
        this.fullName = doc?.fullName;
        // console.log(this.fullName);        
        if (this.fullName == '') {
          this.input = 'display';
        }
      });


      this.firestore.collection<any>('users').doc(user?.uid).collection('kyc').doc('details').valueChanges().subscribe((doc: any) => {
        if (doc != undefined) {
          if (doc.pancard != undefined) {
            this.pancard_time = doc.pancard_time;

          }
        }
      });


      console.log('url is inside ' + this.pancard_time);
    })


    // this.docRef = this.firestore.collection<any>('users').doc(this.uid).collection('kyc').doc('details').get().subscribe((doc: any) => {

    // console.log('url is ' + this.back_adhar_exist_String);

    this.http.get('http://moneysagaconsultancy.com/api/api/Package?user_id=' + this.uid)
      .subscribe((data: any) => {

        if (data.revenue == '') {
          this.revenue = 0;
        } else {
          this.revenue = data.revenue[0]['revenue'];
        }

      })

    console.log(this.bank_branch);


  }

  register() {

    // if (this.email == '') {
    //   alert('Please enter email');
    //   return;
    // }

    // // if (this.password == '') {
    // //   alert('Please enter password');
    // //   return;
    // // }

    // if (this.fullName == '') {
    //   alert('Please enter name');
    //   return;
    // }

    // if (this.mobNum == 0) {
    //   alert('Please enter mobileNo');
    //   return;
    // }

    // if(this.invitationCode == '') {
    //   alert('Please enter invitationCode');
    //   return;
    // }

    this.firestore.collection('users').doc(this.uid)
      .set({
        "mobNum": this.mobNum, "gender": this.gender, "gstin_code": this.gstin_code, "nominee_name": this.nominee_name, "account_name": this.account_name, "account_no": this.account_no, "bank_name": this.bank_name, "bank_branch": this.bank_branch,
        "ifsc_code": this.ifsc_code, "account_type": this.account_type, "DateOfBirthDay": this.DateOfBirthDay, "DateOfBirthMonth": this.DateOfBirthMonth, "DateOfBirthYear": this.DateOfBirthYear, "pancard_no": this.pancard_no,
         "nominee_relation": this.nominee_relation,"nominee_dob_year": this.nominee_dob_year, "nominee_dob_day": this.nominee_dob_day, "nominee_dob_month": this.nominee_dob_month, "bank_address": this.bank_address, "street_name1": this.street_name1, "street_name2": this.street_name2, "country": this.country
        ,"state": this.state ,"pin_code": this.pin_code  
      }, { merge: true })
  }
}
