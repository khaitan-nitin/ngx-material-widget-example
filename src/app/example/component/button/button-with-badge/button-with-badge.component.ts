import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Button, HoverButton, ButtonGroup, ButtonType, ButtonColor, ButtonSize, FormDiaplyMode, Action } from 'ngx-material-widget';
import { buttonTypesWithBadge } from './config/button-types-with-badge.config';

@Component({
  selector: 'app-button-with-badge',
  templateUrl: './button-with-badge.component.html',
  styleUrls: ['./button-with-badge.component.scss']
})
export class ButtonWithBadgeComponent implements OnInit {
  buttonTypesWithBadge: Array<Button | ButtonGroup | HoverButton>;

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
    this.buttonTypesWithBadge = buttonTypesWithBadge;

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
      window.open("https://github.com/khaitan-nitin/ngx-material-widget-example/tree/main/src/app/example/component/button/button-with-badge", "_blank");
    }
  }
}
