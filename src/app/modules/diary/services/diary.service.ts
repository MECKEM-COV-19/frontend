import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { CovidTimeline } from 'src/app/modules/diary/models/covid-timeline';

@Injectable({
  providedIn: 'root'
})
export class DiaryService {

  constructor(private http: HttpClient) { }

  getCovidTimeline(id: number): Observable<CovidTimeline> {
    return of();
  }
}
