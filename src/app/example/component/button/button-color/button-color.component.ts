import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Button, HoverButton, ButtonGroup, ButtonType, ButtonColor, ButtonSize, FormDiaplyMode, Action } from 'ngx-material-widget';
import { buttonColors } from './config/button-color';

@Component({
  selector: 'app-button-color',
  templateUrl: './button-color.component.html',
  styleUrls: ['./button-color.component.scss']
})
export class ButtonColorComponent implements OnInit {
  buttonColors: Array<Button | ButtonGroup | HoverButton>;

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
    this.buttonColors = buttonColors;

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
      window.open("https://github.com/khaitan-nitin/ngx-material-widget-example/tree/main/src/app/example/component/button/button-color", "_blank");
    }
  }
}
