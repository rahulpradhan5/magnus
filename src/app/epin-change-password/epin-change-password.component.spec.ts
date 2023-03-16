import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EPinChangePasswordComponent } from './epin-change-password.component';

describe('EPinChangePasswordComponent', () => {
  let component: EPinChangePasswordComponent;
  let fixture: ComponentFixture<EPinChangePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EPinChangePasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EPinChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
