import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposemessageComponent } from './composemessage.component';

describe('ComposemessageComponent', () => {
  let component: ComposemessageComponent;
  let fixture: ComponentFixture<ComposemessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComposemessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComposemessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
