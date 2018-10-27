import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AlertComponent } from '../alert.component';

const routes: Routes = [
    { path: '', component: AlertComponent}

];


@NgModule ({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class AlertRoute {
}