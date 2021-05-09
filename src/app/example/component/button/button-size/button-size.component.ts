import { Component, OnInit } from '@angular/core';
import { Button, HoverButton, ButtonGroup, ButtonType, ButtonColor, ButtonSize, FormDiaplyMode, Action } from 'ngx-material-widget';
import { FormGroup } from '@angular/forms';
import { buttonTypesMicroSize } from './config/button-types-micro-size.config';
import { buttonTypesSmallSize } from './config/button-types-small-size.config';
import { buttonTypesTinySize } from './config/button-types-tiny-size.config';

@Component({
  selector: 'app-button-size',
  templateUrl: './button-size.component.html',
  styleUrls: ['./button-size.component.scss']
})
export class ButtonSizeComponent implements OnInit {
  buttonTypesMicroSize: Array<Button | ButtonGroup | HoverButton>;
  buttonTypesSmallSize: Array<Button | ButtonGroup | HoverButton>;
  buttonTypesTinySize: Array<Button | ButtonGroup | HoverButton>;

  form: FormGroup;
  sourceIdentifier: string = "buttonExamples";
  sourceIndex: number;
  widgetArrayIndex: number = 1;
  context: any = {
    "firstName": "Nitin",
    "lastName": "Khaitan",
  };
  originalData: any = {
    "firstName": "Nitin",
    "lastName": "Khaitan",
  };

  response: any;
  goToCodeButton: Array<Button | ButtonGroup | HoverButton>;

  constructor() { }

  ngOnInit(): void {
    this.buttonTypesMicroSize = buttonTypesMicroSize;
    this.buttonTypesSmallSize = buttonTypesSmallSize;
    this.buttonTypesTinySize = buttonTypesTinySize;

    this.goToCodeButton = this.getGoToCodeButton();
  }

  click(action: Action): void {
    this.response = action;
    console.log(action);
  }

  getGoToCodeButton(): any {
    let buttons: Array<Button | ButtonGroup | HoverButton> = [
      {
        identifier: "goToGithub",
        type: ButtonType.STROKED,
        label: "Code in Github",
        icon: "call_made",
        onlyIcon: false,
        color: ButtonColor.DEFAULT,
        size: ButtonSize.DEFAULT,
        displayInFormModes: [
          FormDiaplyMode.EDIT
        ],
      }
    ]

    return buttons;
  }

  goToCodeCallback(action: Action): any {
    if (action.action == "goToGithub")  {
      window.open("https://github.com/khaitan-nitin/ngx-material-widget-example/tree/main/src/app/example/component/button/button-size", "_blank");
    }
  }
}
