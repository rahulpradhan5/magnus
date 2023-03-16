import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FixedTemplateComponent } from './fixed-template/fixed-template.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 

const routes: Routes = [
   {path: 'vaibhav', component: FixedTemplateComponent},
];

@NgModule({
  declarations: [
    FixedTemplateComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule // Add HttpClientModule to the imports array
  ]
})
export class DashboardRoutesModule { }
