import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageDogsComponent } from './manage-dogs.component';

describe('ManageDogsComponent', () => {
  let component: ManageDogsComponent;
  let fixture: ComponentFixture<ManageDogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageDogsComponent]
    });
    fixture = TestBed.createComponent(ManageDogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
