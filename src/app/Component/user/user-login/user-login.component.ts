import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Model/user';
import { UserService } from 'src/app/Service/user.service';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/Service/system.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {
  title: string = 'login';
  msg: string = '';
  user: User = new User();
  constructor(
    private userService: UserService,
    private router: Router,
    private sysSvc: SystemService
  ) {}

  ngOnInit(): void {}

  login() {
    this.userService.login(this.user).subscribe(
      (resp) => {
        if (resp == null) {
          this.msg = 'invalid username';
        } else {
          this.sysSvc.loggedInUser = this.user;
          this.user = resp as User;
          this.router.navigateByUrl('/movie-list');
        }
      },
      (err) => {
        console.log(err);
        this.msg = 'error during login';
      }
    );
  }
}
