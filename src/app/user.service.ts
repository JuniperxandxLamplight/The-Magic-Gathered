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
      });
  }

  addUserToDB(newUser) {
    this.users.push(newUser);
  }

  async addCardToUserLibrary(newCard) {
    this.getCurrentUser();
    setTimeout(() => {
      console.log("username again" , this.currentUser);
      let library = this.currentUser.library;
      library.push(newCard);
      let ref = firebase.database().ref(`users/`);
      ref.once("value").then((snapshot) => {
        var key = snapshot.key;
        var childKey = snapshot.child(`${library}`).key; // "last"
        console.log("username agina agn", library);
        console.log("name", key);
        console.log("name", childKey);
        console.log("user", ref);
      })

    }, 200);
    // let signedIn = firebase.auth().currentUser;
    // let list = this.getUsers().subscribe(list => {
    //   list.forEach((user) => {
    //     if (signedIn.displayName === user.username) {
    //       console.log("what is going on");
    //       user.library.push(newCard);
    //       console.log(user.library);
    //     }
    //   });
    //   console.log("current", this.currentUser);



      // this.getCurrentUser();
      // console.log("new Card", newCard);
      // console.log("currentUser", this.currentUser);
      // console.log("library", this.currentUser.library);
      // this.currentUser.library.push(newCard);
  }

  removeUser(){}


}
