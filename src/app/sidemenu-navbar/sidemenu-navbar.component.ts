import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-sidemenu-navbar',
  templateUrl: './sidemenu-navbar.component.html',
  styleUrls: ['./sidemenu-navbar.component.css']
})
export class SidemenuNavbarComponent implements OnInit {
  register1 = true;
  login1 = true;
  logout1 = false;
  isLogedin = false;
  currentRoute: string;
  set: boolean = false;
  constructor(private auth: AuthService, public fire: AngularFireAuth, public store: AngularFirestore, private router: Router, public route: ActivatedRoute) {


    this.currentRoute = "Demo";
    this.router.events.subscribe((event: Event) => {

      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
        console.log(event.url);
        if (this.currentRoute == '/dashboard' ||  this.currentRoute == '/generate-E-pin' || this.currentRoute == '/network' || this.currentRoute == '/upgrade' || this.currentRoute == '/my-earnings' || this.currentRoute == '/ComposeMessage'
          || this.currentRoute == '/tree' || this.currentRoute == '/GenerationTreeView' || this.currentRoute == '/MyDirect' || this.currentRoute == '/MyDownline' || this.currentRoute == '/Idwisedownline' || this.currentRoute == '/GenerationDownline'
          || this.currentRoute == '/CommisionLedger' || this.currentRoute == '/TDSDetails' || this.currentRoute == '/Inbox' || this.currentRoute == '/Sent' || this.currentRoute == '/Folders' || this.currentRoute == '/CheckEpin' || this.currentRoute == '/MemberEpinLogin' || this.currentRoute == '/EPinChangePassword'
          || this.currentRoute == '/EPinChangePassword' || this.currentRoute == '/EPinChangePassword' || this.currentRoute == "/RankQualifiersReport" || this.currentRoute == '/LevelReconcilationReport' || this.currentRoute == '/RankQualifiersReport'
          || this.currentRoute == '/SchemeOfferDetailsReport' || this.currentRoute == '/MatchingIncomeReconsulationReport' || this.currentRoute == '/RenewalIncomeReconciliationReport' || this.currentRoute == '/WelcomeLetterDetails' || this.currentRoute == '/Customerinfo' || this.currentRoute == '/OrderHistory'
          || this.currentRoute == '/CustomerInvoices' || this.currentRoute == '/CustomerKYCDocument' || this.currentRoute == '/download' || this.currentRoute == '/customerChangepassword' || this.currentRoute == '/RenewalDetails' || this.currentRoute == '/ShowIdCardDetails'
          || this.currentRoute == '/UpgradeDetails' || this.currentRoute == '/SponsorRegister') {
          this.set = true;
        }
      }


    });



    interface Items {
      id?: string,
    }
    const item: Items = { id: 'jijiji' };
    fire.user.subscribe(user => {
      if (user) {

        this.isLogedin = true;
      } else {
        this.isLogedin = false;

      }

      console.log(this.isLogedin);
      // store.collection('users').doc(user?.uid).collection<Items>('name').add(item).then(hi=> {
      if (this.isLogedin) {
        // router.navigate(['/dashboard']);
      }

      // });

    })

  }
  //   auth1=getAuth();
  ngOnInit(): void {
    this.navbarCollapse();

  }

  //   loggedIn(){
  //     return localStorage.getItem('token');
  //   }

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
  closeNav() {
    // document.getElementById("mySidenav")!.style.width = "0";
    // document.getElementById("mySidenav")!.style.marginLeft = "-1000";
    document.getElementById("mySidenav")!.style.display = "none";
  }
  openNav() {
    // document.getElementById("mySidenav1")!.style.width = "0";
    // document.getElementById("mySidenav1")!.style.marginLeft = "-1000";
    document.getElementById("mySidenav")!.style.display = "block";
  }

}
