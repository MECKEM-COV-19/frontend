import { Injectable } from '@angular/core';
import { CovidQuestionnaire } from 'src/app/modules/questionnaire/questionnaire/models/covid-questionnaire';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AnsweredCovidQuestionnaire } from 'src/app/modules/questionnaire/questionnaire/models/answered-covid-questionnaire';
import { DefaultCovidQuestionnaire } from 'src/app/modules/questionnaire/questionnaire/services/covid-questionnaire.default';

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireQuestionsService {
  readonly covidQuestionnaire: CovidQuestionnaire = DefaultCovidQuestionnaire.covidQuestionnaire;

  constructor(private http: HttpClient) { }

  sendAnsweredQuestionnaire(answeredCovidQuestionnaire: AnsweredCovidQuestionnaire): Observable<AnsweredCovidQuestionnaire> {
    return this.http.post<AnsweredCovidQuestionnaire>('', answeredCovidQuestionnaire);
  }
}
