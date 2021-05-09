import { Component, OnInit } from '@angular/core';
import { Action, FieldChange, Form, FormDiaplyMode } from 'ngx-material-widget';
import { formWithSection } from './config/form-with-section';

@Component({
  selector: 'app-form-with-section',
  templateUrl: './form-with-section.component.html',
  styleUrls: ['./form-with-section.component.scss']
})
export class FormWithSectionComponent implements OnInit {
  formWithSection: Form;

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
    this.formWithSection = formWithSection;
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
      this.formWithSection.displayMode = FormDiaplyMode.EDIT;

      this.formWithSection = JSON.parse(JSON.stringify(this.formWithSection));
    } else if (buttonAction.action == "reset") {
      this.reset = true;
    } else if (buttonAction.action == "cancel") {
      this.formWithSection.displayMode = FormDiaplyMode.ADD;

      this.formWithSection = JSON.parse(JSON.stringify(this.formWithSection));
    } else if (buttonAction.action == "goToGithub") {
      window.open("https://github.com/khaitan-nitin/ngx-material-widget-example/tree/main/src/app/example/component/form/form-with-section", "_blank");
    }
  }
}
