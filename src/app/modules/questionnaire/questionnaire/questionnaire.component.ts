import { Component, OnInit } from '@angular/core';
import { QuestionnaireQuestionsService } from 'src/app/modules/questionnaire/questionnaire/services/questionnaire-questions.service';
import { Question } from 'src/app/modules/questionnaire/questionnaire/models/covid-questionnaire';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {
  covidQuestionnaire: Question[];
  error: string = null;

  constructor(private questionnaireQuestionsSerivce: QuestionnaireQuestionsService) { }

  covidForm = new FormGroup({
    isPositive: new FormControl('', [
      Validators.required
    ]),
    bodyTemperature: new FormControl('', [
      Validators.required
    ]),
    cough: new FormControl('', []),
    age: new FormControl('', []),
    breathingPatterns: new FormControl('', []),
    generalFeeling: new FormControl('', []),
    pulse: new FormControl('', []),
    isEasierOutOfBreath: new FormControl('', []),
    peakFlowMeter: new FormControl('', [])
  });

  get bodyTemperature() { return this.covidForm.get('bodyTemperature'); }

  ngOnInit() {
    this.covidQuestionnaire = this.questionnaireQuestionsSerivce.covidQuestionnaire;
  }

  onSubmit() {
    this.error = null;
    const answers = this.covidForm.value;
    this.questionnaireQuestionsSerivce.sendAnsweredQuestionnaire(answers)
      .subscribe(answeredQuestionnaire => {
        // console.log(answeredQuestionnaire);
        this.covidForm.reset();
      }, error => {
        // console.error(error);
        // tslint:disable-next-line: max-line-length
        this.error = 'Our backend hasn\'t implemented all necessary security, data protection and privacy features yet. We do not want to violate any legal rules so we do not allow saving any data at this point in time. Submission is only allowed for registered beta testers. Thank you for understanding!';
      });
  }
}
