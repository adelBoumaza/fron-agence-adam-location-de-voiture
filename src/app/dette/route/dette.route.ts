import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DetteComponent } from '../dette.component';

const routes: Routes = [
    { path: '', component: DetteComponent}

];


@NgModule ({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class DetteRoute {
}
