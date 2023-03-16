import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommisionLedgerComponent } from './commision-ledger.component';

describe('CommisionLedgerComponent', () => {
  let component: CommisionLedgerComponent;
  let fixture: ComponentFixture<CommisionLedgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommisionLedgerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommisionLedgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
