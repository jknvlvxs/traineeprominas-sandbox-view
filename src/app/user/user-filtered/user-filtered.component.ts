import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/service/api.service';
import { User } from 'src/model/user';

@Component({
  selector: 'app-user-filtered',
  templateUrl: './user-filtered.component.html',
  styleUrls: ['./user-filtered.component.css']
})
export class UserFilteredComponent implements OnInit {
  user: User = { id: 0, name: '', lastName: '', profile: ''};
  isLoadingResults = true;
  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    this.getUser(this.route.snapshot.params.id);
  }

  getUser(id) {
    this.api.getUser(id)
      .subscribe(data => {
        this.user = data;
        this.isLoadingResults = false;
      });
  }

  deleteProduto(id) {
    this.isLoadingResults = true;
    this.api.deleteUser(id)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/user']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }
}
