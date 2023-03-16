import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { collection } from '@firebase/firestore';

@Component({
  selector: 'app-my-direct',
  templateUrl: './my-direct.component.html',
  styleUrls: ['./my-direct.component.css']
})
export class MyDirectComponent implements OnInit {

  constructor(private http: HttpClient) { }
  apiresponse:any;
  leftdata:any;
  rightdata:any;
  ngOnInit(): void {
    //  const uid = 'ab00003';
       const uid = sessionStorage.getItem('firebaseUserId');
     this.http.get('https://moneysagaconsultancy.com/api/api/totaluserdata?user_id='+uid)
      .subscribe((datas:any) => {
        this.apiresponse=datas;
        this.leftdata=datas.total_details.leftdata;
        this.rightdata=datas.total_details.rightdata;
        console.log(this.apiresponse);
      });
  }


}
