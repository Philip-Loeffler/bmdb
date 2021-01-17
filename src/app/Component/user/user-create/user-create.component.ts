import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Model/user';
import { UserService } from 'src/app/Service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css'],
})
export class UserCreateComponent implements OnInit {
  title = 'User Create';
  user: User = new User();
  submitBtnTitle = 'Create';
  constructor(private userSvc: UserService, private router: Router) {}

  ngOnInit(): void {}

  save() {
    this.userSvc.create(this.user).subscribe(
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
