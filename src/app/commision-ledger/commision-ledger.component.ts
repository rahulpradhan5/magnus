import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-commision-ledger',
  templateUrl: './commision-ledger.component.html',
  styleUrls: ['./commision-ledger.component.css']
})
export class CommisionLedgerComponent implements OnInit {
  commisiondata:any[]=[];
  date:any
  constructor(private http: HttpClient) { }

  ngOnInit() {
    // const uid = 'ab00003';
    const uid = sessionStorage.getItem('firebaseUserId');
    this.http.get('https://moneysagaconsultancy.com/api/api/totaluserdata?user_id='+uid)
      .subscribe((datas:any) => {
        console.log(datas);
        this.commisiondata=datas.payout;
        
      });
  }
  getSumOfAmount() {
    return this.commisiondata.reduce((total, current) => total + parseInt(current.amount), 0);
  }
  getSumOfDiuduction() {
    return this.commisiondata.reduce((acc, commisiondata) => acc + commisiondata.amount*10/100, 0);
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
