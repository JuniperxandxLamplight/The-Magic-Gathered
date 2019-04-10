import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { AuthenticationService } from '../authentication.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service'
import { User } from '../models/user-data.model'





@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [AuthenticationService, UserService]
})

export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  errorMessage;
  successMessage;
  loginSuccess = null;
  private username: string;

  constructor(public authService: AuthenticationService, private formBuilder: FormBuilder, private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: '',
      password: '',
      username: ''
    });
  }

  tryRegister(value){
    console.log(value);
    this.authService.doRegister(value)
    .then(res => {
      console.log("try register res", res);
      this.loginSuccess = true;
      this.errorMessage = "";
      this.successMessage = alert("Your account has been created");
      this.addUser(value.username);
      this.router.navigate(['/user', value.username]);
    }, err => {
      console.log(err);
      this.errorMessage = err.message;
      this.successMessage = "";
    })
  }

  addUser(name) {
    let newUser = new User(name, [""], [""]);
    console.log("newUser", newUser.library);
    this.userService.addUserToDB(newUser);
    // let allUserNames: any[] = [];
    // this.userService.getUsers().subscribe( list => {
    //   console.log("userlist", list);
    //
    //   list.forEach((user) => {
    //     allUserNames.push(user.username);
    //     console.log("allusernames", allUserNames);
    //   });
    //
    //   if (allUserNames.includes(this.username)) {
    //     console.log("notNew");
    //   }
    //   else{
    //     let newUser = new User(this.username, [], []);
    //     console.log("newUser", newUser.library);
    //     this.userService.addUserToDB(newUser);
    //   }
    // })
  }
}
