import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Router} from '@angular/router';



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
  private userName: String;

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
       this.router.navigate(['/user', this.userName]);
     }
   });
  }
}
