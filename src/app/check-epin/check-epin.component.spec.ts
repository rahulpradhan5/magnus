import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckEpinComponent } from './check-epin.component';

describe('CheckEpinComponent', () => {
  let component: CheckEpinComponent;
  let fixture: ComponentFixture<CheckEpinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckEpinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckEpinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
