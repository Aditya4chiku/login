import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private isUserLoggedin: boolean;
  constructor() {

    this.isUserLoggedin=false;
   }
   setUserLoggedIn()
   {
     this.isUserLoggedin=true;
   }

   getUserLoggedIn()
   {
     return this.isUserLoggedin;
   }
}
