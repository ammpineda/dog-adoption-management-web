import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAdopterDetailsComponent } from './manage-adopter-details.component';

describe('ManageAdopterDetailsComponent', () => {
  let component: ManageAdopterDetailsComponent;
  let fixture: ComponentFixture<ManageAdopterDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageAdopterDetailsComponent]
    });
    fixture = TestBed.createComponent(ManageAdopterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
