import { Component, OnInit,  ElementRef, ViewChild  } from "@angular/core";
import { Route, Router } from "@angular/router";
import { Page } from "tns-core-modules/ui/page";
import { User } from "../model_/user/user";
import { prompt } from "tns-core-modules/ui/dialogs";
//import  { ServiceLogin } from "../services_/service-login"; 

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.common.css" ]
})
export class LoginComponent implements OnInit { 

    public user: User; 
    public isLoginIn: boolean = true;
    /*
    @ViewChild("container",{ static: false }) container: ElementRef;
    @ViewChild("email",{ static: false }) email: ElementRef;
    @ViewChild("password",{ static: false }) password: ElementRef; 
    */
    constructor( private router: Router, 
                 private page: Page
                 //private serviceLogin_: ServiceLogin
                 ) {
    
        this.user = new User();
        this.user.email = "orlandobarria@icloud.com.pa";
        this.user.password = "123456";
    
       
    }
    
    public ngOnInit() { 
        this.page.actionBarHidden = true;
        this.page.backgroundImage = "res://bg_login";
       // this.page.backgroundColor =  "rgb(81, 150, 253)";
       this.page.backgroundColor =  "rgb(242, 242, 242)";
       
    
    }
    
    
    submit() {
    
      /*
     this.serviceLogin_.createUserByEmail(this.user)
      .then(
        (user: any)=>{ JSON.stringify(user); console.dir("desde aca: "+JSON.stringify(user));  }
        ,(errorMessage: any)=>{JSON.stringify(errorMessage); console.log("desde error: "+errorMessage);   }
      );
      
     */
     
    
      this.router.navigate(["/dashboard"]);
       // alert("hello world :"+ this.user.email);
    
      
    
    }
     
    
    forgotPassword() {
        prompt({
          title: "¿Olvidate tu contraseña?",
          message: "Ingrese su Email para restaurarlo.",
          defaultText: "",
          okButtonText: "Ok",
          cancelButtonText: "Cancel"
        }).then((data) => {
          if (data.result) {
              alert("Su password ha sido reseteado. Por favor verificar correo.");
              /*
            this.userService.resetPassword(data.text.trim())
              .subscribe(() => {
                alert("Your password was successfully reset. Please check your email for instructions on choosing a new password.");
              }, () => {
                alert("Unfortunately, an error occurred resetting your password.");
              });
                */
          }
        });
      }
    
    newAccount() {
        this.router.navigate(["/typeAccount"]);
      }
    
    
    
    
    }