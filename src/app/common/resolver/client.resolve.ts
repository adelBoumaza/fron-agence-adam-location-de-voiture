import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ClientService } from '../../client/service/client.service';


@Injectable()
export class ClientServiceResolver implements Resolve<any> {
   
    constructor(private _clientService:ClientService){}
    
    resolve()
    {
        console.log("resolve called")
        return this._clientService.findAllClient();
    }
}