import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upgrade-subscription',
  templateUrl: './upgrade-subscription.component.html',
  styleUrls: ['./upgrade-subscription.component.css']
})
export class UpgradeSubscriptionComponent implements OnInit {

  constructor(private http: HttpClient,) { }
package:any;
datas:any;
  ngOnInit(): void {
    const uid = sessionStorage.getItem('firebaseUserId');
    this.http.get('http://moneysagaconsultancy.com/api/api/fetchRequest?user_id=' + uid)
    .subscribe((data: any) => {
      console.log(data);
      this.datas = data.data;
      })
    
  }
  sendRequest(){
    const uid = sessionStorage.getItem('firebaseUserId');
    this.http.get('http://moneysagaconsultancy.com/api/api/sendRequest?user_id=' + uid+'&package='+this.package)
    .subscribe((data: any) => {
      alert(data.message);
      })
  }

}
