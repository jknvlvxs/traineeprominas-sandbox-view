import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from 'src/service/api.service';
import { Course } from 'src/model/course';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {
  dataSource: Course[];
  studentForm: FormGroup;
  name = '';
  lastName = '';
  age = 0;
  course: Course[];
  isLoadingResults = false;

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.getCourse();
    this.studentForm = this.formBuilder.group({
      name : [null, Validators.required],
      lastName : [null, Validators.required],
      age : [null, Validators.required],
      course : [[]],
  });
}

  postStudent(form: NgForm) {
    this.isLoadingResults = true;
    this.api.postStudent(form)
      .subscribe(res => {
          // const id = res['id'];
          this.isLoadingResults = false;
          this.router.navigate(['/student'/*, id*/]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        });
  }

  getCourse() {
    this.api.getCourses()
    .subscribe(res => {
      this.dataSource = res;
      this.course = this.dataSource.map((item: Course) => {
        const course = new Course();
        course.id = item.id;
        course.name = item.name;
        course.period = item.period;
        course.city = item.city;
        course.teacher = item.teacher;
        return course;
      });
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }
}
