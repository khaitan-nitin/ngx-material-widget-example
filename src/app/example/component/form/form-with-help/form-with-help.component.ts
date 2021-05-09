import { Component, OnInit } from '@angular/core';
import { Action, FieldChange, Form, FormDiaplyMode } from 'ngx-material-widget';
import { formWithHelp } from './config/form-with-help';

@Component({
  selector: 'app-form-with-help',
  templateUrl: './form-with-help.component.html',
  styleUrls: ['./form-with-help.component.scss']
})
export class FormWithHelpComponent implements OnInit {
  formWithHelp: Form;

  sourceIndex: number = 1;

  record: any = {
    firstName: "Nitin",
    lastName: "Khaitan",
    gender: "m"
  };

  reset: boolean;
  showForm: boolean = true;

  response: any;

  constructor() { }

  ngOnInit(): void {
    this.formWithHelp = formWithHelp;
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
      this.formWithHelp.displayMode = FormDiaplyMode.EDIT;

      this.formWithHelp = JSON.parse(JSON.stringify(this.formWithHelp));
    } else if (buttonAction.action == "reset") {
      this.reset = true;
    } else if (buttonAction.action == "cancel") {
      this.formWithHelp.displayMode = FormDiaplyMode.ADD;

      this.formWithHelp = JSON.parse(JSON.stringify(this.formWithHelp));
    } else if (buttonAction.action == "goToGithub") {
      window.open("https://github.com/khaitan-nitin/ngx-material-widget-example/tree/main/src/app/example/component/form/form-with-help", "_blank");
    }
  }
}
