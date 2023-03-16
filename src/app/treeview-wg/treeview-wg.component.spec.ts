import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeviewWgComponent } from './treeview-wg.component';

describe('TreeviewWgComponent', () => {
  let component: TreeviewWgComponent;
  let fixture: ComponentFixture<TreeviewWgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreeviewWgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreeviewWgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
