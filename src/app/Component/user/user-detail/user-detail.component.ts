import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Model/user';
import { UserService } from 'src/app/Service/user.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
  title: string = 'User detail';
  user: User = null;
  userId: number = 0;
  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => (this.userId = params['id']));

    this.userService.getById(this.userId).subscribe(
      (resp) => {
        this.user = resp as User;
        console.log(this.user.id);
        console.log('movies', this.user);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  delete() {
    this.userService.delete(this.user.id).subscribe(
      (resp) => {
        this.user = resp as User;
        console.log('movies', this.user);
        this.router.navigateByUrl('/movie-list');
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
