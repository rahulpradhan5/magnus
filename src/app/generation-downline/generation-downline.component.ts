import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-generation-downline',
  templateUrl: './generation-downline.component.html',
  styleUrls: ['./generation-downline.component.css']
})
export class GenerationDownlineComponent implements OnInit {
generation:any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // const uid = 'ab00003';
    const uid = sessionStorage.getItem('firebaseUserId');
    this.http.get('http://moneysagaconsultancy.com/api/api/generationtree?user_id='+uid)
    .subscribe((data:any) => {
      data.data.forEach((datas:any) => {
        this.generation.push({ ['created_at']: datas.created_at,['owner']: datas.owner,['points']: datas.points,['position']: datas.position,['referrer_id']: datas.referrer_id,['user_id']: datas.user_id,['level']: '1' ,['name']: datas.name});
        datas.subdata.forEach((daatas:any)=>{
          this.generation.push({ ['created_at']: daatas.created_at,['owner']: daatas.owner,['points']: daatas.points,['position']: daatas.position,['referrer_id']: daatas.referrer_id,['user_id']: daatas.user_id,['level']: '2',['name']: daatas.name });
        })
      });
      console.log(data);
    })
  }

}
