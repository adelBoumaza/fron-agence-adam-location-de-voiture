import { NgModule } from '@angular/core';
import { ReservationComponent } from '../component/reservation.component';
import { NouvelleReservationComponent } from '../component/nouvelleReservation.component';
import { GlobalModule } from '../../common/module-common/module.common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ColorPickerModule } from 'ngx-color-picker';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { AsideModule } from '../../aside/aside-module/aside-module.module';
import { ReservationRoute } from '../route/reservation.route';
import { ReservationListeRoute } from '../route/reservation.liste.route';

@NgModule({
    imports : [
        // FullCalendarModule,
        GlobalModule,
        CommonModule,
        // BrowserModule,
        // RouterModule,
        ReservationListeRoute,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        NgxPaginationModule,
        AsideModule,
        ColorPickerModule,
        NgbModule.forRoot()
    ],
    declarations : [
        ReservationComponent
    ],
    exports : [
        ReservationComponent
    ],
})
export class ReservationListeModule { }