import { Component, OnInit } from '@angular/core';
import { Action, FieldChange, Form, FormDiaplyMode } from 'ngx-material-widget';
import { formSectionExpandable } from './config/form-section-expandable';

@Component({
  selector: 'app-form-section-expandable',
  templateUrl: './form-section-expandable.component.html',
  styleUrls: ['./form-section-expandable.component.scss']
})
export class FormSectionExpandableComponent implements OnInit {
  formSectionExpandable: Form;

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
    this.formSectionExpandable = formSectionExpandable;
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
      this.formSectionExpandable.displayMode = FormDiaplyMode.EDIT;

      this.formSectionExpandable = JSON.parse(JSON.stringify(this.formSectionExpandable));
    } else if (buttonAction.action == "reset") {
      this.reset = true;
    } else if (buttonAction.action == "cancel") {
      this.formSectionExpandable.displayMode = FormDiaplyMode.ADD;

      this.formSectionExpandable = JSON.parse(JSON.stringify(this.formSectionExpandable));
    } else if (buttonAction.action == "goToGithub") {
      window.open("https://github.com/khaitan-nitin/ngx-material-widget-example/tree/main/src/app/example/component/form/form-section-expandable", "_blank");
    }
  }
}
