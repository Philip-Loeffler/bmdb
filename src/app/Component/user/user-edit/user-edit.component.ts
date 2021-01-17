import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Model/user';
import { UserService } from 'src/app/Service/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
})
export class UserEditComponent implements OnInit {
  title: string = 'User edit';
  user: User = null;
  userId: number = 0;
  submitBtnTitle = 'save';
  //activated route lets us get the id
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
  save() {
    this.userService.update(this.user).subscribe(
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
