import { Component, OnInit } from '@angular/core';
import { CrudListComponentInterface, Form, KeyMap } from 'ngx-material-widget';
import { multiImageExample } from '../../config/multi-image-example.config';
 
@Component({
  selector: 'app-multi-image',
  templateUrl: './multi-image.component.html',
  styleUrls: ['./multi-image.component.scss']
})
export class MultiImageComponent extends CrudListComponentInterface implements OnInit {
  multiImageExmaple: Form;
  sourceIndex: number;
  record: any;
  reset: boolean;
  keyMap: Array<KeyMap>;

  constructor() { 
    super();
  }

  ngOnInit(): void {
    this.multiImageExmaple = multiImageExample;

    this.record = {
      "basicMultiImage": "/assets/images/avatar.png",
      "multiImageWithoutLabel": "/assets/images/avatar.png",
      "multiImageWithIcon": "/assets/images/avatar.png",
      "multiImageReadOnly": "/assets/images/avatar.png",
      "multiImageDisabled": "/assets/images/avatar.png",
      "multiImageAsLabel": "/assets/images/avatar.png"
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
