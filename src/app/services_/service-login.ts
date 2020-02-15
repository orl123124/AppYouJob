import { Injectable } from '@angular/core';
const firebase = require("nativescript-plugin-firebase");
import { User } from '../model_/user/user';

@Injectable()
export class ServiceLogin {
    result_: string;
    constructor(){}    
    
    public createUserByEmail(user_: User){
      
        return firebase.createUser({
            email: user_.email.trim(),
            password: user_.password.trim()
          
          });
    }

}