import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tree-view2',
  templateUrl: './tree-view2.component.html',
  styleUrls: ['./tree-view2.component.css']
})
export class TreeView2Component implements OnInit {

  constructor(private http: HttpClient) { }
  apiResponse: any;
  data:any;
  uiid :any;
  ngOnInit(): void {
    // const uid = 'ab00003';
     const uid = sessionStorage.getItem('firebaseUserId');
    this.uiid = uid;
    console.log(this.uiid);
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
  this.http.get<any>('https://moneysagaconsultancy.com/api/api/generationtree?user_id='+uid).subscribe(response => {
    this.apiResponse = response.data;
});
  }

}
