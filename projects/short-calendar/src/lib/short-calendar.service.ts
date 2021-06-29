import { Injectable } from '@angular/core';
import { ShortCalendarDate } from './short-calendar-date.model';

@Injectable({
  providedIn: 'root',
})
export class ShortCalendarService {
  private monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  private weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  constructor() {}

  getShortDate(defaultVal: any): ShortCalendarDate {
    let date = new Date(defaultVal);
    return new ShortCalendarDate(
      this.weekday[date.getDay()],
      date.getDate().toString().padStart(2, '0'),
      this.monthNames[date.getMonth()],date.getFullYear().toString(),date
    );
  }

  computeDates(start: any, end: any): ShortCalendarDate[] {
    let dates: ShortCalendarDate[] = [];
    for (
      var arr = [], dt = new Date(start);
      dt <= end;
      dt.setDate(dt.getDate() + 1)
    ) {
      let date = new Date(dt);
      let shortCalendarDate = new ShortCalendarDate(
        this.weekday[date.getDay()],
        date.getDate().toString().padStart(2, '0'),
        this.monthNames[date.getMonth()],date.getFullYear().toString(),date
      );
      dates.push(shortCalendarDate);
    }
    return dates;
  }
}
