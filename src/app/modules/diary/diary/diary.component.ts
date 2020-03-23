import { Component, OnInit } from '@angular/core';
import { DiaryService } from 'src/app/modules/diary/services/diary.service';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.scss']
})
export class DiaryComponent implements OnInit {

  dataTemp: any[] = [];
  dataCough: any[] = [];
  dataBreath: any[] = [];
  dataFeel: any[] = [];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Time';
  showYAxisLabel = true;
  yAxisLabelTemp = 'Degree in Celsius';
  yAxisLabelCough = 'Cough Severity';
  yAxisLabelBreath = 'Breath Severity';
  yAxisLabelFeel = 'Feeling';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // line, area
  autoScale = true;

  constructor(private diaryService: DiaryService) { }

  ngOnInit(): void {
    this.diaryService.getCovidTimeline(0).subscribe(timeline => {
      this.dataTemp = timeline.data_fiever;
      this.dataCough = timeline.data_cough;
      this.dataBreath = timeline.data_breath;
      this.dataFeel = timeline.data_feel;
    });
  }

  onSelect(event) {
  }

  yAxisTickFormattingCough(value) {
    switch (value) {
      case 0:
        return 'Dry cough';
      case 1:
        return 'Productive cough';
      case 2:
        return 'No cough';
          }
  }

  yAxisTickFormattingBreath(value) {
    switch (value) {
      case 0:
        return 'Normal';
      case 1:
        return 'Biot\'s respiration';
      case 2:
        return 'Kussmail breathing';
      case 3:
        return 'Cheyne-Strokes respiration';
      case 4:
        return 'I don\'t know';
          }
  }

  yAxisTickFormattingFeel(value) {
    switch (value) {
      case 0:
        return 'Good';
      case 1:
        return 'Normal';
      case 2:
        return 'Bad';
      case 3:
        return 'Critical';
          }
  }
}
