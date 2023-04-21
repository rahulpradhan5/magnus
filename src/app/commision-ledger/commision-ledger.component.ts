import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-commision-ledger',
  templateUrl: './commision-ledger.component.html',
  styleUrls: ['./commision-ledger.component.css']
})
export class CommisionLedgerComponent implements OnInit {
  commisiondata:any[]=[];
  date:any
parseFloat: any;
email:any;
uid:any;
  constructor(private http: HttpClient,private afa : AngularFireAuth) { 
   
  }

  ngOnInit() {
    // const uid = 'ab00003';
    // const uid = sessionStorage.getItem('firebaseUserId');
    this.afa.user.subscribe(data => {
      // console.log('data-->');
      // console.log(data);
      this.email = data?.email;

      this.uid = data?.displayName;
      this.date =new Date().getDate()+ "/"+new Date().getMonth()+ "/"+new Date().getFullYear()+ "  "+ new Date().getHours()+ ":" + new Date().getMinutes() + ":" + new Date().getSeconds()
      // let NewTime = hour + ":" + minuts + ":" + seconds
      console.log('<--data-->'); console.log(this.date); console.log('<--data-->');
      this.http.get('https://moneysagaconsultancy.com/api/api/totaluserdata?user_id='+this.uid)
      .subscribe((datas:any) => {
        console.log(datas);
        this.commisiondata=datas.payout;
        
      });
    })
   
  }
  getSumOfAmount() {
    return this.commisiondata.reduce((total, current) => total + parseInt(current.amount), 0);
  }
  getSumOfDiuduction() {
    return this.commisiondata.reduce((acc, commisiondata) => acc + commisiondata.revenue*10/100, 0);
  }
  getsum() {
    return this.commisiondata.reduce((total, current) => total + parseInt(current.revenue), 0);
  }
  getDateBefore(dateString: string): string {
    // Convert the date string to a Date object
    const date = new Date(dateString);
  
    // Subtract 7 days from the date
    date.setDate(date.getDate() - 7);
  
    // Format the date as a string in the format of "YYYY-MM-DD"
    const formattedDate = `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}`;
  
    return formattedDate;
  }

 

}
