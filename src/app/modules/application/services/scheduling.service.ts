import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { environment } from "@environment";
import { Observable } from "rxjs";
import { ResponseMessage } from "../../panel/shared/interfaces/response-message.interface";
import { Scheduling } from "../pages/scheduling/components/scheduling/interfaces/scheduling.interface";
import { Schedule } from "../pages/scheduling/interfaces/schedule.interface";

@Injectable({
  providedIn: 'root'
})
export class SchedulingService {

  constructor(private http: HttpClient) {
  }

  getSchedulesOfDay(fieldId: string, date: string): Observable<Schedule[]> {
    const params = new HttpParams()
      .appendAll({ date });
    return this.http.get<Schedule[]>(`${ environment.api }/scheduling/${ fieldId }`, { params })
  }

  scheduling(data: Scheduling): Observable<ResponseMessage> {
    return this.http.post<ResponseMessage>(`${ environment.api }/scheduling`, data);
  }

  scheduled(): Observable<any> {
    return this.http.get(`${ environment.api }/scheduling`);
  }
}
