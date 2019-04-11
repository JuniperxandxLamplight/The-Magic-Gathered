import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import * as firebase from "firebase";
import { User } from '../models/user-data.model';




@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [AuthenticationService, UserService]
})
export class UserComponent implements OnInit {
  currentUser: User;

  constructor(public authService: AuthenticationService, private router: Router, public userService: UserService) { }

  ngOnInit() {
    this.getCurrentUserOb();
  }

  ngDoCheck() {
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  getCurrentUserOb() {
    this.currentUser = this.userService.getCurrentUser();
    console.log(this.currentUser);
  }
}
