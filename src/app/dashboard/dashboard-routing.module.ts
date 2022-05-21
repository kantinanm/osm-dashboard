import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { MapComponent } from './map/map.component';
import { MapFilterComponent } from './map-filter/map-filter.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'map', component: MapComponent },
  { path: 'map-filter', component: MapFilterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
