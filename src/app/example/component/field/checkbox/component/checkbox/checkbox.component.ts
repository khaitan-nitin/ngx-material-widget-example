import { Component, OnInit } from '@angular/core';
import { CheckboxField, CollectionUtils, CrudListComponentInterface, Form, KeyMap, OptionDisplayTemplate, RadioField } from 'ngx-material-widget';
import { checkboxExample } from '../../config/checkbox-example.config';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent extends CrudListComponentInterface implements OnInit {
  checkboxExmaple: Form;
  sourceIndex: number;
  record: any;
  reset: boolean;
  keyMap: Array<KeyMap>;

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.checkboxExmaple = checkboxExample;

    this.record = {
      "basicCheckbox": ['india'],
      "checkboxWithoutLabel": ["india"],
      "checkboxWithIcon": ["india"],
      "checkboxReadOnly": ["india"],
      "checkboxDisabled": ["india"],
      "checkboxAsLabel": ["india"]
    }
  }

  fieldChange(field: any): void {
    console.log(field);
    console.log(field.value);
  }

  formChange(form: any): void {
    console.log(form.value);
  }

  buttonClick(buttonAction: any): void {
    console.log(buttonAction);

    if (!CollectionUtils.isEmpty(this.checkboxExmaple.formFields)) {
      this.checkboxExmaple.formFields.forEach(formField => {
        if (buttonAction.action == OptionDisplayTemplate.CLASSIC) {
          (<RadioField | CheckboxField>formField.field).displayTemplate = OptionDisplayTemplate.CLASSIC;
        } else {
          (<RadioField | CheckboxField>formField.field).displayTemplate = OptionDisplayTemplate.LIST;
        }
      })
    }
  }
}
 