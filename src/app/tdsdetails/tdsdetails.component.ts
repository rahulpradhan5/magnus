import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-tdsdetails',
  templateUrl: './tdsdetails.component.html',
  styleUrls: ['./tdsdetails.component.css']
})
export class TDSDetailsComponent implements OnInit {
  uid: any;
  email: any;
  date: any;
  commisiondata: any[] = [];
  searchTerm: any = '';
  filtereduserdata: any[] = [];
  Package: any = "";
  startDate: any = "";
  endDate: any = "";
  position: any = "";
  constructor(private http: HttpClient, private afa: AngularFireAuth) {

  }

  ngOnInit() {
    this.afa.user.subscribe(data => {
      // console.log('data-->');
      // console.log(data);
      this.email = data?.email;

      this.uid = data?.displayName;
      this.date = new Date().getDate() + "/" + new Date().getMonth() + "/" + new Date().getFullYear() + "  " + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds()
      // let NewTime = hour + ":" + minuts + ":" + seconds
      console.log('<--data-->'); console.log(this.date); console.log('<--data-->');
      this.http.get('http://moneysagaconsultancy.com/api/api/totaluserdata?user_id=' + this.uid)
        .subscribe((datas: any) => {
          this.commisiondata = datas.tds;
          this.filtereduserdata = this.commisiondata
        });
    })
    // const uid = 'ab00003';
    //  const uid = sessionStorage.getItem('firebaseUserId');

  }
  getSumOfAmount() {
    return this.filtereduserdata.reduce((total, current) => total + parseInt(current.amount), 0);
  }
  getDateBefore(dateString: string): string {
    // Convert the date string to a Date object
    const date = new Date(dateString);

    // Subtract 7 days from the date
    date.setDate(date.getDate() - 7);

    // Format the date as a string in the format of "YYYY-MM-DD"
    const formattedDate = `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}`;

    return formattedDate;
  }
  filters() {
    if (this.Package === '' && this.startDate === '' && this.endDate === '' && this.position === '') {
      this.filtereduserdata = this.commisiondata;
    } else {
      this.filtereduserdata = this.commisiondata.filter((user: any) => {
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
          const createdAt = new Date(user.dt);
          if (createdAt < startDate || createdAt > endDate) {
            dateMatch = false;
          }
        }

        // Filter by package
        if (this.Package !== '' && user.type !== this.Package) {
         
            packageMatch = false;
          
        }
        return positionMatch && dateMatch && packageMatch;
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
