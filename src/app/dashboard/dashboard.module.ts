import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { DashboardRoutingModule } from "./dashboard.routes";
import { DashboardComponent } from "./dashboard.component";
/*radlistview*/
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        DashboardRoutingModule,
        NativeScriptUIListViewModule,
        NativeScriptFormsModule

    ],
    declarations: [
        DashboardComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class DashboardModule { }
