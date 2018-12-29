import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProfileComponent } from '../component/profile.component';

const routes: Routes = [
    { path: '', component: ProfileComponent }

];


@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class ProfileRoute {
}