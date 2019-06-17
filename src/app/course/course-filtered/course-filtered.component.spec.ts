import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseFilteredComponent } from './course-filtered.component';

describe('CourseFilteredComponent', () => {
  let component: CourseFilteredComponent;
  let fixture: ComponentFixture<CourseFilteredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseFilteredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseFilteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
