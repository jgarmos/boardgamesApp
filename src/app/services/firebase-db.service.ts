import { User } from './user';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class FirebaseDbService {

  constructor(public asf:AngularFirestore) { }

  saveUser(user:User){
    return this.asf.collection('users').add(user)
    .then((newItem)=>{
      debugger
      console.log("added new item into DB" + newItem);
    })
    .catch (err =>{
      console.log (err);
    })
  }
}
