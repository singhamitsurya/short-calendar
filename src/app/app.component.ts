import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Short-DatePicker-Library';
  start = "2021-01-01";
  end = "2021-02-21"
  val = "2021-01-16"

  valueSelected(event:string){
    console.log(event)
  }
}
