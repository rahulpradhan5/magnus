import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-tree-view2',
  templateUrl: './tree-view2.component.html',
  styleUrls: ['./tree-view2.component.css']
})
export class TreeView2Component implements OnInit {
uid:any;
  constructor(private afa:AngularFireAuth,private http: HttpClient) {
    
   }
  apiResponse: any;
  data:any;
  uiid :any;
  ngOnInit(): void {
    // const uid = 'ab00003';
    //  const uid = sessionStorage.getItem('firebaseUserId');
    // this.uiid = uid;
    // console.log(this.uiid);
    $(function () {
      $('.genealogy-tree2 ul').hide();
      $('.genealogy-tree2>ul').show();
      $('.genealogy-tree2 ul.active').show();
      $('.genealogy-tree2 li').on('click', function (e) {
          var children = $(this).find('> ul');
          if (children.is(":visible")) children.hide('fast').removeClass('active');
          else children.show('fast').addClass('active');
          e.stopPropagation();
      });
  });
  this.afa.user.subscribe(data => {
    // console.log('data-->');
    // console.log(data);
    // this.email = data?.email;

    this.uid = data?.displayName;
    // this.date =new Date().getDate()+ "/"+new Date().getMonth()+ "/"+new Date().getFullYear()+ "  "+ new Date().getHours()+ ":" + new Date().getMinutes() + ":" + new Date().getSeconds()
    // let NewTime = hour + ":" + minuts + ":" + seconds
    // console.log('<--data-->'); console.log(this.date); console.log('<--data-->');
    this.http.get<any>('https://moneysagaconsultancy.com/api/api/generationtree?user_id='+this.uid).subscribe(response => {
      this.apiResponse = response.data;
  });
  })
 
  }

}
