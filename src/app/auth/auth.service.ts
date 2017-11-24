import {Injectable} from '@angular/core';
import * as firebase from 'firebase';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {

  private token: string;

  constructor(private _router: Router) {
  }

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(
        error => console.error(error)
      );
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          firebase.auth().currentUser.getIdToken()
            .then(
              token => this.token = token
            );
          this._router.navigate(['/']);
        }
      )
      .catch(
        error => console.error(error)
      );
  }


  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then(
        token => this.token = token
      );
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }

  logout() {
    firebase.auth().signOut()
      .catch(
        error => console.error(error)
      );
    this.token = null;
    this._router.navigate(['/']);
  }
}
