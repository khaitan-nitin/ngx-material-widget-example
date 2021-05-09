import { Component, OnInit } from '@angular/core';
import { CrudListComponentInterface, Field, Form, KeyMap } from 'ngx-material-widget';
import { textBoxExample } from '../../config/text-box-example.config';

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.scss']
})
export class TextboxComponent extends CrudListComponentInterface implements OnInit {
  textboxExmaple: Form;
  sourceIndex: number;
  record: any;
  reset: boolean;
  keyMap: Array<KeyMap>;

  constructor() { 
    super();
  }

  ngOnInit(): void {
    this.textboxExmaple = textBoxExample;

    this.record = {
      "basicTextBox":'Basic Text Box',
      "textBoxWithoutLabel": "Text Box without Label",
      "textBoxWithIcon": "Text Box With Icon",
      "textBoxReadOnly": "ReadOnly Field",
      "textBoxDisabled": "Value is Disabled",
      "textBoxAsLabel": "Value as Label"
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
  }
}
