import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CrudListComponentInterface, Form, KeyMap } from 'ngx-material-widget';
import { textareaExample } from '../../config/text-area-example.config';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent extends CrudListComponentInterface implements OnInit {
  textareaExmaple: Form;
  sourceIndex: number;
  record: any;
  reset: boolean;
  keyMap: Array<KeyMap>;

  constructor() { 
    super();
  }

  ngOnInit(): void {
    this.textareaExmaple = textareaExample;

    this.record = {
      "basicTextarea":'Basic Textarea',
      "textareaWithoutLabel": "Textarea without Label",
      "textareaWithIcon": "Textarea With Icon",
      "textareaReadOnly": "ReadOnly Field",
      "textareaDisabled": "Value is Disabled",
      "textareaAsLabel": "Value as Label"
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
