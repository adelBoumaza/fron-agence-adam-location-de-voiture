import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RevisionComponent } from '../revision.component';


const routes: Routes = [
    { path: '', component: RevisionComponent}

];


@NgModule ({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class RevisionRoute {
}
