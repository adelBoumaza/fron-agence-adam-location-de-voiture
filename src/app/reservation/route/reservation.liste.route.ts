import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ReservationComponent } from '../component/reservation.component';


const routes: Routes = [
    { path: '', component: ReservationComponent}

];


@NgModule ({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class ReservationListeRoute {
}