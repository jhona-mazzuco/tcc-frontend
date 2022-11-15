import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { environment } from "@environment";
import { CreateOrUpdateResponse } from "@shared/interfaces/create-or-update-response.interface";
import { Field } from "@shared/interfaces/field.interface";
import { Observable } from "rxjs";
import { ResponseMessage } from "../../../shared/interfaces/response-message.interface";

@Injectable({
  providedIn: 'root'
})
export class FieldService {

  constructor(private http: HttpClient) {
  }

  create(field: Field): Observable<CreateOrUpdateResponse> {
    return this.http.post<CreateOrUpdateResponse>(`${ environment.api }/panel/field`, field);
  }

  fetchFields(): Observable<Field[]> {
    return this.http.get<Field[]>(`${ environment.api }/panel/field`);
  }

  remove(id: string): Observable<ResponseMessage> {
    return this.http.delete<ResponseMessage>(`${ environment.api }/panel/field/${ id }`);
  }

  findById(id: string): Observable<Field> {
    return this.http.get<Field>(`${ environment.api }/panel/field/${ id }`);
  }

  update(id: string, data: Field): Observable<CreateOrUpdateResponse> {
    return this.http.put<CreateOrUpdateResponse>(`${ environment.api }/panel/field/${ id }`, data);
  }
}
