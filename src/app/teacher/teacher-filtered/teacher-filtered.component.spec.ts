import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherFilteredComponent } from './teacher-filtered.component';

describe('TeacherFilteredComponent', () => {
  let component: TeacherFilteredComponent;
  let fixture: ComponentFixture<TeacherFilteredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherFilteredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherFilteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
