import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchingIncomeReconsulationReportComponent } from './matching-income-reconsulation-report.component';

describe('MatchingIncomeReconsulationReportComponent', () => {
  let component: MatchingIncomeReconsulationReportComponent;
  let fixture: ComponentFixture<MatchingIncomeReconsulationReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchingIncomeReconsulationReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchingIncomeReconsulationReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
