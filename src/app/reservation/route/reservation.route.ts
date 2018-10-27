import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ReservationComponent } from '../component/reservation.component';
import { NouvelleReservationComponent } from '../component/nouvelleReservation.component';


const routes: Routes = [
    { path: '', component: NouvelleReservationComponent}

];


@NgModule ({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class ReservationRoute {
}