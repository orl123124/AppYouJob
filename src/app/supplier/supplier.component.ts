import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-supplier',
    templateUrl: 'supplier.component.html',
    styleUrls: ['supplier.common.css']
})
export class SupplierComponent implements OnInit {


    items: { id: string ,name: string,  imageSrc: string, category: string, rating:string }[] = [
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
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void { 
        console.log(+this.route.snapshot.params.id)
        const id = +this.route.snapshot.params.id;

    }


  //  showItem(itemId: string) {}
}

