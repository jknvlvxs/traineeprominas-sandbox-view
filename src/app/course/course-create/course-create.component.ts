import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from 'src/service/api.service';
import { Teacher } from 'src/model/teacher';

@Component({
  selector: 'app-course-create',
  templateUrl: './course-create.component.html',
  styleUrls: ['./course-create.component.css']
})

export class CourseCreateComponent implements OnInit {
  dataSource: Teacher[];
  courseForm: FormGroup;
  name = '';
  period = 0;
  city = '';
  teacher: Teacher[];
  isLoadingResults = false;

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.getTeacher();
    this.courseForm = this.formBuilder.group({
      name : [null, Validators.required],
      period : [null],
      city : [null, Validators.required],
      teacher : [[]],
  });
}

  postCourse(form: NgForm) {
    this.isLoadingResults = true;
    this.api.postCourse(form)
      .subscribe(res => {
          // const id = res['id'];
          this.isLoadingResults = false;
          this.router.navigate(['/course'/*, id*/]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        });
  }

  getTeacher() {
    this.api.getTeachers()
    .subscribe(res => {
      this.dataSource = res;
      this.teacher = this.dataSource.map((item: Teacher) => {
        const teacher = new Teacher();
        teacher.id = item.id;
        teacher.name = item.name;
        teacher.lastName = item.lastName;
        teacher.phd = item.phd;
        return teacher;
      });
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }
}
