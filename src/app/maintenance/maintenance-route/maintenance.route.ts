import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MaintenanceComponent } from '../maintenance.component';

const routes: Routes = [
    { path: '', component: MaintenanceComponent}

];


@NgModule ({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class MaintenanceRoute {
}