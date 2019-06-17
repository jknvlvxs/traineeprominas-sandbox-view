import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../service/api.service';
import { Teacher } from 'src/model/teacher';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {
  displayedColumns: string[] = [ 'id', 'name', 'lastName', 'phd', 'action'];
  dataSource: Teacher[];
  isLoadingResults = true;

  constructor(private _api: ApiService) { }

  ngOnInit() {
    this._api.getTeachers()
    .subscribe(res => {
      this.dataSource = res;
      console.log(this.dataSource);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

}
