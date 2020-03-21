import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { QuestionComponent } from './questionnaire/question/question.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [QuestionnaireComponent, QuestionComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    FormsModule,
    MatCardModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  exports: [
    QuestionnaireComponent
  ]
})
export class QuestionnaireModule { }
