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

  // These functions convert the type to OptionQuestion or FormatQuestion
  // These were necessary so they could be safely caseted in the html. Make sure to check with *ngIf
  asOptionQuestion(question: Question): OptionQuestion {
    if (instanceOfOptionQuestion(this.question)) {
      return this.question;
    } else {
      return undefined;
    }
  }

  asFormatQuestion(question: Question): FormatQuestion {
    if (instanceOfFormatQuestion(this.question)) {
      return this.question;
    } else {
      return undefined;
    }
  }
}
