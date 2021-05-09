import { Component, OnInit } from '@angular/core';
import { CrudListComponentInterface, Form, KeyMap } from 'ngx-material-widget';
import { calendarExample } from '../../config/calendar-example.config';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent extends CrudListComponentInterface implements OnInit {
  calendarExmaple: Form;
  sourceIndex: number;
  record: any;
  reset: boolean;
  keyMap: Array<KeyMap>;

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.calendarExmaple = calendarExample;

    this.record = {
      "basicCalendar": new Date(),
      "calendarWithoutLabel": new Date(),
      "calendarWithIcon": new Date(),
      "calendarReadOnly": new Date(),
      "calendarDisabled": new Date(),
      "calendarAsLabel": new Date()
    }
  }

  fieldChange(field: any): void {
    console.log(field);
    console.log(field.value);
  }

  formChange(form: any): void {
    console.log(form.value);
  }

  buttonClick(buttonAction: any): void {
    console.log(buttonAction);
  }
}
