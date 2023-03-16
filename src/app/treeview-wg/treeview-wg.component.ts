import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-treeview-wg',
  templateUrl: './treeview-wg.component.html',
  styleUrls: ['./treeview-wg.component.css']
})
export class TreeviewWgComponent implements OnInit {

  // Define properties to hold the API response and the root node of the tree
  apiResponse: any;
  leftuser: any;
  rightuser: any;
  leftleftuser: any;
  leftleftleftuser: any;
  leftleftrightuser: any;
  leftrightuser: any;
  leftrightleftuser: any;
  rightleftuser: any;
  rightrightuser: any;
  leftrightrightuser:any;
  rightleftleftuser:any;
  rightleftrightuser:any;
  rightrightleftuser:any;
  rightrightrightuser:any;
  uuid :any;
  constructor(private http: HttpClient,public ActiveRoute:ActivatedRoute) { }

  ngOnInit(): void {
    
     const uid = this.ActiveRoute.snapshot.params['id'];
    this.uuid=uid;
    this.http.get<any>('http://moneysagaconsultancy.com/api/api/tree?user_id='+uid).subscribe(response => {
        this.apiResponse = response.data;
        console.log(this.apiResponse);
        // level 2 left and right users
        this.leftuser = this.apiResponse.children.left || 'undefined';
        this.rightuser = this.apiResponse.children.right || 'undefined';

        // level 3 left and right users
        this.leftleftuser = this.apiResponse.children.left?.children.left || 'undefined';
        this.leftrightuser = this.apiResponse.children.left?.children.right || 'undefined';
        this.rightleftuser = this.apiResponse.children.right?.children.left || 'undefined';
        this.rightrightuser = this.apiResponse.children.right?.children.right || 'undefined';

        // level 4 left and right users
        this.leftleftleftuser = this.apiResponse.children.left?.children.left?.children.left || 'undefined';
        this.leftleftrightuser = this.apiResponse.children.left?.children.left?.children.right || 'undefined';
        this.leftrightleftuser = this.apiResponse.children.left?.children.right?.children.left || 'undefined';
        this.leftrightrightuser = this.apiResponse.children.left?.children.right?.children.right || 'undefined';
        this.rightleftleftuser = this.apiResponse.children.right?.children.left?.children.left || 'undefined';
        this.rightleftrightuser = this.apiResponse.children.right?.children.left?.children.right || 'undefined';
        this.rightrightleftuser = this.apiResponse.children.right?.children.right?.children.left || 'undefined';
        this.rightrightrightuser =this.apiResponse.children.right?.children.right?.children.right || 'undefined';
    console.log(this.rightrightrightuser);
    });
}



}

