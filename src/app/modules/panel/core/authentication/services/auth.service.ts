import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { environment } from "@environment";
import { Observable } from "rxjs";
import { ResponseMessage } from "../../../shared/interfaces/response-message.interface";
import { UserAuthenticated } from "@shared/interfaces/user-authenticated.interface";
import { USER_STORAGE_KEY } from "@shared/constants/user-storage-key.constant";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  signIn(email: string, password: string): Observable<UserAuthenticated> {
    return this.http.post<UserAuthenticated>(`${environment.api}/panel/signIn`, { email, password });
  }

  passwordRecovery(email: string): Observable<ResponseMessage> {
    return this.http.post<ResponseMessage>(`${environment.api}/panel/recovery`, { email });
  }
}
