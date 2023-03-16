import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberEpinLoginComponent } from './member-epin-login.component';

describe('MemberEpinLoginComponent', () => {
  let component: MemberEpinLoginComponent;
  let fixture: ComponentFixture<MemberEpinLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberEpinLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemberEpinLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
