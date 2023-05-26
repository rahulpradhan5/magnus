import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

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
  myId:any;
  referid:any;
  leftdata:any;
  searchTerm:any = "";
  rightdata:any;
  display:boolean=false;
  constructor(public auths : AngularFireAuth,private http: HttpClient,public ActiveRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.auths.user.subscribe(data => {
      // console.log('data-->');
      // console.log(data);
      // this.email = data?.email;

      this.myId = data?.displayName;
     const uid = this.ActiveRoute.snapshot.params['id'];
    this.uuid=uid;
    this.http.get<any>('http://moneysagaconsultancy.com/api/api/tree?user_id='+uid).subscribe(response => {
      
        this.apiResponse = response.data;
        console.log(response);
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
        if(this.apiResponse.referrer_id != null || Number(this.apiResponse.referrer_id) >= Number(this.myId)){
          this.display = true
        }
    console.log(this.rightrightrightuser);
    });
    this.http.get('http://moneysagaconsultancy.com/api/api/totaluserdata?user_id='+this.myId)
      .subscribe((data:any) => {
        console.log(data);

        this.leftdata = data.total_details.leftdata;
        this.rightdata = data.total_details.rightdata;
   
        console.log(this.leftdata);
      })
  });
}
filterData()
{
  location.href="tree/"+this.searchTerm+"/view";

}

}

