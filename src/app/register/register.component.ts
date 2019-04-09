import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { AuthenticationService } from '../authentication.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [AuthenticationService]
})
export class RegisterComponent implements OnInit {
  errorMessage;
  successMessage;

  constructor(public authService: AuthenticationService) { }

  ngOnInit() {
  }

  tryRegister(value){
  this.authService.doRegister(value)
  .then(res => {
    console.log(res);
    this.errorMessage = "";
    this.successMessage = "Your account has been created";
  }, err => {
    console.log(err);
    this.errorMessage = err.message;
    this.successMessage = "";
  })
}

}
