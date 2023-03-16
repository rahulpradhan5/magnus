import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-renewal-income-reconciliation-report',
  templateUrl: './renewal-income-reconciliation-report.component.html',
  styleUrls: ['./renewal-income-reconciliation-report.component.css']
})
export class RenewalIncomeReconciliationReportComponent implements OnInit {
renew:any;
  constructor(private http: HttpClient,) { }
  
  ngOnInit(): void {
    const uid = sessionStorage.getItem('firebaseUserId');
    this.http.get<any>('http://moneysagaconsultancy.com/api/api/totaluserdata?user_id='+uid).subscribe(response => {

this.renew = response.renewalincome
      })
  }

}
