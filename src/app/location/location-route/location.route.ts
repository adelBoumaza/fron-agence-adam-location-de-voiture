import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LocationComponent } from '../location.component';


const routes: Routes = [
    { path: '', component: LocationComponent}

];


@NgModule ({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class LocationRoute {
}
