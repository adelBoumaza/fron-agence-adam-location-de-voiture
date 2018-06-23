import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './common/authGuard/AuthGuard';
import { ClientComponent } from './client/client.component';
import { VehiculeComponent } from './vehicule/vehicule.component';
import { LocationComponent } from './location/location.component';
import { ReservationComponent } from './reservation/reservation.component';




const routes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'client', component: ClientComponent,canActivate: [AuthGuard] },
    { path: 'reservation', component: ReservationComponent,canActivate: [AuthGuard] },
    { path: 'dashboard', component: DashboardComponent,canActivate: [AuthGuard]},
    { path: 'vehicule', component: VehiculeComponent,canActivate: [AuthGuard]},
    { path: 'location', component: LocationComponent,canActivate: [AuthGuard]},
    { path: '**', redirectTo: 'login', pathMatch: 'full'}
];

export const routing = RouterModule.forRoot(routes,{ useHash: true });
