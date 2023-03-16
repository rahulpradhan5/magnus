import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowIdCardDetailsComponent } from './show-id-card-details.component';

describe('ShowIdCardDetailsComponent', () => {
  let component: ShowIdCardDetailsComponent;
  let fixture: ComponentFixture<ShowIdCardDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowIdCardDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowIdCardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
