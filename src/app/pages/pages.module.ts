import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ClarityModule } from 'clarity-angular';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SettingsComponent } from './settings/settings.component';
import { ComputerSystemsComponent } from './computer-systems/computer-systems.component';

import { SettingsDataService } from '../services/settings/settings-data.service';
import { RedfishDataService } from '../services/redfish/redfish-data.service';

const components = [
  HomeComponent,
  AboutComponent,
  SettingsComponent,
  ComputerSystemsComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ClarityModule
  ],
  declarations: [
    ...components
  ],
  exports: [
    ...components
  ],
  providers: [
    SettingsDataService,
    RedfishDataService
  ]
})
export class PagesModule { }
