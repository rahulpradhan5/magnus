import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.css']
})
export class InviteComponent implements OnInit {
  reffer?: any = '';
  uid?: any = '';
  url?: any;
  status: boolean = false;
  constructor(fStore: AngularFirestore, public auth: AngularFireAuth, private storage: AngularFireStorage, public route: Router) {
    this.auth.user.subscribe(user => {
      this.uid = user?.displayName;
    });
    this.url = window.location.origin
    this.reffer = this.url;
  }
  onclick(data: string) {
    this.reffer =  this.url+"/"+this.uid + "/" + data;
  }
  ngOnInit(): void {
  }
  copyTextEnable(){
    this.status = true;
  }
  copyText() {
    // Select the input element and copy the generated link to the clipboard
    const inputElement = document.createElement('input');
    inputElement.value = this.reffer;
    document.body.appendChild(inputElement);
    inputElement.select();
    document.execCommand('copy');
    alert('Link copied!');
    document.body.removeChild(inputElement);
  }

}
