import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Action, FieldChange, KeyMap, KeyMapAssociation, KeyMapOptionType, KeyMapUtils, List, ObjectTree, Record } from 'ngx-material-widget';
import { Subscription } from 'rxjs';
import { UserService } from '../../../service';
import { staticListWithFilter } from './config/static-list-with-filter';

@Component({
  selector: 'app-static-list-with-filter',
  templateUrl: './static-list-with-filter.component.html',
  styleUrls: ['./static-list-with-filter.component.scss']
})
export class StaticListWithFilterComponent implements OnInit, OnDestroy {
  staticListWithFilter: List;
  parent: ObjectTree;
  listReset: boolean;
  keyMap: Array<KeyMap> = new Array<KeyMap>();
  record: Record;

  response: any;
  userSubscription: Subscription;

  constructor(
    private userService: UserService
  ) {
  }

  ngOnInit(): void {
    this.staticListWithFilter = staticListWithFilter;

    this.setOptions();
    this.getRecords();
  }

  setOptions()  {
    let genderAssociations: Array<KeyMapAssociation> = new Array<KeyMapAssociation>();
    genderAssociations.push({ componentIdentifier: "staticListWithFilter", fieldKey: "gender" });

    this.keyMap = KeyMapUtils.push(this.keyMap, genderAssociations, "GENDER", KeyMapOptionType.LIST, staticListWithFilter);
  }
  
  getRecords()  {
    this.userSubscription = this.userService.getUsers().subscribe(data => {
      this.record = {
        rows : data['users'],
        total : data['users'].length,
        pageNo : 1
      };
    });
  }

  fieldChange(fieldChange: FieldChange) {
    console.log(fieldChange);
    this.response = fieldChange;
  }

  formChange(form: FormGroup) {
    console.log(form);
  }

  buttonClick(buttonClick: Action) {
    console.log(buttonClick);
    this.response = buttonClick;
  }

  onSort(sortAction: Action) {
    console.log(sortAction);
    this.response = sortAction;
  }

  onPage(paginationAction: Action) {
    console.log(paginationAction);
    this.response = paginationAction;
  }  
  
  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}
