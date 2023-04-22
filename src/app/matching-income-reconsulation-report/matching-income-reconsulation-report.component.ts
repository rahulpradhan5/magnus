import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-matching-income-reconsulation-report',
  templateUrl: './matching-income-reconsulation-report.component.html',
  styleUrls: ['./matching-income-reconsulation-report.component.css']
})
export class MatchingIncomeReconsulationReportComponent implements OnInit {
pairincome:any;
uid:any;
searchTerm:any='';
filtereduserdata:any;
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
        this.filtereduserdata = this.pairincome;
                })
    })
    // const uid = sessionStorage.getItem('firebaseUserId');
   
  }
  filterData() {
    if (this.searchTerm == '') {
      this.filtereduserdata = this.pairincome;
      
    } else {
      this.filtereduserdata = this.pairincome.filter((user: any) => {
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
