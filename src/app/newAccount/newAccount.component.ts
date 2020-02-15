import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { Route, Router } from "@angular/router";
import { Page } from "tns-core-modules/ui/page";
import { NewUser } from "../model_/user/newUser";
import { prompt } from "tns-core-modules/ui/dialogs";
import { TextField } from "tns-core-modules/ui/text-field";
import { Color } from "tns-core-modules/color";
import { setHintColor } from "../utils_/hint-util";

import  { ServiceLogin } from "../services_/service-login";
 
const id_desEmail:string="Email";
const id_desNombre:string="Nombre";
const id_desApellido:string="Apellido";
const id_destel:string="Telefono";
const id_desPass:string="Password";

@Component({
    selector: "ns-newAccount",
    templateUrl: "./newAccount.component.html",
    styleUrls: ["newAccount.common.css" ]
})
export class NewAccountComponent implements OnInit { 

    @ViewChild("email",{ static: false }) email: ElementRef;

    public user: NewUser; 
    lblerro_email: string;
    lblerro_nombre: string;
    lblerro_apellido: string;
    lblerro_tel: string;
    lblerro_pass: string;
    
   


    constructor(private serviceLogin_: ServiceLogin) {
        this.user = new NewUser();
    }

ngOnInit() {
    this.clearField();
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




}