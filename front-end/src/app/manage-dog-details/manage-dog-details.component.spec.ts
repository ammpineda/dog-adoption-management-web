import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageDogDetailsComponent } from './manage-dog-details.component';

describe('ManageDogDetailsComponent', () => {
  let component: ManageDogDetailsComponent;
  let fixture: ComponentFixture<ManageDogDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageDogDetailsComponent]
    });
    fixture = TestBed.createComponent(ManageDogDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
