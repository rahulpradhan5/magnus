import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Route, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userData: any[] = [];
  todayData: any[] = [];
  totalData: any[] = [];
  downlineCount: any;
  totalDataconleft: any;
  totalDataconright: any;
  totalleftpv: any;
  totalconfirmleftpv: any;
  totalrightpv: any;
  totalcomfirmrightpv: any;
  todayDataleftconfirmcount: any;
  todayDatarightconfirmcount: any;
  todayLeftcount: any;
  todayRightcount: any;
  todayRightcountPv: any;
  todayLeftcountPv: any;
  confirmtodayRightcountPv: any;
  confirmtodayLeftcountPv: any;
  ownPv: any;
  todayownPv: any;
  totalLeftcount: any;
  totalrightcount: any;
  startDate: any;
  endDate: any;
  rank: any;
  days:any;
  hours:any;
  minutes:any;
  seconds:any;
  remainingTime:any;
  ladate:any;
  uid?: string;
  email?: any;
  date?: string;
  userService: any;
  doExist: boolean = false;
 
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
  constructor(private fauth: AngularFireAuth, rout: Router, public fas: AngularFirestore, private http: HttpClient, public ActiveRoute: ActivatedRoute, public afa: AngularFireAuth) {
    afa.user.subscribe(data => {
      // console.log('data-->');
      // console.log(data);
      this.email = data?.email;

      this.uid = data?.uid;
      this.date =new Date().getDate()+ "/"+new Date().getMonth()+ "/"+new Date().getFullYear()+ "  "+ new Date().getHours()+ ":" + new Date().getMinutes() + ":" + new Date().getSeconds()
      // let NewTime = hour + ":" + minuts + ":" + seconds
      console.log('<--data-->'); console.log(this.date); console.log('<--data-->');
    })
  }

  ngOnInit(): void {
    this.fauth.user.subscribe(user=>{
      this.fas.collection<any>('users').doc(user?.uid).collection('kyc').doc('details').valueChanges().subscribe((doc: any) => {
     
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
    // const uid = 'ab00003';
    const uid = sessionStorage.getItem('firebaseUserId');
    this.http.get('http://moneysagaconsultancy.com/api/api/totaluserdata?user_id=' + uid)
      .subscribe((data: any) => {
        console.log(data
          );
        this.userData = data.allusers;
        this.todayDataleftconfirmcount = data.today_data_left_count_confirm;
        this.todayDatarightconfirmcount = data.today_data_left_count_confirm;
        this.totalData = data.total_details;
        this.todayLeftcount = data.today_left_count;
        this.todayRightcount = data.today_right_count;
        this.confirmtodayLeftcountPv = data.today_left_count_confirm_pv;
        this.confirmtodayRightcountPv = data.today_right_count_confirm_pv;
        this.totalDataconleft = data.total_details.comfirm_leftcount;
        this.totalDataconright = data.total_details.comfirm_rightcount;
        this.downlineCount = data.downline_count;
        this.totalleftpv = data.total_left_pv;
        this.totalrightpv = data.total_right_pv;
        this.totalconfirmleftpv = data.total_confirm_left_pv;
        this.totalcomfirmrightpv = data.total_confirm_right_pv;
        this.todayLeftcountPv = data?.today_left_count_pv;
        this.todayRightcountPv = data?.today_right_count_pv;
        this.ownPv = data.ownPv;
        this.todayownPv = data.TodayownPv;
        this.startDate = data?.subcription[0]?.start_date||'0000-00-00';
        this.endDate = data?.subcription[0]?.end_date||'0000-00-00';
        this.rank = data.rank;
        this.ladate = data.ldate;
        if(this.endDate != '' && this.endDate !='0000-00-00'){
          setInterval(() => {
            this.remainingTime = this.updateRemainingTime() ;
          }, 1000);
        }else{
          this.remainingTime = 'Life Time'
        }
        if (data.total_details['leftdata'] ) {
          this.totalLeftcount = data.total_details.leftdata.length;
        }else{
          this.totalLeftcount = 0;
        }
        if( data?.total_details['rightdata']){
          this.totalrightcount = data.total_details.rightdata.length;
        } else {
          this.totalrightcount = 0;
        }
        
        
        // Convert the time difference to days, hours, minutes, and seconds
       
        
      });
  }
  updateRemainingTime() {
    const timeDiff = new Date(this.endDate).getTime() - new Date().getTime();
    const days = Math.abs(Math.floor(timeDiff / (1000 * 60 * 60 * 24)));
    const hours = Math.abs(Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const minutes = Math.abs(Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60)));
    const seconds = Math.abs(Math.floor((timeDiff % (1000 * 60)) / 1000));
    return `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
    console.log(this.remainingTime);
  }

}
