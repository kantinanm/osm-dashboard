import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules, NoPreloading } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './home/main.component';
import { SelectivePreloadingStrategyService } from "./customPreloader.service";

const routes: Routes = [
  {path:'',component:MainComponent},
  {path:'login',component:LoginComponent},
  {path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  ,data: { preload: true, delay:5000 } },
  { path: 'province', loadChildren: () => import('./dashboard/province/province.module').then(m => m.ProvinceModule)
  ,data: { preload: true, delay: 10000 } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy: SelectivePreloadingStrategyService})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
