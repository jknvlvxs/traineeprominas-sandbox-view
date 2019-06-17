import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFilteredComponent } from './user-filtered.component';

describe('UserFilteredComponent', () => {
  let component: UserFilteredComponent;
  let fixture: ComponentFixture<UserFilteredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFilteredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFilteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
