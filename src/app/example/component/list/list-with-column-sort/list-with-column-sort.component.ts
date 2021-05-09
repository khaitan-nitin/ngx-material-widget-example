import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Action, FieldChange, KeyMap, List, ObjectTree, Record } from 'ngx-material-widget';
import { Subscription } from 'rxjs';
import { User } from '../../../model/user.model';
import { UserService } from '../../../service';
import { listWithColumnSort } from './config/list-with-column-sort';

@Component({
  selector: 'app-list-with-column-sort',
  templateUrl: './list-with-column-sort.component.html',
  styleUrls: ['./list-with-column-sort.component.scss']
})
export class ListWithColumnSortComponent implements OnInit {
  listWithColumnSort: List;
  parent: ObjectTree;
  listReset: boolean;
  keyMap: Array<KeyMap> = new Array<KeyMap>();
  record: Record;

  response: any;
  userSubscription: Subscription;

  users: Array<User> = new Array<User>();
  pageSize: number = 0;

  constructor(
    private userService: UserService
  ) {
  }

  ngOnInit(): void {
    this.listWithColumnSort = listWithColumnSort;

    this.getRecords();
  }


  getRecords() {
    this.userSubscription = this.userService.getUsers().subscribe(data => {
      this.users = data['users'];

      this.pageSize = data['users'].length;

      let usersTemp = JSON.parse(JSON.stringify(this.users));
      this.record = {
        rows: usersTemp.splice(0, 10),
        total: this.pageSize,
        pageNo: 1
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
      window.open("https://github.com/khaitan-nitin/ngx-material-widget-example/tree/main/src/app/example/component/list/list-with-column-sort", "_blank");
    }
  }

  onSort(sortAction: Action) {
    console.log(sortAction);
    this.response = sortAction; 

    let sortOn = sortAction.actionData.sorton;
    let sortDir = sortAction.actionData.sortdir;

    if (sortDir == 'asc') {
      this.users = this.users.sort((a, b) => (a[sortOn] > b[sortOn] ? 1 : -1));
    } else {
      this.users = this.users.sort((a, b) => (a[sortOn] < b[sortOn] ? 1 : -1));
    }

    let usersTemp = JSON.parse(JSON.stringify(this.users));
    this.record = {
      rows: usersTemp.splice(0, 10),
      total: this.pageSize,
      pageNo: 1
    };
  }

  onPage(paginationAction: Action) {
    console.log(paginationAction);
    this.response = paginationAction;
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}