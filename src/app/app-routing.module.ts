import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ApplyFlitersComponent } from './apply-fliters/apply-fliters.component';
import { CommisionLedgerComponent } from './commision-ledger/commision-ledger.component';
import { ComposemessageComponent } from './composemessage/composemessage.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { FixedTemplateComponent } from './dashboard-routes/fixed-template/fixed-template.component';
import { DashboardWgComponent } from './dashboard-wg/dashboard-wg.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EarningsComponent } from './earnings/earnings.component';
import { EpinComponent } from './epin/epin.component';
import { FilterResultComponent } from './filter-result/filter-result.component';
import { GenerateEpinComponent } from './generate-epin/generate-epin.component';
import { GenerationDownlineComponent } from './generation-downline/generation-downline.component';
import { GenerationTreeComponent } from './generation-tree/generation-tree.component';
import { HomeComponent } from './home/home.component';
import { IdwisedownlineComponent } from './idwisedownline/idwisedownline.component';
import { InviteLeftComponentComponent } from './invite-left-component/invite-left-component.component';
import { InviteRightComponentComponent } from './invite-right-component/invite-right-component.component';
import { InviteComponent } from './invite/invite.component';
import { LegalDocumentComponent } from './legal-document/legal-document.component';
import { LoginComponent } from './login/login.component';
import { MyDirectComponent } from './my-direct/my-direct.component';
import { MyDownlineComponent } from './my-downline/my-downline.component';
import { NetworkComponent } from './network/network.component';
import { PaymentComponent } from './payment/payment.component';
import { PricingComponent } from './pricing/pricing.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { ProfileComponent } from './profile/profile.component';
import { RegistrationComponent } from './registration/registration.component';
import { ShowTreeViewComponent } from './show-tree-view/show-tree-view.component';
import { SuccessEpinComponent } from './success-epin/success-epin.component';
import { TDSDetailsComponent } from './tdsdetails/tdsdetails.component';
import { TotalEarningsComponent } from './total-earnings/total-earnings.component';
import { TransferEpinComponent } from './transfer-epin/transfer-epin.component';
import { TreeviewWgComponent } from './treeview-wg/treeview-wg.component';
import { UiCardComponent } from './ui-card/ui-card.component';
import { UpgradeSubscriptionComponent } from './upgrade-subscription/upgrade-subscription.component';
import { VideosComponent } from './videos/videos.component';
import { InboxComponent } from './inbox/inbox.component';
import { SentComponent } from './sent/sent.component';
import { FoldersComponent } from './folders/folders.component';
import { CheckEpinComponent } from './check-epin/check-epin.component';
import { MemberEpinLoginComponent } from './member-epin-login/member-epin-login.component';
import { EPinChangePasswordComponent } from './epin-change-password/epin-change-password.component';
import { RankQualifiersReportComponent } from './rank-qualifiers-report/rank-qualifiers-report.component';
import { LevelReconcilationReportComponent } from './level-reconcilation-report/level-reconcilation-report.component';
import { SchemeOfferDetailsReportComponent } from './scheme-offer-details-report/scheme-offer-details-report.component';
import { MatchingIncomeReconsulationReportComponent } from './matching-income-reconsulation-report/matching-income-reconsulation-report.component';
import { RenewalIncomeReconciliationReportComponent } from './renewal-income-reconciliation-report/renewal-income-reconciliation-report.component';
import { WelcomeLetterDetailsComponent } from './welcome-letter-details/welcome-letter-details.component';
import { ShowIdCardDetailsComponent } from './show-id-card-details/show-id-card-details.component';
import { RenewalDetailsComponent } from './renewal-details/renewal-details.component';
import { CustomerChangepasswordComponent } from './customer-changepassword/customer-changepassword.component';
import { DownloadComponent } from './download/download.component';
import { CustomerKYCDocumentComponent } from './customer-kycdocument/customer-kycdocument.component';
import { CustomerInvoicesComponent } from './customer-invoices/customer-invoices.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { CustomerinfoComponent } from './customerinfo/customerinfo.component';
import { AwarenessCampaignComponent } from './awareness-campaign/awareness-campaign.component';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { SponsorRegisterComponent } from './sponsor-register/sponsor-register.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'redirect/:parent/redirect', component: UiCardComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: ':id/:branch', component: RegistrationComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'invite', component: InviteComponent },
  { path: 'profile-details', component: ProfileDetailsComponent },
  { path: 'show-tree-view/:parent/tree', component: ShowTreeViewComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'legal-doc', component: LegalDocumentComponent },
  { path: 'network', component: NetworkComponent },
  { path: 'apply-filter', component: ApplyFlitersComponent },
  { path: 'filter-result', component: FilterResultComponent },
  { path: 'my-earnings', component: EarningsComponent },
  { path: 'show-earnings', component: TotalEarningsComponent },
  { path: 'generate-E-pin', component: GenerateEpinComponent },
  { path: 'transfer-E-pin', component: TransferEpinComponent },
  { path: 'success-e-pin', component: SuccessEpinComponent },
  { path: 'UpgradeDetails', component: UpgradeSubscriptionComponent },
  { path: 'dashboard-al', component: DashboardWgComponent },
  { path: 'tree/:id/view', component: TreeviewWgComponent },
  { path: 'ComposeMessage', component: ComposemessageComponent },
  { path: 'GenerationTreeView', component: GenerationTreeComponent },
  { path: 'MyDirect', component: MyDirectComponent },
  { path: 'MyDownline', component: MyDownlineComponent },
  { path: 'GenerationDownline', component: GenerationDownlineComponent },
  { path: 'Idwisedownline', component: IdwisedownlineComponent },
  { path: 'TDSDetails', component: TDSDetailsComponent },
  { path: 'CommisionLedger', component: CommisionLedgerComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'redirect/:parent/redirect', component: UiCardComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: ':id/:branch', component: RegistrationComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'invite', component: InviteComponent },
  { path: 'profile-details', component: ProfileDetailsComponent },
  { path: 'show-tree-view/:parent/tree', component: ShowTreeViewComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'legal-doc', component: LegalDocumentComponent },
  { path: 'network', component: NetworkComponent },
  { path: 'apply-filter', component: ApplyFlitersComponent },
  { path: 'filter-result', component: FilterResultComponent },
  { path: 'my-earnings', component: EarningsComponent },
  { path: 'show-earnings', component: TotalEarningsComponent },
  { path: 'generate-E-pin', component: GenerateEpinComponent },
  { path: 'transfer-E-pin', component: TransferEpinComponent },
  { path: 'success-e-pin', component: SuccessEpinComponent },
  { path: 'upgrade', component: UpgradeSubscriptionComponent },
  { path: 'dashboard-al', component: DashboardWgComponent },
  { path: 'tree-al', component: TreeviewWgComponent },
  { path: 'ComposeMessage', component: ComposemessageComponent },
  { path: 'Inbox', component: InboxComponent },
  { path: 'Sent', component: SentComponent },
  { path: 'Folders', component: FoldersComponent },
  { path: 'CheckEpin', component: CheckEpinComponent },
  { path: 'MemberEpinLogin', component: MemberEpinLoginComponent },
  { path: 'EPinChangePassword', component: EPinChangePasswordComponent },
  { path: 'RankQualifiersReport', component: RankQualifiersReportComponent },
  { path: 'LevelReconcilationReport', component: LevelReconcilationReportComponent },
  { path: 'SchemeOfferDetailsReport', component: SchemeOfferDetailsReportComponent },
  { path: 'MatchingIncomeReconsulationReport', component: MatchingIncomeReconsulationReportComponent },
  { path: 'RenewalIncomeReconciliationReport', component: RenewalIncomeReconciliationReportComponent },
  { path: 'WelcomeLetterDetails', component: WelcomeLetterDetailsComponent },
  { path: 'ShowIdCardDetails', component: ShowIdCardDetailsComponent },
  { path: 'RenewalDetails', component: RenewalDetailsComponent },
  { path: 'customerChangepassword', component: CustomerChangepasswordComponent },
  { path: 'download', component: DownloadComponent },
  { path: 'CustomerKYCDocument', component: CustomerKYCDocumentComponent },
  { path: 'CustomerInvoices', component: CustomerInvoicesComponent },
  { path: 'OrderHistory', component: OrderHistoryComponent },
  { path: 'CustomerInvoices', component: CustomerInvoicesComponent },
  { path: 'Customerinfo', component: CustomerinfoComponent },
  { path: 'awarenes-campaign', component: AwarenessCampaignComponent },
  { path: 'bank-details', component: BankDetailsComponent },
  { path: 'SponsorRegister', component: SponsorRegisterComponent },
















];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
