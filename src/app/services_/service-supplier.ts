import { Injectable } from '@angular/core';



export interface NewsItem {
    type: "big" | "small";
    title: string;
    text: string;
    imageUrl?: string;
}

@Injectable()
export class ServiceSupplier {
    
    constructor(){}    

    getItems(): NewsItem[] {
        const result = [];

        for (var i = 0; i < 1000; i++) {
            result.push({ type: "big", title:   i+" This is one big item!", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis, turpis vitae ornare accumsan, arcu tortor ultrices nunc, eu aliquam libero sapien vitae tellus.", imageUrl: "https://octodex.github.com/images/octocat-de-los-muertos.jpg" });
            result.push({ type: "small", title: i+" Yes, we code!", text: "Vivamus a sem eget erat feugiat hendrerit at quis massa. Nullam varius ac eros non dignissim. Fusce gravida arcu libero.", imageUrl: "https://octodex.github.com/images/baracktocat.jpg" });
            result.push({ type: "small", title: i+" Image lost", text: "Oh no! There is no image for this one!" });
            result.push({ type: "small", title: i+" Octoberfest is comming!", text: "Donec lobortis ut massa quis aliquam. Phasellus orci urna, dignissim at varius at, sagittis eu ipsum.", imageUrl: "https://octodex.github.com/images/oktobercat.png" });
            result.push({ type: "big", title:   i+" Another big one!", text: "Joint the dark side!", imageUrl: "https://octodex.github.com/images/stormtroopocat.png" });
            result.push({ type: "small", title: i+" The cloud is a lie!", text: "Aenean sed diam tempor, iaculis tellus id, interdum nulla. Nulla porta lorem quis nibh ullamcorper, elementum scelerisque augue semper.", imageUrl: "https://octodex.github.com/images/cloud.jpg" });
            result.push({ type: "small", title: i+" Image lost", text: "Oh no! There is no image for this one!" });
        }
        return result;
    }

}