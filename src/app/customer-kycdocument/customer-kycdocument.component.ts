import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-customer-kycdocument',
  templateUrl: './customer-kycdocument.component.html',
  styleUrls: ['./customer-kycdocument.component.css']
})
export class CustomerKYCDocumentComponent implements OnInit {
  userService: any;
  doExist: boolean = false;
  email: any;
  uid: any;
  password: string = '';
  docRef: any;
  updateObject: any;
  back_adhar_exist: boolean = false;
  back_adhar_exist_String: string = '';
  front_adhar_exist: boolean = false;
  front_adhar_exist_String: string = '';
  pancard_exist: boolean = false;
  pancard_exist_String: string = '';
  profile_exist: boolean = false;
  profile_exist_String: string = '';
  cancelled_check_exist: boolean = false;
  cancelled_check_exist_String: string = '';
  front_adhar_time?: string='To be Uploaded';
  back_adhar_time?: string='To be Uploaded';
  pancard_time?: string='To be Uploaded';
  profile_time?: string='To be Uploaded';
  cancelled_check_time?: string='To be Uploaded';
  front_adhar_status?: string='Pending';
  back_adhar_status?: string='Pending';
  pancard_status?: string='Pending';
  profile_status?: string='Pending';
  cancelled_check_status?: string='Pending' ;

  url_main: any = {};
  constructor(private storage: AngularFireStorage, private firestore: AngularFirestore, public auths: AngularFireAuth, private auth: AuthService) { }
  ngOnInit(): void {
    // this.uid = sessionStorage.getItem('firebaseUserId');
    this.auths.user.subscribe(user=>{
      this.firestore.collection<any>('users').doc(user?.uid).collection('kyc').doc('details').valueChanges().subscribe((doc: any) => {
     
        console.log( 'condition is '+this.doExist);
       
        if (doc!=undefined) {
          if (doc.front_adhar!=undefined) {
            this.front_adhar_exist = true;
            this.front_adhar_exist_String = doc.front_adhar;
            this.front_adhar_time=doc.front_adhar_time;
            this.front_adhar_status='CONFIRMED'
            //  console.log('url is inside ' + this.front_adhar_exist_String);
          }
          if (doc.back_adhar!=undefined) {
            this.back_adhar_exist = true;
            this.back_adhar_exist_String = doc.back_adhar;
            this.back_adhar_time=doc.back_adhar_time;
            this.back_adhar_status='CONFIRMED'
            // console.log('url is inside ' + this.back_adhar_exist_String);
          }
          if (doc.pancard!=undefined) {
            this.pancard_exist = true;
            this.pancard_exist_String = doc.pancard;
            this.pancard_time=doc.pancard_time;
            this.pancard_status='CONFIRMED'
            // console.log('url is inside ' + this.back_adhar_exist_String);
          }
          if (doc.profile!=undefined) {
            this.profile_exist = true;
            this.profile_exist_String = doc.profile;
            this.profile_time=doc.profile_time;
            this.profile_status='CONFIRMED'
            // console.log('url is inside ' + this.back_adhar_exist_String);
          }
          if (doc.cancelled_check!=undefined) {
            this.cancelled_check_exist = true;
            this.cancelled_check_exist_String = doc.cancelled_check;
            this.cancelled_check_time=doc.cancelled_check_time;
            this.cancelled_check_status='CONFIRMED'
            // console.log('url is inside ' + this.back_adhar_exist_String);
          }
          this.email = doc.data().email;

            // console.log(doc.data());
  
        }
        else {
          this.doExist = false;
        }
      });
    })
    if( this.back_adhar_exist && this.front_adhar_exist &&this.cancelled_check_exist && this.profile_exist && this.pancard_exist  ){
      this.doExist = true;
    }
    // this.docRef = this.firestore.collection<any>('users').doc(this.uid).collection('kyc').doc('details').get().subscribe((doc: any) => {
   
    // console.log('url is ' + this.back_adhar_exist_String);
  }

  uploadFrontAdhar(event:any) {
    this.uploadFile(event, "front_adhar", "front_adhar_time")
  }
  uploadBackAdhar(event: any) {
    this.uploadFile(event, "back_adhar", "back_adhar_time")
  }
  uploadPanCard(event: any) {
    this.uploadFile(event, "pancard", "pancard_time")
  }
  uploadProfile(event: any) {
    this.uploadFile(event, "profile", "profile_time")
  }
  uploadCancelledCheck(event: any) {
    this.uploadFile(event, "cancelled_check", "cancelled_check_time")
  }
  uploadFile(event: any, value: string, time: string) {
    const file = event.target.files[0];

    const filePath = `uploads/${new Date().getTime()}_${file.name}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    var month=new Date().getMonth()+1;
    task.snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe(url => {
          console.log('url is ' + url); // the download URL of the file
          this.auths.user.subscribe(user=>{
            this.firestore.collection('users').doc(user?.uid).collection('kyc').doc('details').set({ [value]: url, [time]:new Date().getDate() + "/" + [month] + "/" + new Date().getFullYear() + "  at  " + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() }, { merge: true })

          })
          console.log(this.uid);
          // this.firestore.collection('users').doc(this.uid).collection('kyc').doc('details').set({ "value":"url" }, { merge: true })
        });
      })
    ).subscribe();

  }
}
23