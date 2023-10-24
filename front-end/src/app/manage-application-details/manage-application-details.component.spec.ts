import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageApplicationDetailsComponent } from './manage-application-details.component';

describe('ManageApplicationDetailsComponent', () => {
  let component: ManageApplicationDetailsComponent;
  let fixture: ComponentFixture<ManageApplicationDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageApplicationDetailsComponent]
    });
    fixture = TestBed.createComponent(ManageApplicationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
