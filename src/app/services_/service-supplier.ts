import { Injectable } from '@angular/core';



export interface NewsItem {
    type: "big" | "small";
    califi: string;
    title: string;
    text: string;
    imageUrl?: string;
}

@Injectable()
export class ServiceSupplier {
    
    constructor(){}    

    getItems(): NewsItem[] {
        const result = [];

        for (var i = 0; i < 100000; i++) {
            // result.push({ type: "big",  califi:"3.0",  title:   i+" This is one big item!", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis, turpis vitae ornare accumsan, arcu tortor ultrices nunc, eu aliquam libero sapien vitae tellus.", imageUrl: "https://octodex.github.com/images/octocat-de-los-muertos.jpg" });
            result.push({ type: "small",califi:"4.0", title: i+" Yes, we code!", text: "Vivamus a sem eget erat feugiat hendrerit at quis massa. Nullam varius ac eros non dignissim. Fusce gravida arcu libero.", imageUrl: "https://octodex.github.com/images/baracktocat.jpg" });
            // result.push({ type: "small",califi:"3.0", title: i+" Image lost", text: "Oh no! There is no image for this one!" });
            result.push({ type: "small",califi:"2.0", title: i+" Octoberfest is comming!", text: "Donec lobortis ut massa quis aliquam. Phasellus orci urna, dignissim at varius at, sagittis eu ipsum.", imageUrl: "https://octodex.github.com/images/oktobercat.png" });
            // result.push({ type: "big",  califi:"3.0",  title:   i+" Another big one!", text: "Joint the dark side!", imageUrl: "https://octodex.github.com/images/stormtroopocat.png" });
            result.push({ type: "small",califi:"4.0", title: i+" The cloud is a lie!", text: "Aenean sed diam tempor, iaculis tellus id, interdum nulla. Nulla porta lorem quis nibh ullamcorper, elementum scelerisque augue semper.", imageUrl: "https://octodex.github.com/images/cloud.jpg" });
           // result.push({ type: "small",califi:"5.0", title: i+" Image lost", text: "Oh no! There is no image for this one!" });
        }
        return result;
    }

}