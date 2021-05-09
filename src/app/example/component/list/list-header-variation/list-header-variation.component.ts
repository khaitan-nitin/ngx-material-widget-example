import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Action, FieldChange, KeyMap, List, ObjectTree, Record } from 'ngx-material-widget';
import { Subscription } from 'rxjs';
import { UserService } from '../../../service';
import { listHeaderVariation } from './config/list-header-variation';

@Component({
  selector: 'app-list-header-variation',
  templateUrl: './list-header-variation.component.html',
  styleUrls: ['./list-header-variation.component.scss']
})
export class ListHeaderVariationComponent implements OnInit {
  listHeaderVariation: List;
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
    this.listHeaderVariation = listHeaderVariation;

    this.getRecords();
  }

  
  getRecords()  {
    this.userSubscription = this.userService.getUsers().subscribe(data => {
      var pageSize = data['users'].length;

      this.record = {
        rows : data['users'].splice(0, 10),
        total : pageSize,
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

  buttonClick(buttonAction: Action) {
    console.log(buttonAction);
    this.response = buttonAction;

    if (buttonAction.action == "goToGithub") {
      window.open("https://github.com/khaitan-nitin/ngx-material-widget-example/tree/main/src/app/example/component/list/list-header-variation", "_blank");
    }
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