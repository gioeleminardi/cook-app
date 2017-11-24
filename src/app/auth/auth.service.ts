import {Injectable} from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {

  private token: string;

  constructor() {
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
          firebase.auth().currentUser.getToken()
            .then(
              token => this.token = token
            );
        }
      )
      .catch(
        error => console.error(error)
      );
  }


  getToken() {
    firebase.auth().currentUser.getToken()
      .then(
        token => this.token = token
      );
    return this.token;
  }
}
