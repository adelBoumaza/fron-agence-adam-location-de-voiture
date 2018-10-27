import { Injectable } from "@angular/core";
import { ApiAgenceAdamService } from "../../common/service/api.agence.adam.service";
import { Constant } from "../../common/util/constants";
import { LocationModel } from "../Location.model";

@Injectable()
export class LocationService{

    constructor(private _api:ApiAgenceAdamService){}

    public saveOrUpdateLocation(location : LocationModel,save : boolean)
    {
        return this._api.POST(location,Constant.saveOrUpdateLocationUrl+'/'+save);
    }
}