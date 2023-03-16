import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-tdsdetails',
  templateUrl: './tdsdetails.component.html',
  styleUrls: ['./tdsdetails.component.css']
})
export class TDSDetailsComponent implements OnInit {

  commisiondata:any[]=[];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    // const uid = 'ab00003';
     const uid = sessionStorage.getItem('firebaseUserId');
    this.http.get('https://moneysagaconsultancy.com/api/api/totaluserdata?user_id='+uid)
      .subscribe((datas:any) => {
        this.commisiondata=datas.tds;
        
      });
  }
  getSumOfAmount() {
    return this.commisiondata.reduce((total, current) => total + parseInt(current.amount), 0);
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
