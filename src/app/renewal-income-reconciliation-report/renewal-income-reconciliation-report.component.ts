import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-renewal-income-reconciliation-report',
  templateUrl: './renewal-income-reconciliation-report.component.html',
  styleUrls: ['./renewal-income-reconciliation-report.component.css']
})
export class RenewalIncomeReconciliationReportComponent implements OnInit {
renew:any;
filtereduserdata:any;
searchTerm:any='';
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
      this.filtereduserdata = this.renew;
            })
    })
   
  }
  filterData() {
    if (this.searchTerm == '') {
      this.filtereduserdata = this.renew;
      
    } else {
      this.filtereduserdata = this.renew.filter((user: any) => {
        let nameMatch = false;
        let idMatch = false;
        if (user.name && user.name.toLowerCase().includes(this.searchTerm.toLowerCase())) {
          nameMatch = true;
        }
        if (user.second_user && user.second_user.toString && user.second_user.toString().toLowerCase().includes(this.searchTerm.toLowerCase())) {
          idMatch = true;
        }
        return nameMatch || idMatch;
      });
    }
  }

  exportTableToExcel(tableId: string, fileName: string): void {
    const table = document.getElementById(tableId);
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(table);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, fileName + '.xlsx');
  }
}
