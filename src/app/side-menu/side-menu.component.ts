import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import * as $ from 'jquery'
import { AuthService } from '../shared/auth.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
  register1 = true;
  login1 = true;
  logout1 = false;
  isLogedin = false;
  currentRoute: string = '';
  set: boolean = true;
  myId: any;
  fullName: any;
  email:any;
  revenue:any;
  logourl: string = '../../assets/img/logonew.png';
  profileurl: string = 'http://cdn.onlinewebfonts.com/svg/img_452489.png';
  profile_exist: boolean = false;
  profile_exist_String: string = '';
  constructor(private http: HttpClient,public auth: AuthService, public firebaseAuth: AngularFireAuth, public router: Router, private firestore: AngularFirestore) {

    firebaseAuth.user.subscribe(user => {
      this.myId = user?.displayName;
      this.email = user?.email;
      console.log(user?.uid);
      if (user) {
        this.isLogedin = true;
      } else {
        this.isLogedin = false;
      }

      this.firestore.collection<any>('users').doc(user?.uid).valueChanges().subscribe((doc: any) => { 
      this.fullName = doc?.fullName;
      console.log(this.fullName);
      })

      this.firestore.collection<any>('users').doc(user?.uid).collection('kyc').doc('details').valueChanges().subscribe((doc: any) => { 
        if (doc!=undefined) {
          if (doc.profile!=undefined) {
            this.profileurl = doc.profile;
          }
          this.fullName = doc.data().fullName;
        }
      });
    })


  }

  ngOnInit(): void {
    this.firebaseAuth.user.subscribe(user => {
      this.myId = user?.displayName;
    this.http.get('http://moneysagaconsultancy.com/api/api/Package?user_id=' + this.myId)
    .subscribe((data: any) => {
      console.log(data);
      
      if (data.revenue == '') {
        this.revenue = 0;
      } else {
        this.revenue = data.revenue[0]['revenue'];
      }
      
    })
  });
    // this.myId = sessionStorage.getItem('firebaseUserId');
    // console.log(this.myId);
    const id = localStorage.getItem('sideMenu')
    console.log(id)
    if (id == 'm1') {
      $('#m1').css('color', '#111111');
      $('#m1').css('background', '#CE992F');

      $('#m2').css('color', '#BBBBBB');
      $('#m2').css('background', '#1D1D1D');
      $('#m3').css('color', '#BBBBBB');
      $('#m3').css('background', '#1D1D1D');
      $('#m4').css('color', '#BBBBBB');
      $('#m4').css('background', '#1D1D1D');
      $('#m5').css('color', '#BBBBBB');
      $('#m5').css('background', '#1D1D1D');
      $('#m6').css('color', '#BBBBBB');
      $('#m6').css('background', '#1D1D1D');
    }

    if (id == 'm2') {
      $('#m2').css('color', '#111111');
      $('#m2').css('background', '#CE992F');

      $('#m1').css('color', '#BBBBBB');
      $('#m1').css('background', '#1D1D1D');
      $('#m3').css('color', '#BBBBBB');
      $('#m3').css('background', '#1D1D1D');
      $('#m4').css('color', '#BBBBBB');
      $('#m4').css('background', '#1D1D1D');
      $('#m5').css('color', '#BBBBBB');
      $('#m5').css('background', '#1D1D1D');
      $('#m6').css('color', '#BBBBBB');
      $('#m6').css('background', '#1D1D1D');
    }

    if (id == 'm3') {
      $('#m3').css('color', '#111111');
      $('#m3').css('background', '#CE992F');

      $('#m2').css('color', '#BBBBBB');
      $('#m2').css('background', '#1D1D1D');
      $('#m1').css('color', '#BBBBBB');
      $('#m1').css('background', '#1D1D1D');
      $('#m4').css('color', '#BBBBBB');
      $('#m4').css('background', '#1D1D1D');
      $('#m5').css('color', '#BBBBBB');
      $('#m5').css('background', '#1D1D1D');
      $('#m6').css('color', '#BBBBBB');
      $('#m6').css('background', '#1D1D1D');
    }
    if (id == 'm4') {
      $('#m4').css('color', '#111111');
      $('#m4').css('background', '#CE992F');

      $('#m2').css('color', '#BBBBBB');
      $('#m2').css('background', '#1D1D1D');
      $('#m3').css('color', '#BBBBBB');
      $('#m3').css('background', '#1D1D1D');
      $('#m1').css('color', '#BBBBBB');
      $('#m1').css('background', '#1D1D1D');
      $('#m5').css('color', '#BBBBBB');
      $('#m5').css('background', '#1D1D1D');
      $('#m6').css('color', '#BBBBBB');
      $('#m6').css('background', '#1D1D1D');
    }

    if (id == 'm5') {
      $('#m5').css('color', '#111111');
      $('#m5').css('background', '#CE992F');

      $('#m2').css('color', '#BBBBBB');
      $('#m2').css('background', '#1D1D1D');
      $('#m3').css('color', '#BBBBBB');
      $('#m3').css('background', '#1D1D1D');
      $('#m4').css('color', '#BBBBBB');
      $('#m4').css('background', '#1D1D1D');
      $('#m1').css('color', '#BBBBBB');
      $('#m1').css('background', '#1D1D1D');
      $('#m6').css('color', '#BBBBBB');
      $('#m6').css('background', '#1D1D1D');
    }
    if (id == 'm6') {
      $('#m6').css('color', '#111111');
      $('#m6').css('background', '#CE992F');

      $('#m2').css('color', '#BBBBBB');
      $('#m2').css('background', '#1D1D1D');
      $('#m3').css('color', '#BBBBBB');
      $('#m3').css('background', '#1D1D1D');
      $('#m4').css('color', '#BBBBBB');
      $('#m4').css('background', '#1D1D1D');
      $('#m5').css('color', '#BBBBBB');
      $('#m5').css('background', '#1D1D1D');
      $('#m1').css('color', '#BBBBBB');
      $('#m1').css('background', '#1D1D1D');
    }
  }

  closeNav() {
    // document.getElementById("mySidenav")!.style.width = "0";
    // document.getElementById("mySidenav")!.style.marginLeft = "-1000";
    document.getElementById("mySidenav")!.style.display = "none";
    // document.getElementById("mySidenav1")!.style.display = "none";

  }

  fopenNav() {
    // document.getElementById("mySidenav")!.style.width = "280px";
    document.getElementById("mySidenav")!.style.display = "block";

  }

  onclick(id: any) {

    localStorage.setItem('sideMenu', id)
  }

  logout() {
    this.auth.logout()
    this.register1 = true;
    this.login1 = true;
    this.logout1 = false;
    this.isLogedin = false;
  }

  navbarCollapse() {
    document.addEventListener('DOMContentLoaded', function () {
      // open
      const burger = document.querySelectorAll('.navbar-burger');
      const menu = document.querySelectorAll('.navbar-menu');

      if (burger.length && menu.length) {
        for (var i = 0; i < burger.length; i++) {
          burger[i].addEventListener('click', function () {
            for (var j = 0; j < menu.length; j++) {
              menu[j].classList.toggle('hidden');
            }
          });
        }
      }

      // close
      const close = document.querySelectorAll('.navbar-close');
      const backdrop = document.querySelectorAll('.navbar-backdrop');

      if (close.length) {
        for (var i = 0; i < close.length; i++) {
          close[i].addEventListener('click', function () {
            for (var j = 0; j < menu.length; j++) {
              menu[j].classList.toggle('hidden');
            }
          });
        }
      }

      if (backdrop.length) {
        for (var i = 0; i < backdrop.length; i++) {
          backdrop[i].addEventListener('click', function () {
            for (var j = 0; j < menu.length; j++) {
              menu[j].classList.toggle('hidden');
            }
          });
        }
      }
    });
  }

  openNav() {
    // document.getElementById("mySidenav1")!.style.width = "0";
    // document.getElementById("mySidenav1")!.style.marginLeft = "-1000";
    document.getElementById("mySidenav1")!.style.display = "block";
  }
  resetPassword() {
    if(this.email == ''){
      alert("please enter email");
      return
    }
   this.firebaseAuth.sendPasswordResetEmail(this.email).then(() => {
   alert("Please check your email for change your password")
  }, err => {
    alert('Something went wrong');
  })
  }
}
