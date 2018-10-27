import { NgModule } from '@angular/core';
import { VehiculeListeComponent } from '../component/vhecule.liste.component';
import { VehiculeComponent } from '../component/vehicule.component';
import { GlobalModule } from '../../common/module-common/module.common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ColorPickerModule } from 'ngx-color-picker';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AsideModule } from '../../aside/aside-module/aside-module.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { VehiculeRoute } from '../vehicule-route/vehicule.route';

@NgModule({
    declarations : [
        VehiculeComponent
    ],
    imports : [
        GlobalModule,
        CommonModule,
        // BrowserModule,
        VehiculeRoute,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        // NgxPaginationModule,
        AsideModule,
        ColorPickerModule,
        NgbModule.forRoot()
    ],
    exports : [
        VehiculeComponent
    ]
})
export class VehiculeModule {}