import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerationDownlineComponent } from './generation-downline.component';

describe('GenerationDownlineComponent', () => {
  let component: GenerationDownlineComponent;
  let fixture: ComponentFixture<GenerationDownlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerationDownlineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerationDownlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
