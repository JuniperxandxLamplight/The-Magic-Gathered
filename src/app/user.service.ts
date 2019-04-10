import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class UserService {
  users: FirebaseListObservable<any[]>;

  constructor(private af: AngularFireDatabase) {
    this.users = af.list('users');
  }

  getUsers() {
    return this.users;
  }

  addUserToDB(newUser) {
    this.users.push(newUser);
  }

  removeUser(){}

  //only for testing, do not want as a production feature
  clearAll() {
    this.af.object('/users/').remove();
  }

}
