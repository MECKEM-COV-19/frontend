import { Component, OnInit } from '@angular/core';
import { QuestionnaireQuestionsService } from 'src/app/modules/questionnaire/questionnaire/services/questionnaire-questions.service';
import { CovidQuestionnaire } from 'src/app/modules/questionnaire/questionnaire/models/covid-questionnaire';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {
  covidQuestionnaire: CovidQuestionnaire;
  error: string = null;

  constructor(private questionnaireQuestionsSerivce: QuestionnaireQuestionsService) { }

  covidForm = new FormGroup({
    bodyTemperature: new FormControl('', [
      Validators.required
    ]),
    cough: new FormControl('', []),
    age: new FormControl('', []),
    breathingPatterns: new FormControl('', []),
    generalFeeling: new FormControl('', [])
  });

  get bodyTemperature() { return this.covidForm.get('bodyTemperature'); }

  ngOnInit() {
    this.covidQuestionnaire = this.questionnaireQuestionsSerivce.covidQuestionnaire;
  }

  onSubmit() {
    console.log(this.covidForm.value);
    this.error = null;
    this.questionnaireQuestionsSerivce.sendAnsweredQuestionnaire(this.covidForm.value)
      .subscribe(answeredQuestionnaire => {
        console.log(answeredQuestionnaire);
        this.covidForm.reset();
      }, error => {
        console.log(error);
        this.error = 'Error when submitting data. Please try submitting your data again.';
      });
  }
}
