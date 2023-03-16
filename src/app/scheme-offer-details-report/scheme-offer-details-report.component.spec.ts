import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemeOfferDetailsReportComponent } from './scheme-offer-details-report.component';

describe('SchemeOfferDetailsReportComponent', () => {
  let component: SchemeOfferDetailsReportComponent;
  let fixture: ComponentFixture<SchemeOfferDetailsReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchemeOfferDetailsReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchemeOfferDetailsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
