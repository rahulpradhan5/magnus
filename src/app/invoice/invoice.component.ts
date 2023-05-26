import { Component, OnInit,ViewChild, ElementRef  } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import toWords from 'num-words';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  constructor(private fdb: AngularFirestore,public auths: AngularFireAuth, public http:HttpClient,public ActiveRoute :ActivatedRoute) { }
  myId:any;
  invoice:any;
  word:any;
  personaldata:any;
  mobile:any;
  ngOnInit(): void {
   const uid = this.ActiveRoute.snapshot.params['id'];
   this.auths.user.subscribe(data => {
    console.log(data);
    this.personaldata = data;
    // console.log('data-->');
    // console.log(data);
    // this.email = data?.email;

    this.myId = data?.displayName;
    this.fdb.collection('users').doc(data?.uid).valueChanges().subscribe((doc: any) => { 
      console.log(doc);
      if (doc!=undefined) {
        if (doc.mobNum!=undefined) {
          this.mobile = doc.mobNum;
        }
      
      }
    });
    this.http.get("http://moneysagaconsultancy.com/api/api/invoice?user_id="+this.myId+"&id="+uid).subscribe((data:any)=>{
      console.log(data);
      this.invoice = data.data;
      this.word  = toWords(this.invoice[0][0].amount);
    })
   })
  }

  @ViewChild('table') table: ElementRef<HTMLTableElement> = {} as ElementRef<HTMLTableElement>;

  generatePDF() {
    const doc = new jsPDF();
    const table = this.table.nativeElement;

    html2canvas(table).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const imgWidth = 210; // A4 width
      const pageHeight = 297; // A4 height
      const imgHeight = canvas.height * imgWidth / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        doc.addPage();
        doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      doc.save('invoice.pdf');
    });
  }
}
