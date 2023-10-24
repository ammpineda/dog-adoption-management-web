import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowApplicationDetailsComponent } from './show-application-details.component';

describe('ShowApplicationDetailsComponent', () => {
  let component: ShowApplicationDetailsComponent;
  let fixture: ComponentFixture<ShowApplicationDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowApplicationDetailsComponent]
    });
    fixture = TestBed.createComponent(ShowApplicationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
