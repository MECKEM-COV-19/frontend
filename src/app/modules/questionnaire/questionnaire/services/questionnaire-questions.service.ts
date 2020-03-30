import { Injectable } from '@angular/core';
import { Question } from 'src/app/modules/questionnaire/questionnaire/models/covid-questionnaire';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AnsweredCovidQuestionnaire } from 'src/app/modules/questionnaire/questionnaire/models/answered-covid-questionnaire';
import { DefaultCovidQuestionnaire } from 'src/app/modules/questionnaire/questionnaire/services/covid-questionnaire.default';

import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireQuestionsService {
  readonly covidQuestionnaire: Question[] = DefaultCovidQuestionnaire.covidQuestionnaire;

  constructor(private http: HttpClient) { }

  sendAnsweredQuestionnaire(answeredCovidQuestionnaire: AnsweredCovidQuestionnaire): Observable<AnsweredCovidQuestionnaire> {
    return this.http.post<AnsweredCovidQuestionnaire>(
      environment.backendUrl + '/database/daily-data/',
      answeredCovidQuestionnaire
      );
  }
}
