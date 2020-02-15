import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
 
import { DashboardComponent } from './dashboard.component';


export const dashboardRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent/*,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent},
      { path: 'admin', component: AdminComponent}
    ]
    */
  }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(dashboardRoutes)],
    exports: [NativeScriptRouterModule]
})
export class DashboardRoutingModule { }

 

