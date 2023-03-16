import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-renewal-details',
  templateUrl: './renewal-details.component.html',
  styleUrls: ['./renewal-details.component.css']
})
export class RenewalDetailsComponent implements OnInit {
data:any;
package:any;
  constructor( private http: HttpClient,) { }

  ngOnInit(): void {
    const uid = sessionStorage.getItem('firebaseUserId');
    this.http.get('http://moneysagaconsultancy.com/api/api/fetchRenwal?user_id=' + uid)
      .subscribe((data: any) => {
        console.log(data
          );
          this.data = data.data;
        })
  }

  renew(){
    const uid = sessionStorage.getItem('firebaseUserId');
    this.http.get('http://moneysagaconsultancy.com/api/api/insertamount?user_id=' + uid+'&package='+this.package)
      .subscribe((data: any) => {
        console.log(data
          );
         
        })
  }

}
