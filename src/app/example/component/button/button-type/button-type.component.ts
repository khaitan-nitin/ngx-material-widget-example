import { Component, OnInit } from '@angular/core';
import { Button, HoverButton, ButtonGroup, ButtonType, ButtonColor, ButtonSize, FormDiaplyMode, Action } from 'ngx-material-widget';
import { FormGroup } from '@angular/forms';
import { buttonTypes } from './config/button-types.config';
import { buttonTypesWithIcon } from './config/button-types-with-icon.config';
import { buttonTypesOnlyIcon } from './config/button-types-only-icon.config';
import { buttonTypesWithIconRight } from './config/button-types-with-icon-right.config';
import { buttonTypesWithIconTop } from './config/button-types-with-icon-top.config';
import { buttonTypesWithIconBottom } from './config/button-types-with-icon-bottom.config';

@Component({
  selector: 'mx-button-type',
  templateUrl: './button-type.component.html',
  styleUrls: ['./button-type.component.scss']
})
export class ButtonTypeComponent implements OnInit {
  buttonTypes: Array<Button | ButtonGroup | HoverButton>;
  buttonTypesOnlyIcon: Array<Button | ButtonGroup | HoverButton>;
  buttonTypesWithIcon: Array<Button | ButtonGroup | HoverButton>;
  buttonTypesWithIconRight: Array<Button | ButtonGroup | HoverButton>;
  buttonTypesWithIconTop: Array<Button | ButtonGroup | HoverButton>;
  buttonTypesWithIconBottom: Array<Button | ButtonGroup | HoverButton>;

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
    this.buttonTypes = buttonTypes;
    this.buttonTypesOnlyIcon = buttonTypesOnlyIcon;
    this.buttonTypesWithIcon = buttonTypesWithIcon;
    this.buttonTypesWithIconRight = buttonTypesWithIconRight;
    this.buttonTypesWithIconTop = buttonTypesWithIconTop;
    this.buttonTypesWithIconBottom = buttonTypesWithIconBottom;

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
      window.open("https://github.com/khaitan-nitin/ngx-material-widget-example/tree/main/src/app/example/component/button/button-type", "_blank");
    }
  }
}
