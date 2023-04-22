import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-my-downline',
  templateUrl: './my-downline.component.html',
  styleUrls: ['./my-downline.component.css']
})
export class MyDownlineComponent implements OnInit {
  totalLeftcount:any;
  totalrightcount:any;
  totalDataconleft:any;
  totalDataconright:any;
  totalleftpv:any;
  totalrightpv:any;
  totalconfirmleftpv:any;
  totalcomfirmrightpv:any;
  ownPv:any;
  row:any;
  leftdata:any;
  rightdata:any;
  myId:any;
  constructor(private auths:AngularFireAuth,private http: HttpClient) { }

  ngOnInit(): void {
    // const uid = 'ab00003';
    this.auths.user.subscribe(data => {
      // console.log('data-->');
      // console.log(data);
      // this.email = data?.email;

      this.myId = data?.displayName;
      // this.date =new Date().getDate()+ "/"+new Date().getMonth()+ "/"+new Date().getFullYear()+ "  "+ new Date().getHours()+ ":" + new Date().getMinutes() + ":" + new Date().getSeconds()
      // let NewTime = hour + ":" + minuts + ":" + seconds
      // console.log('<--data-->'); console.log(this.date); console.log('<--data-->');
      this.http.get('http://moneysagaconsultancy.com/api/api/totaluserdata?user_id='+this.myId)
      .subscribe((data:any) => {
        console.log(data);
        this.totalLeftcount = data.total_details.leftdata.length;
        this.totalrightcount = data.total_details.rightdata.length;
        this.totalDataconleft = data.total_details.comfirm_leftcount;
        this.totalDataconright = data.total_details.comfirm_rightcount;
        this.totalleftpv = data.total_left_pv;
        this.totalrightpv = data.total_right_pv;
        this.totalconfirmleftpv = data.total_confirm_left_pv;
        this.totalcomfirmrightpv = data.total_confirm_right_pv;
        this.ownPv = data.ownPv;
        this.leftdata = data.total_details.leftdata;
        this.rightdata = data.total_details.rightdata;
   
        console.log(this.leftdata);
      })
      
    })
   
  }
  exportTableToExcel(tableId: string, fileName: string): void {
    const table = document.getElementById(tableId);
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(table);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, fileName + '.xlsx');
  }
}
