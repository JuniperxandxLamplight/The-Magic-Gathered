import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthenticationService {
  user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  emailLogin(value) {

    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(value.email, value.password).then(res => {
        resolve(res);
      }, err => reject(err))
    });
  }


  logout() {
    this.afAuth.auth.signOut();
  }

  doRegister(value){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password).then( (user) => {
        console.log("in auth", user)
        if(user){
          user.updateProfile({
            displayName: value.username
          }).then(res => {
            resolve(res);
          }, err => reject(err))
        };
      });
    });
  }

}
