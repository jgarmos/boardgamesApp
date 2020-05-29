import { Injectable } from '@angular/core';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { User } from './user';
import { FirebaseDbService } from './firebase-db.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: User; // Save logged in user data

  constructor(public afAuth: AngularFireAuth, public db: FirebaseDbService) {

    /* Saving user data in localstorage when 
       logged in and setting up null when logged out */
    this.afAuth.authState.subscribe(user => {
      if (user) {
        debugger
        this.SetUserData(user);
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    })

  }


  // Returns true when user is loged in
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null) ? true : false;
  }

  registerUser(email, password) {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.createUserWithEmailAndPassword(email, password)
        .then(
          res => {
            debugger
            this.SetUserData(res.user);
            this.db.saveUser(this.userData);
            resolve(res);
          },
          err => reject(err))
    })
  }

  loginUser(email, password) {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.signInWithEmailAndPassword(email, password)
        .then(
          res => {
            this.SetUserData(res.user);
            resolve(res)
          },
          err => reject(err))
    })
  }

  logoutUser() {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.signOut()
        .then(
          res => resolve(res),
          err => reject(err))
    })
  }

  /* Setting up user data when sign in with username/password, 
  sign up with username/password and sign in with social auth  
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user) {
    debugger;
    //const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    this.userData = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName ? user.displayName : "Tu Nombre",
      photoURL: user.photoURL ? user.photoURL : "https://www.placecage.com/200/300",
      emailVerified: user.emailVerified
    }
  }
}
