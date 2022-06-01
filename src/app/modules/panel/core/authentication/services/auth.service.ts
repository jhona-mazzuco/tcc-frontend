import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import firebase from 'firebase/compat/app';
import { from, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private authentication: AngularFireAuth) { }

  get currentUser(): Observable<firebase.User | null> {
    return from(this.authentication.currentUser);
  }

  signIn(email: string, password: string): Observable<firebase.auth.UserCredential> {
    return from(this.authentication.signInWithEmailAndPassword(email, password));
  }

  logout(): Observable<void> {
    return from(this.authentication.signOut());
  }

  passwordRecovery(email: string): Observable<void> {
    return from(this.authentication.sendPasswordResetEmail(email));
  }
}
