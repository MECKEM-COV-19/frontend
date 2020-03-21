import { Component, OnInit } from '@angular/core';
import { QuestionnaireQuestionsService } from 'src/app/modules/questionnaire/questionnaire/services/questionnaire-questions.service';
import { CovidQuestionnaire } from 'src/app/modules/questionnaire/questionnaire/models/covid-questionnaire';
import { format } from 'path';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {
  covidQuestionnaire: CovidQuestionnaire;

  constructor(private questionnaireQuestionsSerivce: QuestionnaireQuestionsService) { }

  ngOnInit() {
    this.covidQuestionnaire = this.questionnaireQuestionsSerivce.covidQuestionnaire;
  }

}
