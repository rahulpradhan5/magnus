import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // const uid = 'ab00003';
     const uid = sessionStorage.getItem('firebaseUserId');
    this.http.get('http://moneysagaconsultancy.com/api/api/totaluserdata?user_id='+uid)
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
  }

}
