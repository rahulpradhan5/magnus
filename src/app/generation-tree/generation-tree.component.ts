import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-generation-tree',
  templateUrl: './generation-tree.component.html',
  styleUrls: ['./generation-tree.component.css']
})
export class GenerationTreeComponent implements OnInit {

  constructor(private http: HttpClient) { }
  apiResponse: any;
  data:any;

  ngOnInit(): void {
    const uid = 'ab00003';
    // const uid = sessionStorage.getItem('firebaseUserId');
    this.http.get<any>('https://moneysagaconsultancy.com/api/api/generationtree?user_id='+uid).subscribe(response => {
      this.apiResponse = response;
      console.log()
  });
  }

}
