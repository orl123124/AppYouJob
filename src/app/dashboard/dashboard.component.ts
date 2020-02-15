import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { isIOS } from "tns-core-modules/platform";
import { Color } from "tns-core-modules/color";

@Component({
    selector: "ns-dashboard",
    templateUrl: './dashboard.component.html',
    styleUrls: ['dashboard.common.css']
})
export class DashboardComponent implements OnInit { 

    items: { id: string ,name: string,  imageSrc: string }[] = [
        { id:"0", name: "Domestica",    imageSrc: "https://placem.at/things?w=500&txt=0&random=9" },
        { id:"1", name: "Pintor",       imageSrc: "https://placem.at/things?w=500&txt=0&random=6" },
        { id:"2", name: "Electricista", imageSrc: "https://placem.at/things?w=500&txt=0&random=1" },
        { id:"3", name: "Ebanista",     imageSrc: "https://placem.at/things?w=500&txt=0&random=2" },
        { id:"4", name: "Plomero",      imageSrc: "https://placem.at/things?w=500&txt=0&random=4" },
        { id:"5", name: "Cerrajero",    imageSrc: "https://placem.at/things?w=500&txt=0&random=7" },
        { id:"6", name: "Ingeniero",    imageSrc: "https://placem.at/things?w=500&txt=0&random=8" },
        { id:"7", name: "Architecto",   imageSrc: "https://placem.at/things?w=500&txt=0&random=10" },
        { id:"8", name: "Abogado",      imageSrc: "https://placem.at/things?w=500&txt=0&random=11" }
    ];

    constructor() {
        
    }

ngOnInit() {
 
}


onItemLoading(args) {
    // hack to get around issue with RadListView ios background colors: https://github.com/telerik/nativescript-ui-feedback/issues/196
    if (isIOS) {
        var newcolor = new Color("#e6e6e6");
        args.ios.backgroundView.backgroundColor = newcolor.ios;
    }
}

 


}