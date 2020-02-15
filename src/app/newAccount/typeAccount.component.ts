import { Component, OnInit } from "@angular/core";
import { SegmentedBarItem, SelectedIndexChangedEventData, SegmentedBar } from "tns-core-modules/ui/segmented-bar";
import { Page } from "tns-core-modules/ui/page";
import { Route, Router } from "@angular/router";

@Component({
  selector: "ns-typeAccount",
  templateUrl: "./typeAccount.component.html",
  styleUrls: ["./typeAccount.common.css"]
})
export class TypeAccountComponent implements OnInit {

  items: Array<SegmentedBarItem> =[];
  arrayItemsname: Array<string> = ["Cliente","Provedor"];
  indexSegBar: number;
  constructor(
    private page: Page,
    private router: Router
    //private routerExtensions: RouterExtensions
  ) {      
         for(let i=0; i<this.arrayItemsname.length; i++){
          let segmentedBarItem = <SegmentedBarItem>new SegmentedBarItem();
          segmentedBarItem.title = this.arrayItemsname[i];
          this.items.push(segmentedBarItem);      
   }



  }

  ngOnInit() {
    //this.page.actionBarHidden = true;
    this.page.backgroundImage = "res://bg_login";
    //this.page.backgroundColor =  "rgb(81, 150, 253)";
    this.page.backgroundColor =  "rgb(242, 242, 242)";
  }
  
  public onSelectedIndexChange(data:any) {
   this.indexSegBar = data.value;
  }

  createNewAccount(){
    console.log("btn index:"+this.indexSegBar);
    if(this.indexSegBar===0){
      this.router.navigate(["/newAccount"]);
    }
    else{
      this.router.navigate(["/newAccountPro"]);
    }
  }





}



 
