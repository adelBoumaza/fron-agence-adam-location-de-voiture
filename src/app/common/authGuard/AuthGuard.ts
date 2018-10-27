import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';







@Injectable()
export class AuthGuard implements CanActivate {

    constructor (private _router: Router) {
    }

    public canActivate(): boolean {
        let retValue = false;
        if (localStorage.getItem('token') && localStorage.getItem('id'))  {
             retValue = true;
        } else {
             this._router.navigateByUrl('login');
            retValue = false;
        }
        return retValue;
    }
}