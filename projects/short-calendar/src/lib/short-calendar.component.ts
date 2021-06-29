import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ShortCalendarDate } from './short-calendar-date.model';
import { ShortCalendarService } from './short-calendar.service';

@Component({
  selector: 'lib-short-calendar',
  templateUrl: 'short-calendar.component.html',
  styleUrls: ['short-calendar.component.scss'],
})
export class ShortCalendarComponent implements OnInit {
  @Input() startDate: string = '';
  @Input() endDate: string = '';
  @Input() defaultVal: string = '';
  @Output() dateSelected =  new EventEmitter()
  activeShortDate: any;
  public dates: ShortCalendarDate[] | undefined;

  constructor(private shortCalendarService: ShortCalendarService) {}

  ngOnInit(): void {
    this.activeShortDate = this.shortCalendarService.getShortDate(
      this.defaultVal
    );
    this.dates = this.shortCalendarService.computeDates(
      new Date(this.startDate),
      new Date(this.endDate)
    );
  }

  scrollX(direction: string, value: number) {
    let elmnt = document.getElementById('short-calendar-container');
    if (elmnt) {
      if (direction == 'left') {
        elmnt.scrollLeft -= value;
      } else if (direction == 'right') {
        elmnt.scrollLeft += value;
      }
    }
  }

  dateClicked(date:ShortCalendarDate){
  this.activeShortDate = date
  this.dateSelected.emit(date.fullDate)
  }
}
