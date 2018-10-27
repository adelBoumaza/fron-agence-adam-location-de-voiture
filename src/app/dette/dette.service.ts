import { Injectable } from "@angular/core";
import { ApiAgenceAdamService } from "../common/service/api.agence.adam.service";
import { Constant } from "../common/util/constants";

@Injectable()
export class DetteService{

    constructor(private _api:ApiAgenceAdamService){}

    public findAllDettesByUser()
    {
        return this._api.GET(Constant.findAllDettesByUser+'/'+localStorage.getItem('id'));
    }
}