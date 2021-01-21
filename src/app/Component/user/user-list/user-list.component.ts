import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Model/user';
import { UserService } from 'src/app/Service/user.service';
import { SystemService } from 'src/app/Service/system.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  public title: string = 'Movie List';
  public user: User[] = [];
  public loggegInUser = new User();

  constructor(private userSvc: UserService, private sysSvc: SystemService) {}

  ngOnInit(): void {
    this.userSvc.getAll().subscribe(
      (resp) => {
        this.user = resp as User[];
        this.sysSvc.loggedInUser = this.loggegInUser;
        console.log('movies', this.user);
      },
      (err) => {
        console.log(err);
      }
    );
    //populate list of movies
  }
}
