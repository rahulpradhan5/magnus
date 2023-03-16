import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedTemplateComponent } from './fixed-template.component';

describe('FixedTemplateComponent', () => {
  let component: FixedTemplateComponent;
  let fixture: ComponentFixture<FixedTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixedTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FixedTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
