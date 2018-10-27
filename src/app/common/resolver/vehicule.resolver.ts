import { Resolve } from "@angular/router";
import { VehiculeService } from "../../vehicule/service/vehicule.service";
import { Injectable } from "@angular/core";

@Injectable()
export class VehiculeResolver implements Resolve<any>{

    constructor(private _vehculeService:VehiculeService){}
    
    resolve()
    {
        console.log("resolve vehicule called")
        return this._vehculeService.findAllVehicule();
    }
}