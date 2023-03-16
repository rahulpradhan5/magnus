import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {
data:any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const uid = sessionStorage.getItem('firebaseUserId');
    this.http.get('http://moneysagaconsultancy.com/api/api/fetchOrder?user_id=' + uid)
      .subscribe((data: any) => {
        console.log(data
          );
          this.data = data.data;
        })
  }

}
