import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';




const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(routes,{ useHash: true });
