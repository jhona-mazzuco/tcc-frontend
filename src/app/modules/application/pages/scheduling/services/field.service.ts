import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { environment } from "@environment";
import { Field } from "@shared/interfaces/field.interface";
import { Observable } from "rxjs";
import { FieldRowData } from "../components/field/interfaces/field-row-data.interface";

@Injectable({
  providedIn: 'root'
})
export class FieldService {
  constructor(private http: HttpClient) { }

  fetch(): Observable<FieldRowData[]> {
    return this.http.get<FieldRowData[]>(`${environment.api}/field`);
  }

  findById(id: string): Observable<Field> {
    return this.http.get<Field>(`${environment.api}/field/${id}`);
  }
}
