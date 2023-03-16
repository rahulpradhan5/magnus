import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerKYCDocumentComponent } from './customer-kycdocument.component';

describe('CustomerKYCDocumentComponent', () => {
  let component: CustomerKYCDocumentComponent;
  let fixture: ComponentFixture<CustomerKYCDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerKYCDocumentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerKYCDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
