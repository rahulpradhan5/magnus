import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenewalDetailsComponent } from './renewal-details.component';

describe('RenewalDetailsComponent', () => {
  let component: RenewalDetailsComponent;
  let fixture: ComponentFixture<RenewalDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenewalDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenewalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
