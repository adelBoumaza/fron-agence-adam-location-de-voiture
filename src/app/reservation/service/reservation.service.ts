import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
@Injectable()
export class ReservationSesrvice {
    public getEvents(): Observable<any> {
        let dateStart = '2018-06-16T12:00:00';
        let dateEnd = '2018-06-19T12:00:00';
        const dateObj = new Date(dateStart);
        const dateObjPlus1  = new Date(dateEnd);
        const yearMonth = dateObj.getUTCFullYear() + '-' + (dateObj.getUTCMonth() + 1);
        let data: any = [{
            voiture : 'Renault - Clio',
            heureD  : '09:00',
            heureR  : '10:00',
            title   : 'Renault - Clio',
            coulour : 'rouge',
            start: dateObj,
            end  : dateObjPlus1,
            client : 'Boumaza Adel',
            idClient : 1,
            idVoiture : 4
        },
        {
            title: 'Long Event',
            start: yearMonth + '-07',
            end: yearMonth + '-10'
        },
        {
            id: 999,
            title: 'Repeating Event',
            start: yearMonth + '-09T16:00:00'
        },
        {
            id: 999,
            title: 'Repeating Event',
            start: yearMonth + '-16T16:00:00'
        },
        {
            title: 'Conference',
            start: yearMonth + '-11',
            end: yearMonth + '-13'
        },
        {
            title: 'Meeting',
            start: yearMonth + '-12T10:30:00',
            end: yearMonth + '-12T12:30:00'
        },
        {
            title: 'Lunch',
            start: yearMonth + '-12T12:00:00'
        },
        {
            title: 'Meeting',
            start: yearMonth + '-12T14:30:00'
        },
        {
            title: 'Happy Hour',
            start: yearMonth + '-12T17:30:00'
        },
        {
            title: 'Dinner',
            start: yearMonth + '-12T20:00:00'
        },
        {
            title: 'Birthday Party',
            start: yearMonth + '-13T07:00:00'
        },
        {
            title: 'parsing date',
            end: '2018-06-18T00:00:00',
            start: '2018-06-16T00:00:00'
        }];
        return Observable.of(data);
    }
};
