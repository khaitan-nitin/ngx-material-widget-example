import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SettingPageComponent } from './setting.component';
import { SettingRoutingModule } from './setting-routing.module';

// import { CrudModule } from 'ngx-material-widget/lib/crud/crud.module';
import { MaterialWidgetModule } from 'ngx-material-widget';
import { MasterDataService, PropertyService } from './service';

@NgModule({
  declarations: [
    SettingPageComponent,
  ],
  imports: [
    CommonModule,
    SettingRoutingModule,
    // CrudModule,
    RouterModule,
    MaterialWidgetModule
  ],
  exports: [
  // ],
  // providers: [
  //   ApplicationService,
  //   ConfigCategoryService,
  //   MasterDataService,
  //   ModuleService,
  //   PropertyService
  ]
})
export class SettingModule { }
