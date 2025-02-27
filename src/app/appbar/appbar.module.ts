import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppBarAllModule, MenuAllModule } from '@syncfusion/ej2-angular-navigations';
import { ButtonAllModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownButtonAllModule } from '@syncfusion/ej2-angular-splitbuttons';
import { AppBarDefaultComponent } from './default.component';
import { AppBarColorComponent } from './color.component';
import { SharedModule } from '../common/shared.module';
import { BrowserModule } from '@angular/platform-browser';

export const appbarAppRoutes: Object[] = [
  { path: ':theme/appbar/default', component: AppBarDefaultComponent, name: 'Default Functionalities', description: 'This sample demonstrates the default functionalities of the Syncfusion Angular AppBar component.', category: 'AppBar' },
  { path: ':theme/appbar/color', component: AppBarColorComponent, name: 'Color', description: 'This sample demonstrates the available bar color modes in the Syncfusion Angular AppBar component.', category: 'AppBar' }
];

export const appbarRouter: ModuleWithProviders<any> = RouterModule.forChild(appbarAppRoutes);

@NgModule({
  imports: [appbarRouter, AppBarAllModule, ButtonAllModule, DropDownButtonAllModule, MenuAllModule, SharedModule, BrowserModule],
  declarations: [
    AppBarDefaultComponent,
    AppBarColorComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppBarSampleModule { }
