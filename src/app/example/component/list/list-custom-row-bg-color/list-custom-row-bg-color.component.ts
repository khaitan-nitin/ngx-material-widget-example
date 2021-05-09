import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Action, FieldChange, KeyMap, List, ObjectTree, Record } from 'ngx-material-widget';
import { Subscription } from 'rxjs';
import { UserService } from '../../../service';
import { listCustomRowBgColor } from './config/list-custom-row-bg-color';

@Component({
  selector: 'app-list-custom-row-bg-color',
  templateUrl: './list-custom-row-bg-color.component.html',
  styleUrls: ['./list-custom-row-bg-color.component.scss']
})
export class ListCustomRowBgColorComponent implements OnInit {
  listCustomRowBgColor: List;
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
    this.listCustomRowBgColor = listCustomRowBgColor;

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
      window.open("https://github.com/khaitan-nitin/ngx-material-widget-example/tree/main/src/app/example/component/list/list-custom-row-bg-color", "_blank");
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