import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-generation-tree',
  templateUrl: './generation-tree.component.html',
  styleUrls: ['./generation-tree.component.css']
})
export class GenerationTreeComponent implements OnInit {

  constructor(private afa:AngularFireAuth,private http: HttpClient) { }
  apiResponse: any;
  data:any;
uid:any;
  ngOnInit(): void {
     this.afa.user.subscribe(data => {
      // console.log('data-->');
      // console.log(data);
      // this.email = data?.email;

      this.uid = data?.displayName;
      // this.date =new Date().getDate()+ "/"+new Date().getMonth()+ "/"+new Date().getFullYear()+ "  "+ new Date().getHours()+ ":" + new Date().getMinutes() + ":" + new Date().getSeconds()
      // let NewTime = hour + ":" + minuts + ":" + seconds
      // console.log('<--data-->'); console.log(this.date); console.log('<--data-->');
      this.http.get<any>('http://moneysagaconsultancy.com/api/api/generationtree?user_id='+this.uid).subscribe(response => {
        this.apiResponse = response;
        console.log()
    });
    })
    // const uid = 'ab00003';
    // const uid = sessionStorage.getItem('firebaseUserId');
    
  }

}
