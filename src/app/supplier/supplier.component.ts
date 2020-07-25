import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

// --

import { ServiceSupplier, NewsItem } from '../services_/service-supplier';

declare function __startCPUProfiler(name: string);
declare function __stopCPUProfiler(name: string);
// ---

@Component({
    selector: 'app-supplier',
    templateUrl: 'supplier.component.html',
    styleUrls: ['supplier.common.css']
})
export class SupplierComponent implements OnInit {

    
    itemsdata: { id: string ,name: string,  imageSrc: string, category: string, rating:string }[] = [
        { id:"0", name: "Domestica",    imageSrc: "https://placem.at/things?w=500&txt=0&random=9",category:"proveedor",rating:"4.0" },
        { id:"1", name: "Pintor",       imageSrc: "https://placem.at/things?w=500&txt=0&random=6",category:"proveedor",rating:"4.0"  },
        { id:"2", name: "Electricista", imageSrc: "https://placem.at/things?w=500&txt=0&random=1",category:"proveedor",rating:"4.0"  },
        { id:"3", name: "Ebanista",     imageSrc: "https://placem.at/things?w=500&txt=0&random=2" ,category:"proveedor",rating:"4.0" },
        { id:"4", name: "Plomero",      imageSrc: "https://placem.at/things?w=500&txt=0&random=4" ,category:"proveedor",rating:"4.0" },
        { id:"5", name: "Cerrajero",    imageSrc: "https://placem.at/things?w=500&txt=0&random=7" ,category:"proveedor",rating:"4.0" },
        { id:"6", name: "Ingeniero",    imageSrc: "https://placem.at/things?w=500&txt=0&random=8" ,category:"proveedor",rating:"4.0" },
        { id:"7", name: "Architecto",   imageSrc: "https://placem.at/things?w=500&txt=0&random=10" ,category:"proveedor",rating:"4.0" },
        { id:"8", name: "Abogado",      imageSrc: "https://placem.at/things?w=500&txt=0&random=11" ,category:"proveedor",rating:"4.0" }
    ];

    constructor(
        private route: ActivatedRoute,
        private serviceSupplier: ServiceSupplier
    ) { }

    public newsItems: NewsItem[];


    ngOnInit(): void { 
        console.log(+this.route.snapshot.params.id)
        const id = +this.route.snapshot.params.id;

        this.newsItems = this.serviceSupplier.getItems();

    }


    showItem(itemId: string) {}


    // new testing listview 
    public templateSelector = (item: NewsItem, index: number, items: any) => {
        if (item.type === "big") {
            return "big"
        } else if (item.type === "small") {
            return item.imageUrl ? "small" : "small-no-image";
        }
        throw new Error("Unrecognized template!")
    }

    // Profiling code
    public isProfiling: boolean;
    toggleProfiling() {
       /* if (this.isProfiling) {
            __stopCPUProfiler("list-view");
        } else {
            __startCPUProfiler("list-view");
        }
        */
        this.isProfiling = !this.isProfiling;

        alert(this.newsItems.length );
    }
 

}

