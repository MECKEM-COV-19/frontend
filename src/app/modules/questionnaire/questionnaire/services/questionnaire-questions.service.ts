import { Injectable } from '@angular/core';
import { Question } from 'src/app/modules/questionnaire/questionnaire/models/covid-questionnaire';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AnsweredCovidQuestionnaire } from 'src/app/modules/questionnaire/questionnaire/models/answered-covid-questionnaire';
import { DefaultCovidQuestionnaire } from 'src/app/modules/questionnaire/questionnaire/services/covid-questionnaire.default';

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireQuestionsService {
  readonly covidQuestionnaire: Question[] = DefaultCovidQuestionnaire.covidQuestionnaire;

  constructor(private http: HttpClient) { }

  sendAnsweredQuestionnaire(answeredCovidQuestionnaire: AnsweredCovidQuestionnaire): Observable<AnsweredCovidQuestionnaire> {
    return this.http.post<AnsweredCovidQuestionnaire>(
      'http://meckemcov19-backend.eba-m4bbpxub.eu-central-1.elasticbeanstalk.com//database/daily-data/',
      answeredCovidQuestionnaire
      );
  }
}
