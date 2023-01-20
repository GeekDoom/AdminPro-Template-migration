import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';




import { DashboardComponent } from './dashboard/dashboard.component';
import { Graph1Component } from './graph1/graph1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';





@NgModule({
  declarations: [
    DashboardComponent,
    Graph1Component,
    PagesComponent,
    ProgressComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ],
  exports: [
    DashboardComponent,
    Graph1Component,
    PagesComponent,
    ProgressComponent,
  ]
})
export class PagesModule { }
