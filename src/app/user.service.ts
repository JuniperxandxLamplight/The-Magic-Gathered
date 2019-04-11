import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from "firebase";


@Injectable()
export class UserService {
  users: FirebaseListObservable<any[]>;
  library: FirebaseListObservable<any[]>;
  currentUser;
  constructor(private af: AngularFireDatabase) {
    this.users = af.list('users');
    this.library = af.list('library');
  }

  getUsers() {
    return this.users;
  }

  getCurrentUser() {
    // let signedIn = firebase.auth().currentUser;
    // let list = this.getUsers();
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

  getLibrary() {
    return this.library;
  }

  //Instead of pulling down all users and data, create libraries that have an id associated with the individual USER and search through that to match up

  addCardToUserLibrary(newCard) {
    this.getLibrary();
    setTimeout(() => {
      console.log("username again" , this.currentUser);
      let library = this.library;
      library.push(newCard);
      let ref = firebase.database().ref(`users/`)
      console.log("ref", ref)
      ref.once("value").then((snapshot) => {
        var key = snapshot.key;
        var childKey = snapshot.child(`${library}`).key;
        var library = firebase.database().ref().child(`${library}`).push().key;
         console.log("library", library);
        console.log("newlibrary", newCard);
        console.log("key", key);
        console.log("child key", childKey);
        var updates = {};
        updates[`/library/` + `${library}`] = newCard;
        return firebase.database().ref().update(updates);
      });
    }, 200);
  }

  removeUser(){}
}
