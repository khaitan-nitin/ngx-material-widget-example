import { Component, OnInit } from '@angular/core';
import { CrudListComponentInterface, Form, KeyMap } from 'ngx-material-widget';
import { paragraphExample } from '../../config/paragraph-example.config';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.scss']
})
export class ParagraphComponent extends CrudListComponentInterface implements OnInit {
  paragraphExmaple: Form;
  sourceIndex: number;
  record: any;
  reset: boolean;
  keyMap: Array<KeyMap>;

  constructor() { 
    super();
  }

  ngOnInit(): void {
    this.paragraphExmaple = paragraphExample;

    this.record = {
      // "basicParagraph":'Basic Paragraph',
      // "paragraphWithoutLabel": "Paragraph without Label",
      // "paragraphWithIcon": "Paragraph With Icon",
      // "paragraphReadOnly": "ReadOnly Field",
      // "paragraphDisabled": "Value is Disabled",
      // "paragraphAsLabel": "Value as Label"
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
