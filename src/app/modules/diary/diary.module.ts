import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiaryComponent } from './diary/diary.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [DiaryComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    NgxChartsModule
  ],
  exports: [DiaryComponent]
})
export class DiaryModule { }
