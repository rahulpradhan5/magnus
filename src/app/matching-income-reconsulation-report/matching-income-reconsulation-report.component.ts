import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-matching-income-reconsulation-report',
  templateUrl: './matching-income-reconsulation-report.component.html',
  styleUrls: ['./matching-income-reconsulation-report.component.css']
})
export class MatchingIncomeReconsulationReportComponent implements OnInit {
pairincome:any;
uid:any;
  constructor(private afa:AngularFireAuth,private http: HttpClient,) { }

  ngOnInit(): void {
    this.afa.user.subscribe(data => {
      // console.log('data-->');
      // console.log(data);
      // this.email = data?.email;

      this.uid = data?.displayName;
      // this.date =new Date().getDate()+ "/"+new Date().getMonth()+ "/"+new Date().getFullYear()+ "  "+ new Date().getHours()+ ":" + new Date().getMinutes() + ":" + new Date().getSeconds()
      // let NewTime = hour + ":" + minuts + ":" + seconds
      // console.log('<--data-->'); console.log(this.date); console.log('<--data-->');
      this.http.get<any>('http://moneysagaconsultancy.com/api/api/totaluserdata?user_id='+this.uid).subscribe(response => {
        this.pairincome = response.pairincome;
                })
    })
    // const uid = sessionStorage.getItem('firebaseUserId');
   
  }

}
