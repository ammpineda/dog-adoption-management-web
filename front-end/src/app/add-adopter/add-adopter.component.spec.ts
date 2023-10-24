import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdopterComponent } from './add-adopter.component';

describe('AddAdopterComponent', () => {
  let component: AddAdopterComponent;
  let fixture: ComponentFixture<AddAdopterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddAdopterComponent]
    });
    fixture = TestBed.createComponent(AddAdopterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
