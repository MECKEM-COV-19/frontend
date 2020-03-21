import { Injectable } from '@angular/core';
import { CovidQuestionnaire } from 'src/app/modules/questionnaire/questionnaire/models/covid-questionnaire';

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
      options: [
        'Dry cough',
        'Normal cough',
        'No cough'
      ]
    },
    age: {
      question: 'How old are you?'
    }
  }
}
