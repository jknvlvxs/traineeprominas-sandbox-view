import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/service/api.service';
import { Course } from 'src/model/course';

@Component({
  selector: 'app-course-filtered',
  templateUrl: './course-filtered.component.html',
  styleUrls: ['./course-filtered.component.css']
})
export class CourseFilteredComponent implements OnInit {
  course: Course = { id: 0, name: '', period: 0, city: '', teacher: []};
  isLoadingResults = true;
  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    this.getCourse(this.route.snapshot.params.id);
  }

  getCourse(id) {
    this.api.getCourse(id)
      .subscribe(data => {
        this.isLoadingResults = false;
        if (data) {
        this.course = data[0];
        }
      });
  }

  deleteCourse(id) {
    this.isLoadingResults = true;
    this.api.deleteCourse(id)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/course']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }
}
