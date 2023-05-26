import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GivePackageComponent } from './give-package.component';

describe('GivePackageComponent', () => {
  let component: GivePackageComponent;
  let fixture: ComponentFixture<GivePackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GivePackageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GivePackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
