import { Component, OnInit } from '@angular/core';
import { DiaryService } from 'src/app/modules/diary/services/diary.service';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.scss']
})
export class DiaryComponent implements OnInit {

  data: any[] = [];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // line, area
  autoScale = true;

  constructor(private diaryService: DiaryService) { }

  ngOnInit(): void {
    this.diaryService.getCovidTimeline(0).subscribe(timeline => {
      this.data = timeline.data;
    })
  }
  
  onSelect(event) {
    console.log(event);
  }
}
