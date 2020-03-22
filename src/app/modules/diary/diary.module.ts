import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiaryComponent } from './diary/diary.component';

@NgModule({
  declarations: [DiaryComponent],
  imports: [
    CommonModule,
  ],
  exports: [DiaryComponent]
})
export class DiaryModule { }
