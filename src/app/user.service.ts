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

        if (signedIn.displayName === user.username) {
          this.currentUser = user;
        }
      });
      console.log("current", this.currentUser);
    });
    return this.currentUser;
  }

  addUserToDB(newUser) {
    this.users.push(newUser);
  }

  addCardToUserLibrary(newCard) {
    this.getCurrentUser();
    setTimeout(() => {
      console.log("username again" , this.currentUser);
      let library = this.currentUser.library;
      library.push(newCard);
      let ref = firebase.database().ref(`users/`)
      ref.once("value").then((snapshot) => {
        var key = snapshot.key;
        var childKey = snapshot.child(`${library}`).key;
        var newLibrary = firebase.database().ref().child(`${library}`).push().key;
         console.log("library", library);
        console.log("newlibrary", newLibrary);
        console.log("key", key);
        console.log("child key", childKey);
        var updates = {};
        updates[`/users/` + `/library/` + `${library}` + `/` + newLibrary] = library;
        return firebase.database().ref().update(updates);
      });
    }, 200);

  }

  removeUser(){}


}
