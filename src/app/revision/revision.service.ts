import { Injectable } from '@angular/core';
import { ApiAgenceAdamService } from '../common/service/api.agence.adam.service';
import { Constant } from '../common/util/constants';
import { Observable } from 'rxjs';
import { Revision } from './revision.model';

@Injectable()
export class RevisionService {
    
    constructor(private _api : ApiAgenceAdamService) {
    }

    public findAllRevision():Observable<any>
    {
        return this._api.GET(Constant.findAllRevision) ;
    }

    public updateRevision(revision : Revision):Observable<any>
    {
        return this._api.POST(revision,Constant.updateRevision+'/'+revision.idVoiture);
    }
}