import { Injectable } from '@angular/core';
import { ApiAgenceAdamService } from '../../common/service/api.agence.adam.service';
import { Constant } from '../../common/util/constants';
import { Observable } from 'rxjs';
import { Reservation } from '../model/reservation.model';

@Injectable()
export class NouvelleReservationService {

    constructor(private _api:ApiAgenceAdamService)
    {

    }


    public findAllReservation(month :number,year:number):Observable<any>
    {

        return this._api.GET(Constant.findAllReservation+'/'+month+'/'+year+'/'+localStorage.getItem('id')) ;
    }
    
    public saveReservation(reservation:Reservation,save:boolean)
    {
        return this._api.POST(reservation,Constant.saveReservationUrl+'/'+save);
    }

    public annulerReservation(reservation:Reservation,idReservation:number)
    {
        return this._api.POST(reservation,Constant.annulerReservation+'/'+idReservation);
    }

    public findOneReservation(idReservation :number):Observable<any>
    {

        return this._api.GET(Constant.findOneReservation+'/'+idReservation) ;
    }

    
}