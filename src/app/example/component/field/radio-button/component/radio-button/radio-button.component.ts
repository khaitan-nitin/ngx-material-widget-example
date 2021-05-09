import { Component, OnInit } from '@angular/core';
import { CheckboxField, CollectionUtils, CrudListComponentInterface, Form, KeyMap, OptionDisplayTemplate, RadioField } from 'ngx-material-widget';
import { radioButtonExample } from '../../config/radio-button-example.config';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss']
})
export class RadioButtonComponent extends CrudListComponentInterface implements OnInit {
  radioButtonExmaple: Form;
  sourceIndex: number;
  record: any;
  reset: boolean;
  keyMap: Array<KeyMap>;

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.radioButtonExmaple = radioButtonExample;

    this.record = {
      "basicRadioButton": 'india',
      "radioButtonWithoutLabel": "india",
      "radioButtonWithIcon": "india",
      "radioButtonReadOnly": "india",
      "radioButtonDisabled": "india",
      "radioButtonAsLabel": "india"
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

    if (!CollectionUtils.isEmpty(this.radioButtonExmaple.formFields)) {
      this.radioButtonExmaple.formFields.forEach(formField => {
        if (buttonAction.action == OptionDisplayTemplate.CLASSIC) {
          (<RadioField | CheckboxField>formField.field).displayTemplate = OptionDisplayTemplate.CLASSIC;
        } else  {
          (<RadioField | CheckboxField>formField.field).displayTemplate = OptionDisplayTemplate.LIST;
        }
      })
    }
  }
}
