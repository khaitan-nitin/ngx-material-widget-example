import { Component, OnInit } from '@angular/core';
import { Action, FieldChange, Form, FormDiaplyMode } from 'ngx-material-widget';
import { formColumnSelector } from './config/form-column-selector';
import { formDisplayInColumn } from './config/form-display-in-column';

@Component({
  selector: 'app-form-display-in-column',
  templateUrl: './form-display-in-column.component.html',
  styleUrls: ['./form-display-in-column.component.scss']
})
export class FormDisplayInColumnComponent implements OnInit {
  formDisplayInColumn: Form;
  formColumnSelector: Form;

  sourceIndex: number = 1;

  record: any = {
    firstName: "Nitin",
    lastName: "Khaitan",
    gender: "m"
  };
  columnSelectorRecord: any = {
    columnSelector: "3"
  };

  reset: boolean;
  showForm: boolean = true;

  response: any;

  constructor() { }

  ngOnInit(): void {
    this.formDisplayInColumn = formDisplayInColumn;
    this.formColumnSelector = formColumnSelector;
  }

  fieldChange(field: FieldChange): void {
    console.log(field);
    if (field.fieldKey == "blockFormToggle") {
      if (field.value == true) {
        this.formDisplayInColumn.displayMode = FormDiaplyMode.VIEW;
      } else {
        this.formDisplayInColumn.displayMode = FormDiaplyMode.ADD;
      }

      this.formDisplayInColumn = JSON.parse(JSON.stringify(this.formDisplayInColumn));
    }
    if (field.fieldKey == "columnSelector") {
      this.formDisplayInColumn.displayInColumns = field.value;

      this.formDisplayInColumn = JSON.parse(JSON.stringify(this.formDisplayInColumn));
    }
  }

  formChange(form: any): void {
    console.log(form);
  }

  buttonClick(buttonAction: Action): void {
    console.log(buttonAction);
    this.response = buttonAction;

    if (buttonAction.action == "save") {
      this.formDisplayInColumn.displayMode = FormDiaplyMode.EDIT;

      this.formDisplayInColumn = JSON.parse(JSON.stringify(this.formDisplayInColumn));
    } else if (buttonAction.action == "reset") {
      this.reset = true;
    } else if (buttonAction.action == "cancel") {
      this.formDisplayInColumn.displayMode = FormDiaplyMode.ADD;

      this.formDisplayInColumn = JSON.parse(JSON.stringify(this.formDisplayInColumn));
    }else if (buttonAction.action == "goToGithub") {
      window.open("https://github.com/khaitan-nitin/ngx-material-widget-example/tree/main/src/app/example/component/form/form-display-in-column", "_blank");
    }
  }
}
