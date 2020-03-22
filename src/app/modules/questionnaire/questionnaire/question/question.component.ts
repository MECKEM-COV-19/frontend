import { Component, OnInit, Input } from '@angular/core';
import { Question, QuestionFormat } from 'src/app/modules/questionnaire/questionnaire/models/covid-questionnaire';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  @Input() question: Question;
  @Input() covidFormGroup: FormGroup;
  QuestionFormat = QuestionFormat;

  constructor() { }

  ngOnInit() {
    console.log(this.question);
  }
}
