import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDogsComponent } from './show-dogs.component';

describe('ShowDogsComponent', () => {
  let component: ShowDogsComponent;
  let fixture: ComponentFixture<ShowDogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowDogsComponent]
    });
    fixture = TestBed.createComponent(ShowDogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
