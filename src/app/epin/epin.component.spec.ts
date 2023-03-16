import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpinComponent } from './epin.component';

describe('EpinComponent', () => {
  let component: EpinComponent;
  let fixture: ComponentFixture<EpinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EpinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
