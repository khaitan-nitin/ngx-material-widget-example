import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Action, FieldChange, KeyMap, List, ObjectTree, Record } from 'ngx-material-widget';
import { Subscription } from 'rxjs';
import { UserService } from '../../../service';
import { listPaginationAllRows } from './config/list-pagination-all-rows';

@Component({
  selector: 'app-list-pagination-all-rows',
  templateUrl: './list-pagination-all-rows.component.html',
  styleUrls: ['./list-pagination-all-rows.component.scss']
})
export class ListPaginationAllRowsComponent implements OnInit {
  listPaginationAllRows: List;
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
    this.listPaginationAllRows = listPaginationAllRows;

    this.getRecords();
  }

  
  getRecords()  {
    this.userSubscription = this.userService.getUsers().subscribe(data => {
      var pageSize = data['users'].length;

      this.record = {
        rows : data['users'],
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
      window.open("https://github.com/khaitan-nitin/ngx-material-widget-example/tree/main/src/app/example/component/list/list-pagination-all-rows", "_blank");
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
