import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CrudUtils, Record, KeyMap, DropdownOption, Button, Badge, Action, CrudListComponentInterface, CrudHeader, ActionPage, CrudListData, CrudSearch, CrudList, CrudFormData, CrudForm, FieldChange } from 'ngx-material-widget';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute, Event, NavigationEnd } from '@angular/router';
import { StringUtils } from 'ngx-material-widget';
import { FormDiaplyMode } from 'ngx-material-widget/lib/form/model';
import { UserService } from 'src/app/example/service';
import { User } from 'src/app/example/model/user.model';
import { FormGroup } from '@angular/forms';
import { LocalStorageService } from 'angular-2-local-storage';
import { crudFormInAccordionHeaderVariation } from './config/crud-form-accordion-header-variation';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-crud-form-accordion-header-variation',
  templateUrl: './crud-form-accordion-header-variation.component.html',
  styleUrls: ['./crud-form-accordion-header-variation.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CrudFormAccordionHeaderVariationComponent extends CrudListComponentInterface implements OnInit {
  //  Common Config
  identifier: string;
  header: CrudHeader;
  actions: Array<Button>;
  actionPages: Array<ActionPage>;
  reset: boolean;
  keyMap: Array<KeyMap>;

  //  Form Config
  form: CrudForm;
  configFormData: CrudFormData;
  configListData: CrudListData;

  userSubscription: Subscription;
  routerSubscriber: Subscription;

  //  List Config
  quickLinks: Array<Button>;
  searchConfig: CrudSearch;
  searchData: any;
  listConfig: CrudList;
  listPageBackRoute: Array<string>;

  userId: string;
  action: string;
  displayMode: FormDiaplyMode;
  originalData: any;
  moduleOptions: Array<DropdownOption>;

  response: any;

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private localStorage: LocalStorageService,
    private _snackBar: MatSnackBar
  ) {
    super();
    this.routerSubscriber = this.router.events.subscribe(
      (event: Event) => {
        if (event instanceof NavigationEnd) {
          this.userId = this.route.snapshot.params['id'];
          this.action = this.route.snapshot.queryParams['action'];

          this.setCommonConfig();
          if (this.userId) {
            this.setFormConfig(this.userId);
          } else {
            this.setListConfig();
            this.loadFilterParams(StringUtils.isEmpty(this.route.snapshot.queryParams['filter']) ? {} : this.route.snapshot.queryParams['filter']);
            this.setListData();
          }
        }
      });
      this.response = this.localStorage.get("mxbc-response");
  }

  ngOnInit(): void {
  }

  setCommonConfig(): void {
    super.setCommonConfigUsingCrud(crudFormInAccordionHeaderVariation);
    this.setOptions();
  }

  setOptions() {
  }

  setFormConfig(userId: string): void {
    //  Config
    this.form = crudFormInAccordionHeaderVariation.form;
    this.actions = crudFormInAccordionHeaderVariation.actions;
    this.actionPages = crudFormInAccordionHeaderVariation.actionPages;

    //  Tab wise data/setting
    this.configFormData = {
      pageBackRoute: ["/example", "component", "crud", "crud-form-accordion-header-variation"],
      badges: this.setBadges(),
      originalData: this.originalData
    }
    this.setFormsData(userId);
  }

  setBadges(): Array<Badge> {
    let badges = new Array<Badge>();

    return badges;
  }

  setBadge(badge: Badge, text: string): Badge {
    badge.content = text;

    return badge;
  }

  setFormsData(userId: string): any {
    if (userId == "new") {
      this.displayMode = FormDiaplyMode.ADD;
      this.setTabDisplayMode(crudFormInAccordionHeaderVariation.form.tabs, FormDiaplyMode.ADD);
      CrudUtils.changeButtonLabelIcon(crudFormInAccordionHeaderVariation.form.tabs, "updateUser", "Save", "add");

      this.configFormData.record = {
        "userForm": {}
      };
    } else {
      if (this.action == "editUser") {
        this.displayMode = FormDiaplyMode.EDIT;
        this.setTabDisplayMode(crudFormInAccordionHeaderVariation.form.tabs, FormDiaplyMode.EDIT);
      } else {
        this.displayMode = FormDiaplyMode.VIEW;
        this.setTabDisplayMode(crudFormInAccordionHeaderVariation.form.tabs, FormDiaplyMode.VIEW);
      }
      CrudUtils.changeButtonLabelIcon(crudFormInAccordionHeaderVariation.form.tabs, "updateUser", "Update", "edit");

      this.userSubscription = this.userService.getUser(+userId).subscribe(user => {
        this.originalData = user;
        this.configFormData.record = {
          "userForm": user,
          "userAddressList": {
            pageNo: 1,
            total: user.address ? user.address.length : 0,
            rows: user.address
          }
        };
      });
    }
  }

  setListConfig(): void {
    super.setListConfigUsingCrud(crudFormInAccordionHeaderVariation);
  }

  setListData() {
    let records: Array<Record> = new Array<Record>();

    this.userSubscription = this.userService.getUsers().subscribe(record => {
      let users: Array<User> = new Array<User>();

      users = this.filterUsers(users, record);

      let recordTab: Record = {
        total: users.length,
        pageNo: 0,
        rows: users.splice(0, 10)
      }

      records.push(recordTab);

      super.setConfigListData(records, this.setBadges(), []);
    });
  }

  private filterUsers(users: User[], record: any) {
      if (this.configListData.searchData) {
        let nameSearchText = this.configListData.searchData['name'];
        let dobSearchText = this.configListData.searchData['dob'];
        let genderSearchText: Array<string> = this.configListData.searchData['gender'];



        if (!nameSearchText && !dobSearchText && !genderSearchText) {
          users = record['users'];
        } else {
          record['users'].forEach((user: User) => {
            let isUserValid: boolean = false;
            if (nameSearchText) {
              if (user.firstName.indexOf(nameSearchText) > -1 || user.middleName.indexOf(nameSearchText) > -1 || user.lastName.indexOf(nameSearchText) > -1 || user.email.indexOf(nameSearchText) > -1) {
                isUserValid = true;
              }
            } else {
              isUserValid = true;
            }

            let isDobValid: boolean = false;
            if (dobSearchText) {
              if (new Date(user.dob).getDate() == new Date(dobSearchText).getDate() && new Date(user.dob).getMonth() == new Date(dobSearchText).getMonth() && new Date(user.dob).getFullYear() == new Date(dobSearchText).getFullYear()) {
                isDobValid = true;
              }
            } else {
              isDobValid = true;
            }

            let isGenderValid: boolean = false;
            if (genderSearchText) {
              if (genderSearchText.includes(user.gender)) {
                isGenderValid = true;
              }
            } else {
              isGenderValid = true;
            }

            if (isUserValid && isDobValid && isGenderValid) {
              users.push(user);
            }
          });
        }
      }
      return users;
    }

  buttonClick(action: Action) {
    console.log(action);
    this.response = action;
    //  Saving in local storage as page is reloading...
    this.localStorage.set("mxbc-response", this.response);

    switch (action.sourceIdentifier) {
      case "crudFormInAccordionHeaderVariation":
        this.actionCrudFormInAccordionHeaderVariation(action);
        break;
      case "userForm":
        this.actionUserForm(action);
        break;
      case "userList":
        this.actionUserList(action);
        break;
        case "userAddressList":
          this.actionUserAddressList(action);
          break;
      }
  }

  actionCrudFormInAccordionHeaderVariation(action: Action) {
    switch (action.action) {
      case "addUser":
        this.router.navigate(['/example', 'component', 'crud', 'crud-form-accordion-header-variation', 'new'], { queryParams: { action: action.action }, skipLocationChange: false, replaceUrl: false });
        break;
        case "addAddress":
          this.actionAddAddress(action);
          break;
        case "goToGithub":
        window.open("https://github.com/khaitan-nitin/ngx-material-widget-example/tree/main/src/app/example/component/crud/crud-form-accordion-header-variation", "_blank");
        break;
    }
  }

  actionUserForm(action: Action) {
    switch (action.action) {
      case "backToList":
      case "cancel":
        this.performBackToList(action);
        break;
      case "updateUser":
        this.performUpdateUser(action);
        break;
        case "saveUser":
          this.performSaveUser(action);
          break;
      }
  }
  performBackToList(action: Action) {
    this.router.navigate(['/example/component/crud/crud-form-accordion-header-variation']);
  }

  actionUserList(action: Action) {
    switch (action.action) {
      case "editUser":
        this.router.navigate(['/example', 'component', 'crud', 'crud-form-accordion-header-variation', action.originalData['id']], { queryParams: { action: action.action }, skipLocationChange: false, replaceUrl: false });
        break;
      case "deleteUser":
        this.performDeleteUser(action);
        break;
    }
  }

  actionUserAddressList(action: Action) {
    switch (action.action) {
      case "deleteUserAddress":
        this.performDeleteUserAddress(action);
        break;
    }
  }

  actionAddAddress(action: Action) {
    action.data.rows.splice(0, 0, {
      'showRowEditable': true,
      'address1': '',
      'address2': '',
      'city': '',
      'state': '',
      'pincode': '',
    });

    this.configFormData.record.userAddressList = {
      pageNo: 1,
      total: (action.data.rows ? action.data.rows.length : 0),
      rows: action.data.rows
    };
  }

  performSaveUser(action: Action) {
    console.log(action);
    this._snackBar.open("User saved successfully!", "Save", {
      duration: 3000,
    });

    this.performBackToList(action);
  }

  performUpdateUser(action: Action) {
    console.log(action);
    this._snackBar.open("User updated successfully!", "Update", {
      duration: 3000,
    });

    this.performBackToList(action);
  }

  performDeleteUser(action: Action) {
    console.log(action);
    this._snackBar.open("User deleted successfully!", "Delete", {
      duration: 3000,
    });

    this.performBackToList(action);
  }

  performDeleteUserAddress(action: Action) {
    console.log(action);

    this.configFormData.record.userAddressList.rows.splice(action.sourceIndex, 1);
    this.configFormData.record.userAddressList.total = this.configFormData.record.userAddressList.rows.length; 

    // this.configFormData.record = JSON.parse(JSON.stringify(this.configFormData.record));
    let configFormDataTemp = JSON.parse(JSON.stringify(this.configFormData));
    this.configFormData = null; 
    setTimeout(() => {
      this.configFormData = configFormDataTemp; 

      this._snackBar.open("User address deleted successfully!", "Delete", {
        duration: 3000,
      });
    }, 10);
  }

  fieldChange(fieldChange: FieldChange) {
    console.log(fieldChange);
//    this.response = fieldChange;
  }

  formChange(form: FormGroup) {
    console.log(form);
  }

  onSort(sortAction: Action) {
    console.log(sortAction);
    this.response = sortAction;
    this.localStorage.set("mxbc-response", this.response);
  }

  onPage(paginationAction: Action) {
    console.log(paginationAction);
    this.response = paginationAction;
    this.localStorage.set("mxbc-response", this.response);
  }

  ngOnDestroy(): void {
    if (this.routerSubscriber) {
      this.routerSubscriber.unsubscribe();
    }
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }
}
