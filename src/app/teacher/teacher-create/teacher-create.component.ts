import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-teacher-create',
  templateUrl: './teacher-create.component.html',
  styleUrls: ['./teacher-create.component.css']
})
export class TeacherCreateComponent implements OnInit {
  teacherForm: FormGroup;
  name = '';
  lastName = '';
  phd = false;
  isLoadingResults = false;
  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
     this.teacherForm = this.formBuilder.group({
    name : [null, Validators.required],
    lastName : [null, Validators.required],
    phd : [null, Validators.required]
  });
  }

  postTeacher(form: NgForm) {
    this.isLoadingResults = true;
    this.api.postTeacher(form)
      .subscribe(res => {
          // const id = res['id'];
          this.isLoadingResults = false;
          this.router.navigate(['/teacher'/*, id*/]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        });
  }
}
