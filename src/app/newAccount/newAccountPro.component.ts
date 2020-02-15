import { AfterViewInit, Component, OnInit, ElementRef, ViewChild, EventEmitter, Output, Input } from "@angular/core";
import { Route, Router } from "@angular/router";
import { Page } from "tns-core-modules/ui/page";
import { NewUser } from "../model_/user/newUser";
import { prompt } from "tns-core-modules/ui/dialogs";
import { TextField } from "tns-core-modules/ui/text-field";
import { Color } from "tns-core-modules/color";
import { setHintColor } from "../utils_/hint-util";

import  { ServiceLogin } from "../services_/service-login";

import { DatePicker } from "tns-core-modules/ui/date-picker";
import { GridLayout } from "tns-core-modules/ui/layouts/grid-layout";
import { Visibility } from "tns-core-modules/ui/enums";
import { View } from "tns-core-modules/ui/core/view";

const id_desEmail:string="Email";
const id_desNombre:string="Nombre";
const id_desApellido:string="Apellido";
const id_destel:string="Telefono";
const id_desPass:string="Password";

@Component({
    selector: "ns-newAccountPro",
    templateUrl: "./newAccountPro.component.html",
    styleUrls: ["newAccountPro.common.css" ]
})
export class NewAccountProComponent implements OnInit, AfterViewInit { 

    @ViewChild("email",{ static: false }) email: ElementRef;

    public user: NewUser; 
    lblerro_email: string;
    lblerro_nombre: string;
    lblerro_apellido: string;
    lblerro_tel: string;
    lblerro_pass: string;
    
   
    minDate: Date = new Date(1975, 0, 29);
    maxDate: Date = new Date(2045, 4, 12);

   
    public isOnOpenDepartureDate: boolean = false;
    public departureDate = new Date();

    private _selectDateGridLayout: GridLayout;
    private _overlayGridLayout: GridLayout;
    public selectedDate: Date;
    public dateSelector = new Date();
    public returnDate = new Date();
    private _animationDuration = 300;
    
    
    constructor(private serviceLogin_: ServiceLogin, private page: Page) {
        this.user = new NewUser();
        console.log('test entra create account pro------');
    }

ngOnInit() {
    this.clearField();
   
    this._selectDateGridLayout = this.page.getViewById('selectDateGridLayout');
    this._overlayGridLayout = this.page.getViewById('overlayGridLayout');
    console.log('test entra create account pro------');
   
}

ngAfterViewInit(): void {
    this._selectDateGridLayout.visibility = <any>Visibility.collapse;
    console.log('Animation Finished!');
   /* setTimeout(() => {
        let target = this._itemImageStepper1;
        target.animate({ opacity: 1, duration: this._animationDuration })
            .then(() => {
                console.log('Animation Finished!');
            })
            .catch((e) => {
                console.log(e.message);
            });
    }, 3200) */
}

createNewAccount() {
    //Called after ngAfterContentInit when the component"s view has been initialized. Applies to components only.
    //Add "implements AfterViewInit" to the class.
    //this.setTextFieldColors();
    this.clearField();
    let totalError_: number = 0;
    if(!this.validateField(this.user.email,id_desEmail)){totalError_++;};
    if(!this.validateField(this.user.nombre,id_desNombre)){totalError_++;};
    if(!this.validateField(this.user.apellido,id_desApellido)){totalError_++;};
    if(!this.validateField(this.user.telefono,id_destel)){totalError_++;};
    if(!this.validateField(this.user.password,id_desPass)){totalError_++;};
  
    if(totalError_===0){
        this.serviceLogin_.createUserByEmail(this.user)
        .then(
          (user: any)=>{ JSON.stringify(user); console.dir("desde aca: "+JSON.stringify(user));  }
          ,(errorMessage: any)=>{alert( JSON.stringify(errorMessage));    }
        );

    }
 

}


setTextFieldColors() {
 const emailTextField = <TextField>this.email.nativeElement;
     const mainTextColor = new Color("red");
    emailTextField.color = mainTextColor;
    const hintColor = new Color( "red");
     setHintColor({ view: emailTextField, color: hintColor });
    
}


validateField(field:any, name: string) {
    
    if (field == undefined){        
        this.setTextErrorLabel(name);
       //this. setTextFieldColors()
        return false;
    }

    if(field.trim().length==0){
        this.setTextErrorLabel(name);
        return false;
    }
 return true;

}


setTextErrorLabel(fieldName:string){
 
    switch(fieldName) { 
        case id_desEmail: { 
            this.lblerro_email ="complete el campo "+fieldName;
           break; 
        } 
        case id_desNombre: { 
            this.lblerro_nombre ="complete el campo "+fieldName;
           break; 
        } 
        case id_desApellido: {
            this.lblerro_apellido ="complete el campo "+fieldName;
           break;    
        } 
        case id_destel: { 
            this.lblerro_tel ="complete el campo "+fieldName;
           break; 
        }  
        case id_desPass: { 
            this.lblerro_pass ="complete el campo "+fieldName;
            break; 
         }  
        default: { 
           console.log("Invalid choice"); 
           break;              
        } 
     }


}

clearField(){

    this.lblerro_email="";
    this.lblerro_nombre="";
    this.lblerro_apellido="";
    this.lblerro_tel="";
    this.lblerro_pass="";
}

 

    // Select Date
    onOpenSelectDate(event) {
        console.log("prueba event :"+event);
        this.isOnOpenDepartureDate = event;

        if (this.isOnOpenDepartureDate) {
            this.dateSelector = this.departureDate;
        } else {
            this.dateSelector = this.returnDate;
        }

        this._selectDateGridLayout.visibility = <any>Visibility.visible;
        //this._selectDateGridLayout.className = 'select-date animate-bounceInUp-delay-0ms';
        this._selectDateGridLayout.className = "select-date animate-bounceInUp-delay-0ms";
        this._overlayGridLayout.animate({ opacity: 0.5, duration: 300 });

        console.log("test---");
    }
 

onDateChanged(args) {
    let date: Date = args.value;
    this.dateSelector = date;
}


onCloseSelectDate(isCancel: boolean) {
    if (!isCancel) {
        this.selectedDate = this.dateSelector;
        if (this.isOnOpenDepartureDate) {
            this.departureDate = this.dateSelector;
        } else {
            this.returnDate = this.dateSelector;
        }
    }

    this._selectDateGridLayout.className = 'select-date';
    this._overlayGridLayout.animate({ opacity: 0, duration: 300 })
        .then(() => {
            this._selectDateGridLayout.visibility = <any>Visibility.collapse;
        })
        .catch(() => {
        });
}

 




}