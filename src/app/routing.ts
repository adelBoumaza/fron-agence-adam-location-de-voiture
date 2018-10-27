import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './common/authGuard/AuthGuard';
import { ClientServiceResolver } from './common/resolver/client.resolve';
import { VehiculeResolver } from './common/resolver/vehicule.resolver';
import { RevisionResolver } from './common/resolver/revision.resolver';
import { AuthGuardLocation } from './common/authGuard/AuthGuardLocation';






const routes: Routes = [
    {
      path: 'login',
      loadChildren : '../../src/app/login/login-module/login.module#LoginModule'
    },
    {
      path: 'liste-client',
      loadChildren : '../../src/app/client/module/client.liste.module#ListeClientModule',
      canActivate: [AuthGuard],
      resolve : {listeClient : ClientServiceResolver}
    },
    {
      path: 'client',
      loadChildren : '../../src/app/client/module/client.module#ClientModule',
      canActivate: [AuthGuard]
    },
    {
      path: 'revision',
      loadChildren : '../../src/app/revision/revision-module/revision.module#RevisionModule',
      canActivate: [AuthGuard],
      resolve : {listeRevision: RevisionResolver}
    },
    {
      path: 'vehicule',
      loadChildren : '../../src/app/vehicule/vehicule-module/vehicule.module#VehiculeModule',
      canActivate: [AuthGuard]
    },
    {
      path: 'liste-vehicule',
      loadChildren : '../../src/app/vehicule/vehicule-module/vehicule.liste.module#VehiculeListeModule',
      canActivate: [AuthGuard],
      resolve : {listeVehicule: VehiculeResolver}
    },
    {
      path: 'reservation',
      loadChildren : '../../src/app/reservation/reservation-module/reservation.liste.module#ReservationListeModule',
      canActivate: [AuthGuard]
    },
    {
      path: 'nouvelle-reservation',
      loadChildren : '../../src/app/reservation/reservation-module/reservation.module#ReservationModule',
      canActivate: [AuthGuard]
    },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
    {
      path: 'location',
      loadChildren : '../../src/app/location/location-module/location.module#LocationModule',
      canActivate: [AuthGuardLocation]
    },
    {
      path: 'fiche-maintenance',
      loadChildren : '../../src/app/maintenance/maintenance-module/maintenance.module#MaintenanceModule',
      canActivate: [AuthGuard]
    },
    { path: 'liste-dettes',
      loadChildren : '../../src/app/dette/dette-module/dette.module#DetteModule',
      canActivate: [AuthGuard]
    },
    { path: '**', redirectTo: 'login', pathMatch: 'full'}
];

// export const routing = RouterModule.forRoot(routes, { useHash: true });
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
  export class AppRoutingModule {}
