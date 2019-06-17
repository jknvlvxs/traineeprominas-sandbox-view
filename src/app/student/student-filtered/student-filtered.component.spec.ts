import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFilteredComponent } from './student-filtered.component';

describe('StudentFilteredComponent', () => {
  let component: StudentFilteredComponent;
  let fixture: ComponentFixture<StudentFilteredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentFilteredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentFilteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
