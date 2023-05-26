import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-rank-qualifiers-report',
  templateUrl: './rank-qualifiers-report.component.html',
  styleUrls: ['./rank-qualifiers-report.component.css']
})
export class RankQualifiersReportComponent implements OnInit {
  email:any;
  uid:any;
  date:any;
  ranks:any;
  filtereduserdata:any;
  current:any;
  constructor(private http: HttpClient,private afa : AngularFireAuth) { 
   
  }
  ngOnInit(): void {
    this.afa.user.subscribe(data => {
      // console.log('data-->');
      // console.log(data);
      this.email = data?.email;

      this.uid = data?.displayName;
      this.date =new Date().getDate()+ "/"+new Date().getMonth()+ "/"+new Date().getFullYear()+ "  "+ new Date().getHours()+ ":" + new Date().getMinutes() + ":" + new Date().getSeconds()
      // let NewTime = hour + ":" + minuts + ":" + seconds
      console.log('<--data-->'); console.log(this.date); console.log('<--data-->');
      this.http.get('http://moneysagaconsultancy.com/api/api/rank?user_id='+this.uid)
      .subscribe((datas:any) => {
        this.ranks=datas.data;
        this.current=datas.current_rank[0];
        this.filtereduserdata = this.ranks;
      });
    })
  }

}
