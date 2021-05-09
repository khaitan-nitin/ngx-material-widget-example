import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingPageComponent } from './setting.component';

const settingRoutes: Routes = [{
    path: '',
    component: SettingPageComponent,
    children: [
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(settingRoutes)],
    exports: [RouterModule],
})
export class SettingRoutingModule { }