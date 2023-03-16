import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { RegistrationComponent } from './registration/registration.component';
import { CoursesComponent } from './courses/courses.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { PricingComponent } from './pricing/pricing.component';
import { ContactComponent } from './contact/contact.component';
import { InviteComponent } from './invite/invite.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { VideosComponent } from './videos/videos.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { LegalDocumentComponent } from './legal-document/legal-document.component';
import { NetworkComponent } from './network/network.component';
import { ShowTreeViewComponent } from './show-tree-view/show-tree-view.component';
import { TreeView2Component } from './tree-view2/tree-view2.component';
import { ApplyFlitersComponent } from './apply-fliters/apply-fliters.component';
import { FilterResultComponent } from './filter-result/filter-result.component';
import { EarningsComponent } from './earnings/earnings.component';
import { TotalEarningsComponent } from './total-earnings/total-earnings.component';
import { GenerateEpinComponent } from './generate-epin/generate-epin.component';
import { TransferEpinComponent } from './transfer-epin/transfer-epin.component';
import { SuccessEpinComponent } from './success-epin/success-epin.component';
import { UpgradeSubscriptionComponent } from './upgrade-subscription/upgrade-subscription.component';
import { AboutService } from './services/about.service';
import { AngularFireModule } from '@angular/fire/compat'
import { FormsModule } from '@angular/forms';
import { InviteRightComponentComponent } from './invite-right-component/invite-right-component.component';
import { InviteLeftComponentComponent } from './invite-left-component/invite-left-component.component';
import { UiCardComponent } from './ui-card/ui-card.component';
import { DashboardWgComponent } from './dashboard-wg/dashboard-wg.component';
import { TreeviewWgComponent } from './treeview-wg/treeview-wg.component';
import { Tree1AlComponent } from './tree1-al/tree1-al.component';
import { DashboardRoutesModule } from './dashboard-routes/dashboard-routes.module';
import { EpinComponent } from './epin/epin.component';
import { ComposemessageComponent } from './composemessage/composemessage.component';
 import { GenerationTreeComponent } from './generation-tree/generation-tree.component';
import { IdwisedownlineComponent } from './idwisedownline/idwisedownline.component';
import { MyDirectComponent } from './my-direct/my-direct.component';
import { MyDownlineComponent } from './my-downline/my-downline.component';
import { GenerationDownlineComponent } from './generation-downline/generation-downline.component';
import { CommisionLedgerComponent } from './commision-ledger/commision-ledger.component';
import { TDSDetailsComponent } from './tdsdetails/tdsdetails.component';
 import { InboxComponent } from './inbox/inbox.component';
import { SentComponent } from './sent/sent.component';
import { FoldersComponent } from './folders/folders.component';
import { CheckEpinComponent } from './check-epin/check-epin.component';
import { MemberEpinLoginComponent } from './member-epin-login/member-epin-login.component';
import { EPinChangePasswordComponent } from './epin-change-password/epin-change-password.component';
import { LevelReconcilationReportComponent } from './level-reconcilation-report/level-reconcilation-report.component';
import { RankQualifiersReportComponent } from './rank-qualifiers-report/rank-qualifiers-report.component';
import { RenewalIncomeReconciliationReportComponent } from './renewal-income-reconciliation-report/renewal-income-reconciliation-report.component';
import { MatchingIncomeReconsulationReportComponent } from './matching-income-reconsulation-report/matching-income-reconsulation-report.component';
import { SchemeOfferDetailsReportComponent } from './scheme-offer-details-report/scheme-offer-details-report.component';
import { WelcomeLetterDetailsComponent } from './welcome-letter-details/welcome-letter-details.component';
import { CustomerinfoComponent } from './customerinfo/customerinfo.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { CustomerInvoicesComponent } from './customer-invoices/customer-invoices.component';
import { CustomerKYCDocumentComponent } from './customer-kycdocument/customer-kycdocument.component';
import { DownloadComponent } from './download/download.component';
import { CustomerChangepasswordComponent } from './customer-changepassword/customer-changepassword.component';
import { RenewalDetailsComponent } from './renewal-details/renewal-details.component';
import { ShowIdCardDetailsComponent } from './show-id-card-details/show-id-card-details.component';
import { AwarenessCampaignComponent } from './awareness-campaign/awareness-campaign.component';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { SponsorRegisterComponent } from './sponsor-register/sponsor-register.component';
import { SidemenuNavbarComponent } from './sidemenu-navbar/sidemenu-navbar.component';

 @NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    DashboardComponent,
    SideMenuComponent,
    RegistrationComponent,
    CoursesComponent,
    LoginComponent,
    PaymentComponent,
    PricingComponent,
    ContactComponent,
    InviteComponent,
    ProfileComponent,
    ProfileDetailsComponent,
    TreeViewComponent,
    VideosComponent,
    PrivacyPolicyComponent,
    LegalDocumentComponent,
    NetworkComponent,
    ShowTreeViewComponent,
    TreeView2Component,
    ApplyFlitersComponent,
    FilterResultComponent,
    EarningsComponent,
    TotalEarningsComponent,
    GenerateEpinComponent,
    TransferEpinComponent,
    SuccessEpinComponent,
    UpgradeSubscriptionComponent,
    InviteRightComponentComponent,
    InviteLeftComponentComponent,
    UiCardComponent,
    DashboardWgComponent,
    TreeviewWgComponent,
    Tree1AlComponent,
    EpinComponent,
    ComposemessageComponent,
     GenerationTreeComponent,
    IdwisedownlineComponent,
    MyDirectComponent,
    MyDownlineComponent,
    GenerationDownlineComponent,
    CommisionLedgerComponent,
    TDSDetailsComponent,
     InboxComponent,
    SentComponent,
    FoldersComponent,
    CheckEpinComponent,
    MemberEpinLoginComponent,
    EPinChangePasswordComponent,
    LevelReconcilationReportComponent,
    RankQualifiersReportComponent,
    RenewalIncomeReconciliationReportComponent,
    MatchingIncomeReconsulationReportComponent,
    SchemeOfferDetailsReportComponent,
    WelcomeLetterDetailsComponent,
    CustomerinfoComponent,
    OrderHistoryComponent,
    CustomerInvoicesComponent,
    CustomerKYCDocumentComponent,
    DownloadComponent,
    CustomerChangepasswordComponent,
    RenewalDetailsComponent,
    ShowIdCardDetailsComponent,
    AwarenessCampaignComponent,
    BankDetailsComponent,
    SponsorRegisterComponent,
    SidemenuNavbarComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    DashboardRoutesModule
  ],
  providers: [AboutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
