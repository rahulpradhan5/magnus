import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwarenessCampaignComponent } from './awareness-campaign.component';

describe('AwarenessCampaignComponent', () => {
  let component: AwarenessCampaignComponent;
  let fixture: ComponentFixture<AwarenessCampaignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwarenessCampaignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AwarenessCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
