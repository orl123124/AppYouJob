import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "app-supplier-detail",
    templateUrl: "supplier-detail.component.html",
    styleUrls: ["supplier-detail.component.css"]
})
export class SupplierDetailComponent implements OnInit {

    NameSupplier: string;
    constructor(
        private route: ActivatedRoute,
    ) { }

    ngOnInit(): void { 
        
        const id = +this.route.snapshot.params.id;
        console.log("id:"+id);

        this.NameSupplier = "orlando";
    }
}
