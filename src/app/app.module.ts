import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ShortCalendarModule } from 'projects/short-calendar/src/lib/short-calendar.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    
    AppRoutingModule,
    ShortCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
