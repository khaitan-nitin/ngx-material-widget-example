import { Component, OnInit } from '@angular/core';
import { Action, FieldChange, Form, FormDiaplyMode } from 'ngx-material-widget';
import { addMoreInField } from './config/form-add-more-in-field';

@Component({
  selector: 'app-form-add-more-in-field',
  templateUrl: './form-add-more-in-field.component.html',
  styleUrls: ['./form-add-more-in-field.component.scss']
})
export class FormAddMoreInFieldComponent implements OnInit {
  addMoreInField: Form;

  sourceIndex: number = 1;

  record: any = {
    firstName: "Nitin",
    lastName: "Khaitan",
    gender: "m",
    hobbies: [
      "Meditation",
      "Skating"
    ]
  };

  reset: boolean;
  showForm: boolean = true;

  response: any;

  constructor() { }

  ngOnInit(): void {
    this.addMoreInField = addMoreInField;
  }

  fieldChange(field: FieldChange): void {
    console.log(field);
  }

  formChange(form: any): void {
    console.log(form);
  }

  buttonClick(buttonAction: Action): void {
    console.log(buttonAction);
    this.response = buttonAction;

    if (buttonAction.action == "save") {
      this.addMoreInField.displayMode = FormDiaplyMode.EDIT;

      this.addMoreInField = JSON.parse(JSON.stringify(this.addMoreInField));
    } else if (buttonAction.action == "reset") {
      this.reset = true;
    } else if (buttonAction.action == "cancel") {
      this.addMoreInField.displayMode = FormDiaplyMode.ADD;

      this.addMoreInField = JSON.parse(JSON.stringify(this.addMoreInField));
    } else if (buttonAction.action == "goToGithub") {
      window.open("https://github.com/khaitan-nitin/ngx-material-widget-example/tree/main/src/app/example/component/form/form-add-more-in-field", "_blank");
    }
  }
}
