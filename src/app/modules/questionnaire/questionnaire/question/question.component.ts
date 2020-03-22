import { Component, OnInit, Input } from '@angular/core';
// tslint:disable-next-line: max-line-length
import { Question, QuestionFormat, instanceOfFormatQuestion, instanceOfOptionQuestion, OptionQuestion, FormatQuestion } from 'src/app/modules/questionnaire/questionnaire/models/covid-questionnaire';
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

  asOptionQuestion(): OptionQuestion {
    if (instanceOfOptionQuestion(this.question)) {
      return this.question;
    } else {
      return undefined;
    }
  }

  asFormatQuestion(): FormatQuestion {
    if (instanceOfFormatQuestion(this.question)) {
      return this.question;
    } else {
      return undefined;
    }
  }
}
