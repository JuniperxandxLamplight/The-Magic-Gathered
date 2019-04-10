import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from "firebase";


@Injectable()
export class UserService {
  users: FirebaseListObservable<any[]>;
  currentUser;
  constructor(private af: AngularFireDatabase) {
    this.users = af.list('users');
  }

  getUsers() {
    return this.users;
  }

  getCurrentUser() {
    let signedIn = firebase.auth().currentUser;
    let list = this.getUsers().subscribe(list => {
        list.forEach((user) => {
          console.log("sign in display", signedIn.displayName);
          console.log("username", user.username);

          if (signedIn.displayName === user.username) {
            this.currentUser = user;
          }
        });
        console.log("current", this.currentUser);
      })
  }

  addUserToDB(newUser) {
    this.users.push(newUser);
  }

  removeUser(){}


}
