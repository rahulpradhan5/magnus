import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidemenuNavbarComponent } from './sidemenu-navbar.component';

describe('SidemenuNavbarComponent', () => {
  let component: SidemenuNavbarComponent;
  let fixture: ComponentFixture<SidemenuNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidemenuNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidemenuNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
