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
  Package: any = "";
  startDate: any = "";
  endDate: any = "";
  position: any = "";
  filterData: any;
  actualData:any;
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
        this.ownPv = data.ownpv[0].package_amount;
        this.leftdata = data.total_details.leftdata;
        this.rightdata = data.total_details.rightdata;
        const mergedData = this.leftdata.concat(this.rightdata);
        mergedData.sort((a:any, b:any) => (a.id > b.id) ? 1 : -1);
        
        // Group the merged array by id and assign position
        const groupedData = mergedData.reduce((result:any, item:any) => {
          if (!result[item.id]) {
            result[item.id] = item;
          } else {
            Object.assign(result[item.id], item);
          }
        
          // Assign position based on the source data
          if (this.leftdata.find((data:any) => data.id === item.id)) {
            result[item.id].position = 'left';
          } else if (this.rightdata.find((data:any) => data.id === item.id)) {
            result[item.id].position = 'right';
          }
        
          return result;
        }, {});
        // Convert the grouped result to an array
        const mergedArray = Object.values(groupedData);
        this.actualData = mergedArray
        this.filterData = this.actualData;
        console.log(this.filterData);
       
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

  filters() {
    if (this.Package === '' && this.startDate === '' && this.endDate === '' && this.position === '') {
      this.filterData = this.actualData;
    } else {
      this.filterData = this.actualData.filter((user: any) => {
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
        if (this.Package !== '' && user.package_name !== this.Package) {
         
            packageMatch = false;
          
        }

        return positionMatch && dateMatch && packageMatch;
      });
    }

    console.log(this.filterData);
  }
}

