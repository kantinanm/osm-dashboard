import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProvinceComponent } from './province.component';
import { ProvinceListComponent } from './province-list/province-list.component';

const routes: Routes = [
  { path: '', component: ProvinceComponent,
    children: [ 
      {
        path: 'province-list',
        component: ProvinceListComponent
      }  
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProvinceRoutingModule { }
