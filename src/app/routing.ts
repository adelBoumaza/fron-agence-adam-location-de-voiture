import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './common/authGuard/AuthGuard';
import { VehiculeComponent } from './vehicule/vehicule.component';
import { LocationComponent } from './location/location.component';
import { ReservationComponent } from './reservation/component/reservation.component';
import { NouvelleReservationComponent } from './reservation/component/nouvelleReservation.component';
import { RevisionComponent } from './revision/revision.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { ClientServiceResolver } from './common/resolver/client.resolve';
import { ClientListeComponent } from './client/component/client.liste.component';
import { ClientComponent } from './client/component/client.component';





const routes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'liste-client', component: ClientListeComponent,canActivate: [AuthGuard],
        resolve : {listeClient : ClientServiceResolver}
    },
    { path: 'client', component: ClientComponent,canActivate: [AuthGuard] },
    { path: 'reservation', component: ReservationComponent,canActivate: [AuthGuard] },
    { path: 'nouvelle-reservation', component: NouvelleReservationComponent,canActivate: [AuthGuard] },
    { path: 'dashboard', component: DashboardComponent,canActivate: [AuthGuard]},
    { path: 'vehicule', component: VehiculeComponent,canActivate: [AuthGuard]},
    { path: 'location', component: LocationComponent,canActivate: [AuthGuard]},
    { path: 'revision', component: RevisionComponent,canActivate: [AuthGuard]},
    { path: 'fiche-maintenance', component: MaintenanceComponent,canActivate: [AuthGuard]},
    { path: '**', redirectTo: 'login', pathMatch: 'full'}
];

export const routing = RouterModule.forRoot(routes,{ useHash: true });
