import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ShortCalendarComponent } from './short-calendar.component';



@NgModule({
  declarations: [
    ShortCalendarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ShortCalendarComponent
  ]
})
export class ShortCalendarModule { }
