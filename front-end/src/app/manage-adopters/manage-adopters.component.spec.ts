import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAdoptersComponent } from './manage-adopters.component';

describe('ManageAdoptersComponent', () => {
  let component: ManageAdoptersComponent;
  let fixture: ComponentFixture<ManageAdoptersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageAdoptersComponent]
    });
    fixture = TestBed.createComponent(ManageAdoptersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
