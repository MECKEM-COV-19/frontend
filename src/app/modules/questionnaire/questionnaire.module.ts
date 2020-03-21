import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { QuestionComponent } from './questionnaire/question/question.component';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [QuestionnaireComponent, QuestionComponent],
  imports: [
    CommonModule,
    MatSliderModule
  ],
  exports: [
    QuestionnaireComponent
  ]
})
export class QuestionnaireModule { }
