import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdwisedownlineComponent } from './idwisedownline.component';

describe('IdwisedownlineComponent', () => {
  let component: IdwisedownlineComponent;
  let fixture: ComponentFixture<IdwisedownlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdwisedownlineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdwisedownlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
