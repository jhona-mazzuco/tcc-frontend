import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import firebase from "firebase/compat/app";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  currentUser!: firebase.User | null;

  constructor(private auth: AngularFireAuth) {
  }

  ngOnInit(): void {
    this.auth.currentUser.then(user => {
      console.log(user);
      this.currentUser = user
    });
  }
}
