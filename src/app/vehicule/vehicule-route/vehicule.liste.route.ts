import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { VehiculeListeComponent } from '../component/vhecule.liste.component';


const routes: Routes = [
    { path: '', component: VehiculeListeComponent}

];


@NgModule ({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class VehiculeListeRoute {
}
