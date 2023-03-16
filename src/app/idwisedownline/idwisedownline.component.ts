import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-idwisedownline',
  templateUrl: './idwisedownline.component.html',
  styleUrls: ['./idwisedownline.component.css']
})
export class IdwisedownlineComponent implements OnInit {

  constructor(private http: HttpClient) { }
  apiResponse: any;
  row:any;
  data:any;
  ngOnInit(): void {
    // const uid = 'ab00003';
     const uid = sessionStorage.getItem('firebaseUserId');
    this.http.get<any>('http://moneysagaconsultancy.com/api/api/totaluserdata?user_id='+uid).subscribe(response => {
        this.apiResponse = response;
     this.row = this.apiResponse.total_details.leftdata.concat(this.apiResponse.total_details.rightdata).reverse();
     this.data= this.row.sort((a:any, b:any) => a.id.localeCompare(b.id));

    });
}

}
