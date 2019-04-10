import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Router} from '@angular/router';
import { User } from '../models/user-data.model'



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthenticationService]
})
export class LoginComponent implements OnInit {
  registerForm: FormGroup;
  user;
  private isLoggedIn: Boolean;
  private userName: string;
  users: any[] = [];

  constructor(public authService: AuthenticationService, private formBuilder: FormBuilder, private router: Router) {
    this.authService.user.subscribe(user => {
     if (user == null) {
       this.isLoggedIn = false;
     } else {
       this.isLoggedIn = true;
       this.userName = user.displayName;
     }
      console.log(user);
    });
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: '',
      password: ''
    });
  }

  login() {
    this.authService.login();
    this.authService.user.subscribe(user => {
     if (this.isLoggedIn === true) {
       this.addUser();
       this.router.navigate(['/user', this.userName]);
     }
   });
  }

  logout() {
    this.authService.logout();
  }

  emailLogin(value) {
    this.authService.emailLogin(value)
    .then(res => {
      console.log(res);
    }, err => {
      console.log(err);
    })
    this.authService.user.subscribe(user => {
     if (this.isLoggedIn === true) {
       this.addUser();
       this.router.navigate(['/user', this.userName]);
     }
   });
  }

  //make this method actually check all username keys
  addUser() {
    if (!this.users.includes(this.userName)) {
      this.users.push(new User(this.userName));
      console.log(this.users);
    }
  }
}
