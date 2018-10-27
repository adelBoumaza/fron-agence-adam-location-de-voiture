import { Injectable } from "@angular/core";
import { CanActivate,Router } from "@angular/router";







@Injectable()
export class AuthGuardLocation implements CanActivate {

    constructor (private _router: Router) {
    }

    public canActivate(): boolean {
        let retValue = true;
        if (localStorage.getItem('token') && localStorage.getItem('Location'))  {
             retValue = true;
        } else {
             this._router.navigateByUrl('nouvelle-reservation');
            retValue = false;
        }
        
        return retValue;
    }
}