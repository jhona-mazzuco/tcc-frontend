import { Injectable } from '@angular/core';
import { USER_STORAGE_KEY } from "../constants/user-storage-key.constant";
import { UserAuthenticated } from "../interfaces/user-authenticated.interface";

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {

  get currentUser(): UserAuthenticated | null {
    const data = localStorage.getItem(USER_STORAGE_KEY);
    return data ? JSON.parse(data) : null;
  }

  saveUser(data: UserAuthenticated): void {
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(data));
  }

  removeUser(): void {
    localStorage.removeItem(USER_STORAGE_KEY);
  }
}
