import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-renewal-details',
  templateUrl: './renewal-details.component.html',
  styleUrls: ['./renewal-details.component.css']
})
export class RenewalDetailsComponent implements OnInit {
data:any;
package:any;
myId:any;
  constructor( private auths :AngularFireAuth,private http: HttpClient,) { 
   
  }

  ngOnInit(): void {
    this.auths.user.subscribe(data => {
      // console.log('data-->');
      // console.log(data);
      // this.email = data?.email;

      this.myId = data?.displayName;
      // this.date =new Date().getDate()+ "/"+new Date().getMonth()+ "/"+new Date().getFullYear()+ "  "+ new Date().getHours()+ ":" + new Date().getMinutes() + ":" + new Date().getSeconds()
      // let NewTime = hour + ":" + minuts + ":" + seconds
      // console.log('<--data-->'); console.log(this.date); console.log('<--data-->');
      this.http.get('http://moneysagaconsultancy.com/api/api/fetchRenwal?user_id=' + this.myId)
      .subscribe((data: any) => {
        console.log(data
          );
          this.data = data.data;
        })
    })
    // const uid = sessionStorage.getItem('firebaseUserId');
   
  }

  renew(){
    // const uid = sessionStorage.getItem('firebaseUserId');
    this.http.get('http://moneysagaconsultancy.com/api/api/insertamount?user_id=' + this.myId+'&package='+this.package)
      .subscribe((data: any) => {
        console.log(data
          );
         
        })
  }

}
