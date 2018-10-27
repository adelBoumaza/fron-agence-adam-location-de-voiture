import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiAgenceAdamService } from '../../common/service/api.agence.adam.service';
import { Client } from '../model/client.model';
import { Constant } from '../../common/util/constants';


@Injectable(
    {providedIn : 'root'}
)
export class ClientService {
    /**
     * Constructor
     * @param _httpClient
     */
    constructor(private _api: ApiAgenceAdamService) {
    }

    clientObject: Client;

    public findAllClient(): Observable<any>
    {

        return this._api.GET(Constant.findAllClient) ;
    }

    public saveClient(client: Client, save: boolean)
    {
        return this._api.POST(client, Constant.saveClientUrl + '/' + client.idUser + '/' + save);
    }
}