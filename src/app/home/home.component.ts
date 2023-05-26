import { DOCUMENT } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as XLSX from 'xlsx';
import { HttpHeaders } from '@angular/common/http';
declare var jQuery: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  testimonials: any;
  constructor(private http: HttpClient, public auths: AngularFireAuth,) {
  }

  ngOnInit(): void {
    this.http.get("http://moneysagaconsultancy.com/api/api/testis").subscribe((data: any) => {
      this.testimonials = data.data;
    })
  }

  ngOnUpdate(): void {
    console.log("dklf");
  }

}
