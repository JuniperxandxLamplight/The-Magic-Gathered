import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user-data.model';
import { UserService } from '../user.service';




@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss'],
  providers: [UserService]
})
export class LibraryComponent implements OnInit {
  @Input() currentUser: User;
  constructor(private userService: UserService) { }

  ngOnInit() {

  }
}