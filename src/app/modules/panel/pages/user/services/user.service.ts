import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { environment } from "../../../../../../environments/environment";
import { DefaultResponse } from "../interfaces/default-response.interface";
import { User } from "../interfaces/user.interface";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  fetchUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.adminApi}/users`);
  }

  demote(uid: string): Observable<DefaultResponse> {
    return this.http.delete<DefaultResponse>(`${environment.adminApi}/users/${uid}/admin`);
  }

  promote(uid: string): Observable<DefaultResponse> {
    return this.http.put<DefaultResponse>(`${environment.adminApi}/users/${uid}/admin`, {});
  }
}
