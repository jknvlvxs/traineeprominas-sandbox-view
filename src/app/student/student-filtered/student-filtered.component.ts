import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/service/api.service';
import { Student } from 'src/model/student';

@Component({
  selector: 'app-student-filtered',
  templateUrl: './student-filtered.component.html',
  styleUrls: ['./student-filtered.component.css']
})
export class StudentFilteredComponent implements OnInit {
  student: Student = { id: 0, name: '', lastName: '', age: 0, course: []};
  isLoadingResults = true;
  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    this.getStudent(this.route.snapshot.params.id);
  }

  getStudent(id) {
    this.api.getStudent(id)
      .subscribe(data => {
        this.isLoadingResults = false;
        if (data) {
        this.student = data[0];
        }
      });
  }

  deleteStudent(id) {
    this.isLoadingResults = true;
    this.api.deleteStudent(id)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/student']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }
}
