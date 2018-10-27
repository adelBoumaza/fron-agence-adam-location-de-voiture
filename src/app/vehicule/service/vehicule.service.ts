import { Injectable } from '@angular/core';
import { ApiAgenceAdamService } from '../../common/service/api.agence.adam.service';
import { Vehicule } from '../model/vehicule.model';
import { Constant } from '../../common/util/constants';
import { Observable } from 'rxjs';

@Injectable()
export class VehiculeService {

    vehiculeObject : any;

    constructor(private apiService:ApiAgenceAdamService)
    {}

    public addVehicule(vehicule:Vehicule,save : boolean)
    {
        return this.apiService.POST(vehicule,Constant.saveVehiculeUrl +'/'+vehicule.idUser+'/action/'+save);
        
    }

    public findAllVehicule():Observable<any>
    {
        return this.apiService.GET(Constant.findAllVehicule);
    }

    public findAllAssuranceByVehicule(id):Observable<any>
    {
        return this.apiService.GET(Constant.findAllAssuranceByVehicule+'/'+id);
    }

    public findAllVehiculeByMarque(marque:string):Observable<any>
    {
        return this.apiService.GET(Constant.findAllVehiculeByMarque+'/'+marque);
    }

    public findLastAssuranceByVoiture (idVoiture:number) : Observable<any>
    {
        return this.apiService.GET(Constant.findLastAssuranceByVoiture+'/'+idVoiture);
    }
}