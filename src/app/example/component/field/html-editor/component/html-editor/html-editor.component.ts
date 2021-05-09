import { Component, OnInit } from '@angular/core';
import { CrudListComponentInterface, Form, KeyMap } from 'ngx-material-widget';
import { htmlEditorExample } from '../../config/html-editor-example.config';

@Component({
  selector: 'app-html-editor',
  templateUrl: './html-editor.component.html',
  styleUrls: ['./html-editor.component.scss']
})
export class HtmlEditorComponent extends CrudListComponentInterface  implements OnInit {
  htmlEditorExmaple: Form;
  sourceIndex: number;
  record: any;
  reset: boolean;
  keyMap: Array<KeyMap>;

  constructor() { 
    super();
  }

  ngOnInit(): void {
    this.htmlEditorExmaple = htmlEditorExample;

    this.record = {
      "basicHtmlEditor":'Basic Html Editor',
      "htmlEditorWithoutLabel": "Html Editor without Label",
      "htmlEditorWithIcon": "Html Editor With Icon",
      "htmlEditorReadOnly": "ReadOnly Field",
      "htmlEditorDisabled": "Value is Disabled",
      "htmlEditorAsLabel": "<pr><strong>Value as Label</strong></p>"
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
