import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeLetterDetailsComponent } from './welcome-letter-details.component';

describe('WelcomeLetterDetailsComponent', () => {
  let component: WelcomeLetterDetailsComponent;
  let fixture: ComponentFixture<WelcomeLetterDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeLetterDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomeLetterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
