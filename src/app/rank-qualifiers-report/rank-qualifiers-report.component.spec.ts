import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankQualifiersReportComponent } from './rank-qualifiers-report.component';

describe('RankQualifiersReportComponent', () => {
  let component: RankQualifiersReportComponent;
  let fixture: ComponentFixture<RankQualifiersReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RankQualifiersReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RankQualifiersReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
