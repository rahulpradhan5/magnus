import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tree1AlComponent } from './tree1-al.component';

describe('Tree1AlComponent', () => {
  let component: Tree1AlComponent;
  let fixture: ComponentFixture<Tree1AlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tree1AlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tree1AlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
