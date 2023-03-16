import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDownlineComponent } from './my-downline.component';

describe('MyDownlineComponent', () => {
  let component: MyDownlineComponent;
  let fixture: ComponentFixture<MyDownlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyDownlineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyDownlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
