import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageGiveComponent } from './package-give.component';

describe('PackageGiveComponent', () => {
  let component: PackageGiveComponent;
  let fixture: ComponentFixture<PackageGiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackageGiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackageGiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
