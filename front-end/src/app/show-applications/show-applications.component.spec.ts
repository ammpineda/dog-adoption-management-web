import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowApplicationsComponent } from './show-applications.component';

describe('ShowApplicationsComponent', () => {
  let component: ShowApplicationsComponent;
  let fixture: ComponentFixture<ShowApplicationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowApplicationsComponent]
    });
    fixture = TestBed.createComponent(ShowApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
