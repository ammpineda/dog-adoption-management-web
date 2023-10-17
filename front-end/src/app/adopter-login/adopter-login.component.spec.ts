import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdopterLoginComponent } from './adopter-login.component';

describe('AdopterLoginComponent', () => {
  let component: AdopterLoginComponent;
  let fixture: ComponentFixture<AdopterLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdopterLoginComponent]
    });
    fixture = TestBed.createComponent(AdopterLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
