import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from '../component/client.component';
import { NgModule } from '@angular/core';
import { ClientListeComponent } from '../component/client.liste.component';

const routes: Routes = [
    { path: '', component: ClientComponent}

];


@NgModule ({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class ClientRoute {
}
