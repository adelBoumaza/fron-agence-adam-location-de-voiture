import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ClientListeComponent } from '../component/client.liste.component';
import { ClientServiceResolver } from '../../common/resolver/client.resolve';
import { AuthGuard } from '../../common/authGuard/AuthGuard';

const routes: Routes = [
    { path: '', component: ClientListeComponent
    }

];


@NgModule ({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class ListeClientRoute {
}