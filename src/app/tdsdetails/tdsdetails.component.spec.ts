import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TDSDetailsComponent } from './tdsdetails.component';

describe('TDSDetailsComponent', () => {
  let component: TDSDetailsComponent;
  let fixture: ComponentFixture<TDSDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TDSDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TDSDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
