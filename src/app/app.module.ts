import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { LoginComponent } from "./login/login.component";
import { TypeAccountComponent } from './newAccount/typeAccount.component';
import { NewAccountComponent } from "./newAccount/newAccount.component";
import { NewAccountProComponent } from './newAccount/newAccountPro.component';
import { SupplierComponent } from './supplier/supplier.component';

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";

// Uncomment and add to NgModule imports if you need to use two-way binding
 import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
// dashboard
import { DashboardModule } from "./dashboard/dashboard.module";

import { ServiceLogin } from "./services_/service-login";
import { ServiceSupplier } from "./services_/service-supplier";

import { FormDetailComponent } from "./form-detail/form-detail.component";



const firebase = require("nativescript-plugin-firebase");

firebase.init({
    // Optionally pass in properties for database, authentication and cloud messaging,
    // see their respective docs.
  }).then(
    () => {
      console.log("firebase.init done");
    },
    error => {
      console.log(`firebase.init error: ${error}`);
    }
  );


@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptFormsModule,
        NativeScriptHttpClientModule,
        DashboardModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        TypeAccountComponent,
        NewAccountComponent,
        NewAccountProComponent,
        SupplierComponent,

        ItemsComponent,
        ItemDetailComponent,
         FormDetailComponent
    ],
    providers: [ServiceLogin, ServiceSupplier],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
