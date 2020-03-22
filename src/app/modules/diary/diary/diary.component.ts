import { Component, OnInit } from '@angular/core';
import { DiaryService } from 'src/app/modules/diary/services/diary.service';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.scss']
})
export class DiaryComponent implements OnInit {

  constructor(private diaryService: DiaryService) { }

  ngOnInit(): void { }
}
