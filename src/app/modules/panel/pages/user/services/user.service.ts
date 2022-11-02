import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { environment } from "@environment";
import { Observable } from "rxjs";
import { DefaultResponse } from "../interfaces/default-response.interface";
import { User } from "../interfaces/user.interface";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {
  }

  fetchUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${ environment.api }/panel/users`);
  }

  demote(uid: string): Observable<DefaultResponse> {
    return this.http.delete<DefaultResponse>(`${ environment.api }/panel/users/${ uid }/demote`);
  }

  promote(uid: string): Observable<DefaultResponse> {
    return this.http.put<DefaultResponse>(`${ environment.api }/panel/users/${ uid }/promote`, {});
  }
}
