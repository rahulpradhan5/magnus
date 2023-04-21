import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-generation-downline',
  templateUrl: './generation-downline.component.html',
  styleUrls: ['./generation-downline.component.css']
})
export class GenerationDownlineComponent implements OnInit {
generation:any[] = [];
uid:any;
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
          this.generation.push({ ['created_at']: datas.created_at,['owner']: datas.owner,['points']: datas.points,['position']: datas.position,['referrer_id']: datas.referrer_id,['user_id']: datas.user_id,['level']: '1' ,['name']: datas.name});
          datas.subdata.forEach((daatas:any)=>{
            this.generation.push({ ['created_at']: daatas.created_at,['owner']: daatas.owner,['points']: daatas.points,['position']: daatas.position,['referrer_id']: daatas.referrer_id,['user_id']: daatas.user_id,['level']: '2',['name']: daatas.name });
          })
        });
        console.log(data);
      })
    })
    // const uid = sessionStorage.getItem('firebaseUserId');
   
  }

}
