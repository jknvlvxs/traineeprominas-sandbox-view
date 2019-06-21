import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../../service/api.service';
import { User } from 'src/model/user';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  displayedColumns: string[] = [ 'id', 'name', 'lastName', 'profile', 'action'];
  dataSource: MatTableDataSource<User>;
  isLoadingResults = true;

  constructor(private api: ApiService) { }

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.api.getUsers()
    .subscribe(res => {
      this.dataSource = new MatTableDataSource<User>(res);
      this.dataSource.paginator = this.paginator;
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

    applyFilter(filterValue: string) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
}
