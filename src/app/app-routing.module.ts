import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";



import { LoginComponent } from './login/login.component';
import { TypeAccountComponent } from './newAccount/typeAccount.component';
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { NewAccountComponent } from "./newAccount/newAccount.component";
import { NewAccountProComponent } from "./newAccount/newAccountPro.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormDetailComponent } from './form-detail/form-detail.component';
import { SupplierComponent } from './supplier/supplier.component';
//import { supl } from './supplier/supplier.component';
import { SupplierDetailComponent } from './supplier-detail/supplier-detail.component';

const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", component: LoginComponent },
    { path: "typeAccount", component: TypeAccountComponent },
    { path: "newAccount", component: NewAccountComponent },
    { path: "newAccountPro", component: NewAccountProComponent },

    { path: "dashboard", component: DashboardComponent/*,canActivate:[AuthGuard] */ },

    { path: "supplier/:id", component: SupplierComponent/*,canActivate:[AuthGuard] */ },
    { path: "supplierDetail/:id", component: SupplierDetailComponent/*,canActivate:[AuthGuard] */ },

    { path: "items", component: ItemsComponent },
    { path: "item/:id", component: ItemDetailComponent },

    { path: "FormDetail", component: FormDetailComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
