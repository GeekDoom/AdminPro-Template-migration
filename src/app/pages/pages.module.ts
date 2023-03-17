import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";


import { AppRoutingModule } from '../app-routing.module';
import { ComponentsModule } from '../components/components.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Graph1Component } from './graph1/graph1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { SharedModule } from '../shared/shared.module';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';





@NgModule({
  declarations: [
    AccountSettingsComponent,
    DashboardComponent,
    Graph1Component,
    PagesComponent,
    ProgressComponent,
    PromisesComponent,
    RxjsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    AppRoutingModule,
    ComponentsModule
  ],
  exports: [
    AccountSettingsComponent,
    DashboardComponent,
    Graph1Component,
    PagesComponent,
    ProgressComponent,
  ]
})
export class PagesModule { }
