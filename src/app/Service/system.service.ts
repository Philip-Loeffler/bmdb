import { Injectable } from '@angular/core';
import { User } from '../Model/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SystemService {
  loggedInUser: User = null;
  constructor(private router: Router) {}

  checklogin(): void {
    if (this.loggedInUser == null) {
      this.router.navigateByUrl('/user-login');
    }
  }
}
