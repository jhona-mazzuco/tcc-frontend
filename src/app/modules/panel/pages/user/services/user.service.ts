import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { environment } from "@environment";
import { Observable } from "rxjs";
import { ResponseMessage } from "../../../shared/interfaces/response-message.interface";
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

  demote(uid: string): Observable<ResponseMessage> {
    return this.http.put<ResponseMessage>(`${ environment.api }/panel/users/${ uid }/demote`, {});
  }

  promote(uid: string): Observable<ResponseMessage> {
    return this.http.put<ResponseMessage>(`${ environment.api }/panel/users/${ uid }/promote`, {});
  }
}
