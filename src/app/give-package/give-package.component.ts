import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-give-package',
  templateUrl: './give-package.component.html',
  styleUrls: ['./give-package.component.css']
})
export class GivePackageComponent implements OnInit {
  users: any;
  givenUser: any = '';
  pacakage: any = '';
  constructor(private http: HttpClient, private auth: AuthService, fStore: AngularFirestore, public auths: AngularFireAuth, private storage: AngularFireStorage, private router: Router) { }


  ngOnInit(): void {
    this.http.get('http://moneysagaconsultancy.com/api/api/users').subscribe((data: any) => {
      this.users = data.data;
    })
  }

  insertAmount() {
    if (this.givenUser == '') {
      alert('Select a user');
      return
    }
    if (this.pacakage == '') {
      alert('Select a pacakage');
      return
    }

    this.http.get('http://moneysagaconsultancy.com/api/api/insertamount?user_id=' + this.givenUser + '&package=' + this.pacakage).subscribe(
      (data: any) => {
        if (data && data.messaeg) {
          alert(data.messaeg);
        } else {
          alert("Package Purchased");
        }
      },
      (error: any) => {
        alert("Package Purchased");
      }
    );

  }

}
