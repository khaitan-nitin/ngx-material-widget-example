import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Button, HoverButton, ButtonGroup, ButtonType, ButtonColor, ButtonSize, FormDiaplyMode, Action } from 'ngx-material-widget';
import { buttonGroupWidth } from './config/button-group-width.config';
import { buttonChipFullWidth } from './config/button-chip-full-width.config';
import { buttonGroupFullWidth } from './config/button-group-full-width.config';

@Component({
  selector: 'app-button-with-width',
  templateUrl: './button-with-width.component.html',
  styleUrls: ['./button-with-width.component.scss']
})
export class ButtonWithWidthComponent implements OnInit {
  buttonGroupWidth: Array<Button | ButtonGroup | HoverButton>;
  buttonChipFullWidth: Array<Button | ButtonGroup | HoverButton>;
  buttonGroupFullWidth: Array<Button | ButtonGroup | HoverButton>;

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
    this.buttonGroupWidth = buttonGroupWidth;
    this.buttonChipFullWidth = buttonChipFullWidth;
    this.buttonGroupFullWidth = buttonGroupFullWidth;

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
      window.open("https://github.com/khaitan-nitin/ngx-material-widget-example/tree/main/src/app/example/component/button/button-with-width", "_blank");
    }
  }
}
