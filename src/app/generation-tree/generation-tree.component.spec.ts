import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerationTreeComponent } from './generation-tree.component';

describe('GenerationTreeComponent', () => {
  let component: GenerationTreeComponent;
  let fixture: ComponentFixture<GenerationTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerationTreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerationTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
