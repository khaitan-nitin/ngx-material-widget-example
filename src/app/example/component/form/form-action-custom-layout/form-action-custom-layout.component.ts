import { Component, OnInit } from '@angular/core';
import { Action, FieldChange, Form, FormDiaplyMode } from 'ngx-material-widget';
import { formActionCustomLayout } from './config/form-action-custom-layout';

@Component({
  selector: 'app-form-action-custom-layout',
  templateUrl: './form-action-custom-layout.component.html',
  styleUrls: ['./form-action-custom-layout.component.scss']
})
export class FormActionCustomLayoutComponent implements OnInit {
  formActionCustomLayout: Form;

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
    this.formActionCustomLayout = formActionCustomLayout;
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
      this.formActionCustomLayout.displayMode = FormDiaplyMode.EDIT;

      this.formActionCustomLayout = JSON.parse(JSON.stringify(this.formActionCustomLayout));
    } else if (buttonAction.action == "reset") {
      this.reset = true;
    } else if (buttonAction.action == "cancel") {
      this.formActionCustomLayout.displayMode = FormDiaplyMode.ADD;

      this.formActionCustomLayout = JSON.parse(JSON.stringify(this.formActionCustomLayout));
    } else if (buttonAction.action == "goToGithub") {
      window.open("https://github.com/khaitan-nitin/ngx-material-widget-example/tree/main/src/app/example/component/form/form-action-custom-layout", "_blank");
    }
  }
}
