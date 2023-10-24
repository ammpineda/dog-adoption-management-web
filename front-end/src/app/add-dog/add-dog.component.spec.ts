import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDogComponent } from './add-dog.component';

describe('AddDogComponent', () => {
  let component: AddDogComponent;
  let fixture: ComponentFixture<AddDogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddDogComponent]
    });
    fixture = TestBed.createComponent(AddDogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
