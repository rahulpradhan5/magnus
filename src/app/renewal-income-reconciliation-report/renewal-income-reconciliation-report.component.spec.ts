import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenewalIncomeReconciliationReportComponent } from './renewal-income-reconciliation-report.component';

describe('RenewalIncomeReconciliationReportComponent', () => {
  let component: RenewalIncomeReconciliationReportComponent;
  let fixture: ComponentFixture<RenewalIncomeReconciliationReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenewalIncomeReconciliationReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenewalIncomeReconciliationReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
