import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { User } from '../models/user-data.model'
import { UserService } from '../user.service'



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthenticationService, UserService ]
})
export class LoginComponent implements OnInit {
  registerForm: FormGroup;
  user;
  public currentUser: User;
  private isLoggedIn: Boolean;
  private username: string;
  users: FirebaseListObservable<any[]>;
  subscription;

  constructor(public authService: AuthenticationService, private formBuilder: FormBuilder, private router: Router, public userService: UserService) {
    this.authService.user.subscribe(user => {
     if (user == null) {
       this.isLoggedIn = false;
     } else {
       this.isLoggedIn = true;
       this.username = user.displayName;
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
       this.router.navigate(['/user', this.username]);
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
    });
    this.authService.user.subscribe(user => {
     if (this.isLoggedIn === true) {
       this.addUser();
       this.router.navigate(['/user', this.username]);
     }
   });
  }

  // make this method actually check all username keys
  addUser() {
    let allUserNames: any[] = [];
    this.subscription = this.userService.getUsers().subscribe( list => {
      console.log("userlist", list);

      list.forEach((user) => {
        allUserNames.push(user.username);
        console.log("allusernames", allUserNames);
      });

      if (allUserNames.includes(this.username)) {
        console.log("notNew");
        this.subscription.unsubscribe();
      }
      else{
        let newUser = new User(this.username, [""], [""]);
        console.log("newUser", newUser.library);
        this.userService.addUserToDB(newUser);
        this.subscription.unsubscribe();
      }
    })
  }
}
