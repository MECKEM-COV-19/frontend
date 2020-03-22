import { Component, OnInit, Input } from '@angular/core';
import { Question } from 'src/app/modules/questionnaire/questionnaire/models/covid-questionnaire';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  @Input() question: Question;
  @Input() covidFormGroup: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
