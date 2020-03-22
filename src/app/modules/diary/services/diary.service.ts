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
    return of({
      data: [
        {
          name: 'Fiever',
          series: [
            {
              value: 38,
              name: '2016-09-21T00:15:51.742Z'
            },
            {
              value: 38,
              name: '2016-09-20T23:45:33.623Z'
            },
            {
              value: 40,
              name: '2016-09-20T19:19:04.018Z'
            },
            {
              value: 41,
              name: '2016-09-16T12:23:15.807Z'
            },
            {
              value: 39,
              name: '2016-09-23T02:27:13.301Z'
            }
          ]
        }
      ]
    });
  }
}
