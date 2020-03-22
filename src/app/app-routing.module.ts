import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiaryComponent } from 'src/app/modules/diary/diary/diary.component';
import { QuestionnaireComponent } from 'src/app/modules/questionnaire/questionnaire/questionnaire.component';


const routes: Routes = [
  { path: '', component: QuestionnaireComponent, pathMatch: 'full' },
  { path: 'diary', component: DiaryComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
