import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './common/authGuard/AuthGuard';




const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent,canActivate: [AuthGuard]},
    { path: '**', redirectTo: 'login', pathMatch: 'full'}
];

export const routing = RouterModule.forRoot(routes,{ useHash: true });
