import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-renewal-income-reconciliation-report',
  templateUrl: './renewal-income-reconciliation-report.component.html',
  styleUrls: ['./renewal-income-reconciliation-report.component.css']
})
export class RenewalIncomeReconciliationReportComponent implements OnInit {
renew:any;
myId:any;
  constructor(private auths:AngularFireAuth,private http: HttpClient,) {
    
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
      this.http.get<any>('http://moneysagaconsultancy.com/api/api/totaluserdata?user_id='+this.myId).subscribe(response => {

      this.renew = response.renewalincome
            })
    })
   
  }

}
