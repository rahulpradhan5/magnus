import { Component, OnInit, ElementRef, Inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { Event, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  logedIn = false;
  register1 = true;
  login1 = true;
  logout1 = false;
  isLogedin = false;
  currentRoute: string = "";
  set: boolean = true;

  constructor(private auths: AuthService, public fire: AngularFireAuth, public store: AngularFirestore, private router: Router, public route: ActivatedRoute) {
    this.currentRoute = "Demo";
    this.router.events.subscribe((event: Event) => {

      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
        console.log(event.url);
        if (this.currentRoute == '/dashboard' || this.currentRoute == '/generate-E-pin' || this.currentRoute == '/network' || this.currentRoute == '/upgrade' || this.currentRoute == '/my-earnings' || this.currentRoute == '/ComposeMessage'
          || this.currentRoute == '/tree' || this.currentRoute == '/GenerationTreeView' || this.currentRoute == '/MyDirect' || this.currentRoute == '/MyDownline' || this.currentRoute == '/Idwisedownline' || this.currentRoute == '/GenerationDownline'
          || this.currentRoute == '/CommisionLedger' || this.currentRoute == '/TDSDetails' || this.currentRoute == '/Inbox' || this.currentRoute == '/Sent' || this.currentRoute == '/Folders' || this.currentRoute == '/CheckEpin' || this.currentRoute == '/MemberEpinLogin' || this.currentRoute == '/EPinChangePassword'
          || this.currentRoute == '/EPinChangePassword' || this.currentRoute == '/EPinChangePassword' || this.currentRoute == "/RankQualifiersReport" || this.currentRoute == '/LevelReconcilationReport' || this.currentRoute == '/RankQualifiersReport'
          || this.currentRoute == '/SchemeOfferDetailsReport' || this.currentRoute == '/MatchingIncomeReconsulationReport' || this.currentRoute == '/RenewalIncomeReconciliationReport' || this.currentRoute == '/WelcomeLetterDetails' || this.currentRoute == '/Customerinfo' || this.currentRoute == '/OrderHistory'
          || this.currentRoute == '/CustomerInvoices' || this.currentRoute == '/CustomerKYCDocument' || this.currentRoute == '/download' || this.currentRoute == '/customerChangepassword' || this.currentRoute == '/RenewalDetails' || this.currentRoute == '/ShowIdCardDetails'
          || this.currentRoute == '/UpgradeDetails') {
          this.set = false;
        }
      }


    });
  }

  ngOnInit(): void {
  }

}


// echo "# MagnusIntegrated" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/Vaibhavnanne18/MagnusIntegrated.git
// git push -u origin main