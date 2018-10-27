import { Injectable } from '@angular/core';
import { ApiAgenceAdamService } from '../common/service/api.agence.adam.service';
import { Observable } from 'rxjs';
import { Constant } from '../common/util/constants';
import { Maintenance } from './model/maintenance.model';
import { MaintenanceSearchListe } from './model/maintenanceSearchListe.model';

@Injectable()
export class MaintenanceService {
   
    constructor(private _api : ApiAgenceAdamService) {
    }

    public findAllMaintenance(body:MaintenanceSearchListe):Observable<any>
    {

        return this._api.POST(body,Constant.findAllFichesMaintenance) ;
    }

    public saveOrUpdateFicheTechnique(maintenance : Maintenance,save : boolean)
    {
        return this._api.POST(maintenance,Constant.saveOrUpdateFicheTechnique+'/'+maintenance.idVoiture+'/'+save);
    }
}