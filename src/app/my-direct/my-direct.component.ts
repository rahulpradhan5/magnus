import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { collection } from '@firebase/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-my-direct',
  templateUrl: './my-direct.component.html',
  styleUrls: ['./my-direct.component.css']
})
export class MyDirectComponent implements OnInit {

  constructor(private auths: AngularFireAuth, private http: HttpClient) { }
  apiresponse: any;
  leftdata: any;
  rightdata: any;
  myId: any;
  Package: any = "";
  startDate: any = "";
  endDate: any = "";
  position: any = "";
  filterData: any;
  ngOnInit(): void {
    //  const uid = 'ab00003';
    this.auths.user.subscribe(data => {
      // console.log('data-->');
      // console.log(data);
      // this.email = data?.email;

      this.myId = data?.displayName;
      // this.date =new Date().getDate()+ "/"+new Date().getMonth()+ "/"+new Date().getFullYear()+ "  "+ new Date().getHours()+ ":" + new Date().getMinutes() + ":" + new Date().getSeconds()
      // let NewTime = hour + ":" + minuts + ":" + seconds
      // console.log('<--data-->'); console.log(this.date); console.log('<--data-->');
      this.http.get('http://moneysagaconsultancy.com/api/api/direct?user_id=' + this.myId)
        .subscribe((datas: any) => {
          this.apiresponse = datas.data;
          this.filterData = this.apiresponse;
          console.log(this.apiresponse);
        });
    })
    const uid = sessionStorage.getItem('firebaseUserId');

  }

  exportTableToExcel(tableId: string, fileName: string): void {
    const table = document.getElementById(tableId);
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(table);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, fileName + '.xlsx');
  }

  filters() {
    if (this.Package === '' && this.startDate === '' && this.endDate === '' && this.position === '') {
      this.filterData = this.apiresponse;
    } else {
      this.filterData = this.apiresponse.filter((user: any) => {
        let positionMatch = true;
        let dateMatch = true;
        let packageMatch = true;

        // Filter by position
        if (this.position !== '' && user.position !== this.position) {
          positionMatch = false;
        }

        // Filter by date range
        if (this.startDate !== '' && this.endDate !== '') {
          const startDate = new Date(this.startDate);
          const endDate = new Date(this.endDate);
          const createdAt = new Date(user.created_at);
          if (createdAt < startDate || createdAt > endDate) {
            dateMatch = false;
          }
        }

        // Filter by package
        if (this.Package !== '') {
          const packageNumber = parseInt(user.package);
          if (!isNaN(packageNumber) && !this.Package.includes(packageNumber)) {
            packageMatch = false;
          }
        }

        return positionMatch && dateMatch && packageMatch;
      });
    }

    console.log(this.filterData);
  }


}
