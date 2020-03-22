import { Injectable } from '@angular/core';
import { CovidQuestionnaire } from 'src/app/modules/questionnaire/questionnaire/models/covid-questionnaire';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AnsweredCovidQuestionnaire } from 'src/app/modules/questionnaire/questionnaire/models/answered-covid-questionnaire';

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireQuestionsService {
  readonly covidQuestionnaire: CovidQuestionnaire = {
    bodyTemperature: {
      question: 'What is your body temperature?'
    },
    cough: {
      question: 'Do you have to cough?',
      options: {
        options: [
          'Dry cough',
          'Productive cough',
          'None'
        ],
        key: 'cough'
      }
    },
    breathingPatterns: {
      question: 'What is your breathing pattern?',
      options: {
        options: [
          'Normal',
          'Biot\'s respiration',
          'Kussmaul breathing',
          'Cheyne-Stokes respiration',
          'I don\'t know'
        ],
        key: 'breathingPatterns'
      },
      linkHelp: {
        generalInfo: 'How do I test my breathing pattern?',
        links: [
          {
            href: 'https://flexikon.doccheck.com/de/Cheyne-Stokes-Atmung',
            text: 'Cheyne-Stokes-Atmung - DocCheck Flexikon'
          },
          {
            href: 'https://en.wikipedia.org/wiki/Cheyne%E2%80%93Stokes_respiration',
            text: 'Cheyne–Stokes respiration'
          }
        ]
      }
    },
    generalFeeling: {
      question: 'How do you feel?',
      options: {
        options: [
          'good',
          'normal',
          'bad',
          'critical'
        ],
        key: 'generalFeeling'
      }
    },
    age: {
      question: 'How old are you?'
    },
    pulse: {
      question: 'What is your pulse?'
    },
    isSarsCov2Positive: {
      question: 'Are you positively tested for SARS-CoV-2?',
      options: {
        key: 'isPositive',
        options: [
          'Yes',
          'No'
        ]
      }
    }
  };

  constructor(private http: HttpClient) { }

  sendAnsweredQuestionnaire(answeredCovidQuestionnaire: AnsweredCovidQuestionnaire): Observable<AnsweredCovidQuestionnaire> {
    return this.http.post<AnsweredCovidQuestionnaire>('', answeredCovidQuestionnaire);
  }
}
