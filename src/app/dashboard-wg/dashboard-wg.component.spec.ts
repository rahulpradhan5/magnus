import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardWgComponent } from './dashboard-wg.component';

describe('DashboardWgComponent', () => {
  let component: DashboardWgComponent;
  let fixture: ComponentFixture<DashboardWgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardWgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardWgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
