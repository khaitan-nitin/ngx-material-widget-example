import { Component, OnInit } from '@angular/core';
import { Action, FieldChange, Form, FormDiaplyMode } from 'ngx-material-widget';
import { formInModal } from './config/form-in-modal';

@Component({
  selector: 'app-form-in-modal',
  templateUrl: './form-in-modal.component.html',
  styleUrls: ['./form-in-modal.component.scss']
})
export class FormInModalComponent implements OnInit {
  formInModal: Form;

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
    this.formInModal = formInModal;
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
      this.formInModal.displayMode = FormDiaplyMode.EDIT;

      this.formInModal = JSON.parse(JSON.stringify(this.formInModal));
    } else if (buttonAction.action == "reset") {
      this.reset = true;
    } else if (buttonAction.action == "cancel") {
      this.formInModal.displayMode = FormDiaplyMode.ADD;

      this.formInModal = JSON.parse(JSON.stringify(this.formInModal));
    } else if (buttonAction.action == "goToGithub") {
      window.open("https://github.com/khaitan-nitin/ngx-material-widget-example/tree/main/src/app/example/component/form/form-in-modal", "_blank");
    }
  }
}
