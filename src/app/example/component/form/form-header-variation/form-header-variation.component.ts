import { Component, OnInit } from '@angular/core';
import { Action, FieldChange, Form, FormDiaplyMode } from 'ngx-material-widget';
import { formHeaderVariation } from './config/form-header-variation';

@Component({
  selector: 'app-form-header-variation',
  templateUrl: './form-header-variation.component.html',
  styleUrls: ['./form-header-variation.component.scss']
})
export class FormHeaderVariationComponent implements OnInit {
  formHeaderVariation: Form;

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
    this.formHeaderVariation = formHeaderVariation;
  }

  fieldChange(field: FieldChange): void {
    console.log(field);
    if (field.fieldKey == "blockFormToggle")  {
      if (field.value == true)  {
        this.formHeaderVariation.displayMode = FormDiaplyMode.VIEW;
      } else  {
        this.formHeaderVariation.displayMode = FormDiaplyMode.ADD;
      }

      this.formHeaderVariation = JSON.parse(JSON.stringify(this.formHeaderVariation));  
    }
  }

  formChange(form: any): void {
    console.log(form);
  }

  buttonClick(buttonAction: Action): void {
    console.log(buttonAction);
    this.response = buttonAction;

    if (buttonAction.action == "save") {
      this.formHeaderVariation.displayMode = FormDiaplyMode.EDIT;

      this.formHeaderVariation = JSON.parse(JSON.stringify(this.formHeaderVariation));
    } else if (buttonAction.action == "reset") {
      this.reset = true;
    } else if (buttonAction.action == "cancel") {
      this.formHeaderVariation.displayMode = FormDiaplyMode.ADD;

      this.formHeaderVariation = JSON.parse(JSON.stringify(this.formHeaderVariation));
    } else if (buttonAction.action == "goToGithub") {
      window.open("https://github.com/khaitan-nitin/ngx-material-widget-example/tree/main/src/app/example/component/form/form-header-variation", "_blank");
    }
  }
}
