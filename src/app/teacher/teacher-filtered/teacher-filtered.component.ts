import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/service/api.service';
import { Teacher } from 'src/model/teacher';

@Component({
  selector: 'app-teacher-filtered',
  templateUrl: './teacher-filtered.component.html',
  styleUrls: ['./teacher-filtered.component.css']
})
export class TeacherFilteredComponent implements OnInit {
  teacher: Teacher = { id: 0, name: '', lastName: '', phd: false};
  isLoadingResults = true;
  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    this.getTeacher(this.route.snapshot.params.id);
  }

  getTeacher(id) {
    this.api.getTeacher(id)
      .subscribe(data => {
        this.isLoadingResults = false;
        if (data) {
          this.teacher = data[0];
        }
      });
  }

  deleteTeacher(id) {
    this.isLoadingResults = true;
    this.api.deleteTeacher(id)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/teacher']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }
}
