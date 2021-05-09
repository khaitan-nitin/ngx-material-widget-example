import { Component, OnInit } from '@angular/core';
import { Action, FieldChange, Form, FormDiaplyMode } from 'ngx-material-widget';
import { formAsCard } from './config/form-as-card';

@Component({
  selector: 'app-form-as-card',
  templateUrl: './form-as-card.component.html',
  styleUrls: ['./form-as-card.component.scss']
})
export class FormAsCardComponent implements OnInit {
  formAsCard: Form;

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
    this.formAsCard = formAsCard;
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
      this.formAsCard.displayMode = FormDiaplyMode.EDIT;

      this.formAsCard = JSON.parse(JSON.stringify(this.formAsCard));
    } else if (buttonAction.action == "reset") {
      this.reset = true;
    } else if (buttonAction.action == "cancel") {
      this.formAsCard.displayMode = FormDiaplyMode.ADD;

      this.formAsCard = JSON.parse(JSON.stringify(this.formAsCard));
    } else if (buttonAction.action == "goToGithub") {
      window.open("https://github.com/khaitan-nitin/ngx-material-widget-example/tree/main/src/app/example/component/form/form-as-card", "_blank");
    }
  }
}
