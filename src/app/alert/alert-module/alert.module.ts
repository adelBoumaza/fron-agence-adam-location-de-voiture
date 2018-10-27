import { NgModule } from '@angular/core';
import { GlobalModule } from '../../common/module-common/module.common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { AsideModule } from '../../aside/aside-module/aside-module.module';
import { ColorPickerModule } from 'ngx-color-picker';
import { AlertComponent } from '../alert.component';
import { AlertRoute } from '../alert-route/alert.route';




@NgModule({
    imports : [
        GlobalModule,
        CommonModule,
        AlertRoute,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        NgxPaginationModule,
        AsideModule,
        ColorPickerModule,
        NgbModule.forRoot()
    ],
    declarations : [AlertComponent],
    exports : [AlertComponent]
})
export class AlertModule {

}