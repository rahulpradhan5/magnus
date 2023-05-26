import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-generation-downline',
  templateUrl: './generation-downline.component.html',
  styleUrls: ['./generation-downline.component.css']
})
export class GenerationDownlineComponent implements OnInit {
generation:any[] = [];
uid:any;
searchTerm:any='';
filtereduserdata:any;
Package: any = "";
startDate: any = "";
endDate: any = "";
position: any = "";
filterData: any;
actualData:any;
  constructor(private http: HttpClient,private afa : AngularFireAuth) { }

  ngOnInit(): void {
    this.afa.user.subscribe(data => {
      // console.log('data-->');
      // console.log(data);
      // this.email = data?.email;

      this.uid = data?.displayName;
      // this.date =new Date().getDate()+ "/"+new Date().getMonth()+ "/"+new Date().getFullYear()+ "  "+ new Date().getHours()+ ":" + new Date().getMinutes() + ":" + new Date().getSeconds()
      // let NewTime = hour + ":" + minuts + ":" + seconds
      // console.log('<--data-->'); console.log(this.date); console.log('<--data-->');
      this.http.get('http://moneysagaconsultancy.com/api/api/generationtree?user_id='+this.uid)
      .subscribe((data:any) => {
        data.data.forEach((datas:any) => {
          this.generation.push({ ['created_at']: datas.created_at,['owner']: datas.owner,['points']: datas.points,['position']: datas.position,['referrer_id']: datas.referrer_id,['user_id']: datas.user_id,['level']: '1' ,['name']: datas.name,['package_name']: datas.package_name });
          datas.subdata.forEach((daatas:any)=>{
            this.generation.push({ ['created_at']: daatas.created_at,['owner']: daatas.owner,['points']: daatas.points,['position']: daatas.position,['referrer_id']: daatas.referrer_id,['user_id']: daatas.user_id,['level']: '2',['name']: daatas.name,['package_name']: daatas.package_name });
          })
        });
        this.filtereduserdata = this.generation;
        console.log(this.filtereduserdata);
      })
    })
    // const uid = sessionStorage.getItem('firebaseUserId');
   
  }
  filters() {
    if (this.Package === '' && this.startDate === '' && this.endDate === '' && this.position === '') {
      this.filtereduserdata = this.generation;
    } else {
      this.filtereduserdata = this.generation.filter((user: any) => {
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

    console.log(this.filtereduserdata);
  }

  exportTableToExcel(tableId: string, fileName: string): void {
    const table = document.getElementById(tableId);
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(table);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, fileName + '.xlsx');
  }
}
