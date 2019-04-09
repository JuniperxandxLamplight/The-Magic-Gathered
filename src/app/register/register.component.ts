import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { AuthenticationService } from '../authentication.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [AuthenticationService]
})

export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  errorMessage;
  successMessage;
  loginSuccess = null;

  constructor(public authService: AuthenticationService, private formBuilder: FormBuilder, private router: Router) { }

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
      this.router.navigate(['/user', value.username]);
    }, err => {
      console.log(err);
      this.errorMessage = err.message;
      this.successMessage = "";
    })
  }
}
