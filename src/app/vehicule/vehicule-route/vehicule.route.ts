import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { VehiculeComponent } from '../component/vehicule.component';


const routes: Routes = [
    { path: '', component: VehiculeComponent}

];


@NgModule ({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class VehiculeRoute {
}
