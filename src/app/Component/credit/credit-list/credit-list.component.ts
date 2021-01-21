import { Component, OnInit } from '@angular/core';
import { Credit } from '../../../Model/credit';
import { CreditService } from '../../../service/credit.service';
import { SystemService } from 'src/app/Service/system.service';
import { User } from 'src/app/Model/user';
@Component({
  selector: 'app-credit-list',
  templateUrl: './credit-list.component.html',
  styleUrls: ['./credit-list.component.css'],
})
export class CreditListComponent implements OnInit {
  title = 'Credit List';
  credits: Credit[] = [];
  user: User = new User();

  constructor(
    private creditSvc: CreditService,
    private sysSvc: SystemService
  ) {}

  ngOnInit(): void {
    //populate list of credits
    this.creditSvc.getAll().subscribe(
      (resp) => {
        this.credits = resp as Credit[];
        this.sysSvc.loggedInUser = this.user;
        console.log('Credits', this.credits);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
