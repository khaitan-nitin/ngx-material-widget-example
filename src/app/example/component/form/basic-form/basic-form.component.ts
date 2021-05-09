import { Component, OnInit } from '@angular/core';
import { Action, FieldChange, Form, FormDiaplyMode } from 'ngx-material-widget';
import { basicForm } from './config/basic-form';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {
  basicForm: Form;

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
    this.basicForm = basicForm;
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
      this.basicForm.displayMode = FormDiaplyMode.EDIT;

      this.basicForm = JSON.parse(JSON.stringify(this.basicForm));
    } else if (buttonAction.action == "reset") {
      this.reset = true;
    } else if (buttonAction.action == "cancel") {
      this.basicForm.displayMode = FormDiaplyMode.ADD;

      this.basicForm = JSON.parse(JSON.stringify(this.basicForm));
    } else if (buttonAction.action == "goToGithub") {
      window.open("https://github.com/khaitan-nitin/ngx-material-widget-example/tree/main/src/app/example/component/form/basic-form", "_blank");
    }
  }
}
