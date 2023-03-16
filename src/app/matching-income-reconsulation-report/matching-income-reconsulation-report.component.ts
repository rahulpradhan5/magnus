import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-matching-income-reconsulation-report',
  templateUrl: './matching-income-reconsulation-report.component.html',
  styleUrls: ['./matching-income-reconsulation-report.component.css']
})
export class MatchingIncomeReconsulationReportComponent implements OnInit {
pairincome:any;
  constructor(private http: HttpClient,) { }

  ngOnInit(): void {
    const uid = sessionStorage.getItem('firebaseUserId');
    this.http.get<any>('http://moneysagaconsultancy.com/api/api/totaluserdata?user_id='+uid).subscribe(response => {
    this.pairincome = response.pairincome;
            })
  }

}
