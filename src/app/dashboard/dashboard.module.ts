import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MapComponent } from './map/map.component';
import { MapFilterComponent } from './map-filter/map-filter.component';



@NgModule({
  declarations: [
    DashboardComponent,
    MapComponent,
    MapFilterComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardModule { }
