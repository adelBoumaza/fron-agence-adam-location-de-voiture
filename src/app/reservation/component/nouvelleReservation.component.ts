import { Component, OnInit } from '@angular/core';
import { CustomDatepickerI18n } from '../../common/customDate/customDatepicker';
import { NgbDatepickerI18n, NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { I18n } from '../../common/customDate/I18n';

@Component({
    selector: 'app-nouvelleReservation',
    templateUrl: '../views/nouvelleReservation.component.html',
    styleUrls: ['../css/nouvelleReservation.component.css','../../../assets/scss/style.scss',
    '../../../assets/css/font-awesome.min.css'],
    providers: [I18n, {provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n}] // define custom NgbDatepickerI18n provider

})
export class NouvelleReservationComponent implements OnInit {
   

    ICON_RESERVATION_PATH = '../../../assets/icon/icon-booking.png';

    dateDepart : NgbDateStruct;
    dateRetour : NgbDateStruct;


    constructor(calendar: NgbCalendar) 
    { 
      this.dateDepart = calendar.getToday();
      this.dateRetour = calendar.getToday();
      
    }

    ngOnInit(): void { }

    onChecked(value)
    {
        console.log(value);
    }
}
