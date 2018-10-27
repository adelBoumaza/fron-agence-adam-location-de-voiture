import { NgModule } from '@angular/core';
import { VehiculeListeComponent } from '../component/vhecule.liste.component';
import { GlobalModule } from '../../common/module-common/module.common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ColorPickerModule } from 'ngx-color-picker';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AsideModule } from '../../aside/aside-module/aside-module.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { VehiculeListeRoute } from '../vehicule-route/vehicule.liste.route';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations : [
        VehiculeListeComponent
    ],
    imports : [
        GlobalModule,
        CommonModule,
        // BrowserModule,
        VehiculeListeRoute,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        NgxPaginationModule,
        AsideModule,
        ColorPickerModule,
        NgbModule.forRoot()
    ],
    exports : [
        VehiculeListeComponent
    ]
})
export class VehiculeListeModule {
}