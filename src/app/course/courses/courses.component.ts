import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../../service/api.service';
import { Course } from 'src/model/course';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  displayedColumns: string[] = [ 'id', 'name', 'period', 'city', 'teacher', 'action'];
  dataSource: MatTableDataSource<Course>;
  isLoadingResults = true;

  constructor(private _api: ApiService) { }

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this._api.getCourses()
    .subscribe(res => {
      this.dataSource = new MatTableDataSource<Course>(res);
      this.dataSource.paginator = this.paginator;
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

}
