import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';

import { UsersComponent } from './user/users/users.component';
import { UserFilteredComponent } from './user/user-filtered/user-filtered.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserUpdateComponent } from './user/user-update/user-update.component';
import { TeachersComponent } from './teacher/teachers/teachers.component';
import { TeacherCreateComponent } from './teacher/teacher-create/teacher-create.component';
import { TeacherUpdateComponent } from './teacher/teacher-update/teacher-update.component';
import { TeacherFilteredComponent } from './teacher/teacher-filtered/teacher-filtered.component';
import { CoursesComponent } from './course/courses/courses.component';
import { CourseCreateComponent } from './course/course-create/course-create.component';
import { CourseUpdateComponent } from './course/course-update/course-update.component';
import { CourseFilteredComponent } from './course/course-filtered/course-filtered.component';
import { StudentsComponent } from './student/students/students.component';
import { StudentCreateComponent } from './student/student-create/student-create.component';
import { StudentUpdateComponent } from './student/student-update/student-update.component';
import { StudentFilteredComponent } from './student/student-filtered/student-filtered.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserFilteredComponent,
    UserCreateComponent,
    UserUpdateComponent,
    TeachersComponent,
    TeacherCreateComponent,
    TeacherUpdateComponent,
    TeacherFilteredComponent,
    CoursesComponent,
    CourseCreateComponent,
    CourseUpdateComponent,
    CourseFilteredComponent,
    StudentsComponent,
    StudentCreateComponent,
    StudentUpdateComponent,
    StudentFilteredComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
