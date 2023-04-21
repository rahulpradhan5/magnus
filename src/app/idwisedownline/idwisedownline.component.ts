import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-idwisedownline',
  templateUrl: './idwisedownline.component.html',
  styleUrls: ['./idwisedownline.component.css']
})
export class IdwisedownlineComponent implements OnInit {

  constructor(private afa:AngularFireAuth,private http: HttpClient) { }
  apiResponse: any;
  row:any;
  data:any;
  alluserdata :any[] = [];
  uid:any;
  ngOnInit(): void {
    // const uid = 'ab00003';
    this.afa.user.subscribe(data => {
      // console.log('data-->');
      // console.log(data);
      // this.email = data?.email;

      this.uid = data?.displayName;
      // this.date =new Date().getDate()+ "/"+new Date().getMonth()+ "/"+new Date().getFullYear()+ "  "+ new Date().getHours()+ ":" + new Date().getMinutes() + ":" + new Date().getSeconds()
      // let NewTime = hour + ":" + minuts + ":" + seconds
      // console.log('<--data-->'); console.log(this.date); console.log('<--data-->');
      this.http.get<any>('http://moneysagaconsultancy.com/api/api/totaluserdata?user_id='+this.uid).subscribe(response => {
        this.apiResponse = response.allusersdata;
   
     this.data= this.apiResponse ;
for(let i =0 ;i <= this.data.length -1;i++){
  const leftData = this.data[i]?.alldata['leftdata'];
  const leftDataWithNonZeroPurchases = leftData ? leftData.filter((item:any) => item.purchase !== 0) : [];
const leftDataWithNonZeroPurchasesCount = leftDataWithNonZeroPurchases.length;
const rightdata = this.data[i]?.alldata['rightdata'];
const rightdataWithNonZeroPurchases = rightdata ? rightdata.filter((item:any) => item.purchase !== 0) : [];
const rightdataWithNonZeroPurchasesCount = rightdataWithNonZeroPurchases.length;
  this.alluserdata.push({'id':this.data[i].id,'name':this.data[i].name,'leftcount':this.data[i]?.alldata['leftdata'] ? this.data[i].alldata['leftdata'].length : 0,'rightcount':this.data[i]?.alldata['rightdata'] ? this.data[i].alldata['rightdata'].length : 0,'confirmleft':leftDataWithNonZeroPurchasesCount,'confirmright':rightdataWithNonZeroPurchasesCount,'pv':this.data[i]?.pv['revenue']?this.data[i].pv['revenue']:0,'leftpv':this.data[i]?.pv['requiredleft_pv']?this.data[i].pv['requiredleft_pv']:0,'rightpv':this.data[i]?.pv['	requiredright_pv']?this.data[i].pv['	requiredright_pv']:0,'confirmrightpv':this.data[i]?.pv['right_pv']?this.data[i].pv['right_pv']:0,'confirmleftpv':this.data[i]?.pv['left_pv']?this.data[i].pv['left_pv']:0,'conpv':this.data[i]?.pv['deducted']?this.data[i].pv['deducted']:0});
}
    });
    })
    //  const uid = sessionStorage.getItem('firebaseUserId');
   
}

}
