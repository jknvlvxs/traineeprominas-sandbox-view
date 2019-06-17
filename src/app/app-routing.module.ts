import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './user/users/users.component';
import { UserFilteredComponent } from './user/user-filtered/user-filtered.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserUpdateComponent } from './user/user-update/user-update.component';

import { TeachersComponent } from './teacher/teachers/teachers.component';
import { TeacherFilteredComponent } from './teacher/teacher-filtered/teacher-filtered.component';
import { TeacherCreateComponent } from './teacher/teacher-create/teacher-create.component';
import { TeacherUpdateComponent } from './teacher/teacher-update/teacher-update.component';
import { CoursesComponent } from './course/courses/courses.component';
import { CourseFilteredComponent } from './course/course-filtered/course-filtered.component';
import { CourseCreateComponent } from './course/course-create/course-create.component';
import { CourseUpdateComponent } from './course/course-update/course-update.component';
import { StudentsComponent } from './student/students/students.component';
import { StudentFilteredComponent } from './student/student-filtered/student-filtered.component';
import { StudentCreateComponent } from './student/student-create/student-create.component';
import { StudentUpdateComponent } from './student/student-update/student-update.component';



const routes: Routes = [
  {
    path: 'user',
    component: UsersComponent,
    data: { title: 'Lista de Usuários' }
  },
  {
    path: 'user/:id',
    component: UserFilteredComponent,
    data: { title: 'Usuário' }
  },
  {
    path: 'create/user',
    component: UserCreateComponent,
    data: { title: 'Adicionar Usuário' }
  },
  {
    path: 'update/user/:id',
    component: UserUpdateComponent,
    data: { title: 'Editar Usuário' }
  },
  { path: '',
    redirectTo: '/user',
    pathMatch: 'full'
  },
  //
  {
    path: 'teacher',
    component: TeachersComponent,
    data: { title: 'Lista de Professores' }
  },
  {
    path: 'teacher/:id',
    component: TeacherFilteredComponent,
    data: { title: 'Professor' }
  },
  {
    path: 'create/teacher',
    component: TeacherCreateComponent,
    data: { title: 'Adicionar Professor' }
  },
  {
    path: 'update/teacher/:id',
    component: TeacherUpdateComponent,
    data: { title: 'Editar Professor' }
  },
  { path: '',
    redirectTo: '/teacher',
    pathMatch: 'full'
  },
  //
  {
    path: 'course',
    component: CoursesComponent,
    data: { title: 'Lista de Cursos' }
  },
  {
    path: 'course/:id',
    component: CourseFilteredComponent,
    data: { title: 'Curso' }
  },
  {
    path: 'create/course',
    component: CourseCreateComponent,
    data: { title: 'Adicionar Curso' }
  },
  {
    path: 'update/course/:id',
    component: CourseUpdateComponent,
    data: { title: 'Editar Curso' }
  },
  { path: '',
    redirectTo: '/course',
    pathMatch: 'full'
  },
  //
  {
    path: 'student',
    component: StudentsComponent,
    data: { title: 'Lista de Estudantes' }
  },
  {
    path: 'student/:id',
    component: StudentFilteredComponent,
    data: { title: 'Estudante' }
  },
  {
    path: 'create/student',
    component: StudentCreateComponent,
    data: { title: 'Adicionar Estudante' }
  },
  {
    path: 'update/student/:id',
    component: StudentUpdateComponent,
    data: { title: 'Editar Estudante' }
  },
  { path: '',
    redirectTo: '/student',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
