import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProvinceRoutingModule } from './province-routing.module';
import { ProvinceComponent } from './province.component';
import { ProvinceListComponent } from './province-list/province-list.component';


@NgModule({
  declarations: [
    ProvinceComponent,
    ProvinceListComponent
  ],
  imports: [
    CommonModule,
    ProvinceRoutingModule
  ]
})
export class ProvinceModule {  
  constructor() {
  console.log('ProvinceModule loaded.');
  } 
}
