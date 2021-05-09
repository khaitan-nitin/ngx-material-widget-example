import { Component, OnInit } from '@angular/core';
import { CrudListComponentInterface, Form, KeyMap, KeyMapAssociation, KeyMapOptionType, KeyMapUtils } from 'ngx-material-widget';
import { chipsExample } from '../../config/chips-example.config';
import { ChipsService } from '../../service';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss']
})
export class ChipComponent extends CrudListComponentInterface implements OnInit {
  chipsExmaple: Form;
  sourceIndex: number;
  record: any;
  reset: boolean;
  keyMap: Array<KeyMap>;

  constructor(private chipsService: ChipsService) {
    super();
  }

  ngOnInit(): void {
    this.chipsExmaple = chipsExample;

    this.record = {
      "chipsReadOnly": ["india"],
      "chipsDisabled": ["india"],
      "chipsAsLabel": ["india"]
    }
  }

  fieldChange(field: any): void {
    console.log(field);
    console.log(field.value);

    this.chipsService.getCountries().subscribe(countries => {
      let templateAssociations: Array<KeyMapAssociation> = new Array<KeyMapAssociation>();
      templateAssociations.push({ componentIdentifier: "chipsExampleForm", fieldKey: field.fieldKey });

      if (field.fieldKey == "chipsNoRecordFound") {
        countries = [];
      }
      KeyMapUtils.push(this.keyMap, templateAssociations, countries, KeyMapOptionType.FORM, this.chipsExmaple);
    });
  }

  formChange(form: any): void {
    console.log(form.value);
  }

  buttonClick(buttonAction: any): void {
    console.log(buttonAction);
  }
}
