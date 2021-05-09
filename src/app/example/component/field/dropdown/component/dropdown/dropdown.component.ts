import { Component, OnInit } from '@angular/core';
import { CrudListComponentInterface, Form, KeyMap } from 'ngx-material-widget';
import { dropdownExample } from '../../config/dropdown-example.config';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent extends CrudListComponentInterface  implements OnInit {
  dropdownExmaple: Form;
  sourceIndex: number;
  record: any; 
  reset: boolean;
  keyMap: Array<KeyMap>;

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.dropdownExmaple = dropdownExample;

    this.record = {
      "basicDropdown": "India",
      "dropdownWithoutLabel": "india",
      "dropdownWithIcon": "india",
      "dropdownReadOnly": "india",
      "dropdown2ColumnSpan": "india",
      "dropdownDisabled": "india",
      "dropdownAsLabel": "india",
      "dropdownMultiSelect": ["india"]
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
