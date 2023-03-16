import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Document } from '../models/documents';

@Component({
  selector: 'app-legal-document',
  templateUrl: './legal-document.component.html',
  styleUrls: ['./legal-document.component.css']
})
export class LegalDocumentComponent implements OnInit {
  arr:any[]=[];
  constructor(public afs:AngularFirestore) {
    this.afs.collection<Document>('legalDocuments').valueChanges().forEach(data=>{
      this.arr = data;
      console.log(data);
    })
   }
  ngOnInit(): void {
  }

}
