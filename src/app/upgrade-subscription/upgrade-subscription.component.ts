import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-upgrade-subscription',
  templateUrl: './upgrade-subscription.component.html',
  styleUrls: ['./upgrade-subscription.component.css']
})
export class UpgradeSubscriptionComponent implements OnInit {
uid:any;
  constructor(private afa:AngularFireAuth,private http: HttpClient,) { 
   
  }
package:any;
datas:any;
  ngOnInit(): void {
    this.afa.user.subscribe(data => {
      // console.log('data-->');
      // console.log(data);
      // this.email = data?.email;

      this.uid = data?.displayName;
      // this.date =new Date().getDate()+ "/"+new Date().getMonth()+ "/"+new Date().getFullYear()+ "  "+ new Date().getHours()+ ":" + new Date().getMinutes() + ":" + new Date().getSeconds()
      // let NewTime = hour + ":" + minuts + ":" + seconds
      // console.log('<--data-->'); console.log(this.date); console.log('<--data-->');
      const uid = sessionStorage.getItem('firebaseUserId');
      this.http.get('http://moneysagaconsultancy.com/api/api/fetchRequest?user_id=' + this.uid)
      .subscribe((data: any) => {
        console.log(data);
        this.datas = data.data;
        })
    })
    
    
  }
  sendRequest(){
    const uid = sessionStorage.getItem('firebaseUserId');
    this.http.get('http://moneysagaconsultancy.com/api/api/sendRequest?user_id=' + this.uid+'&package='+this.package)
    .subscribe((data: any) => {
      alert(data.message);
      })
  }

}
