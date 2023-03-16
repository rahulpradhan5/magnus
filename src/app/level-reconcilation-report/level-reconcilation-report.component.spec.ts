import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelReconcilationReportComponent } from './level-reconcilation-report.component';

describe('LevelReconcilationReportComponent', () => {
  let component: LevelReconcilationReportComponent;
  let fixture: ComponentFixture<LevelReconcilationReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevelReconcilationReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LevelReconcilationReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
