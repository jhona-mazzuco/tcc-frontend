import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { environment } from "@environment";
import { Observable } from "rxjs";
import { ResponseMessage } from "../../../shared/interfaces/response-message.interface";
import { Food } from "../interfaces/food.interface";
import { Schedule } from "../interfaces/schedule.interface";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  fetch(date: string): Observable<Schedule[]> {
    const params = new HttpParams().appendAll({ date });
    return this.http.get<Schedule[]>(`${ environment.api }/panel/dashboard`, { params });
  }

  getFood(id: string): Observable<Food> {
    return this.http.get<Food>(`${ environment.api }/panel/scheduling/${id}/food`);
  }

  cancelSchedule(id: string): Observable<ResponseMessage> {
    return this.http.delete<ResponseMessage>(`${ environment.api }/panel/scheduling/${id}/cancel`);
  }
}
