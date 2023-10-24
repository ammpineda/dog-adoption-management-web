import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDogDetailsComponent } from './show-dog-details.component';

describe('ShowDogDetailsComponent', () => {
  let component: ShowDogDetailsComponent;
  let fixture: ComponentFixture<ShowDogDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowDogDetailsComponent]
    });
    fixture = TestBed.createComponent(ShowDogDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
