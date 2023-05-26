import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectimcomeComponent } from './directimcome.component';

describe('DirectimcomeComponent', () => {
  let component: DirectimcomeComponent;
  let fixture: ComponentFixture<DirectimcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectimcomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectimcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
