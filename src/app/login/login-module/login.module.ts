import { LoginComponent } from '../login.component';
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
import { LoginRoute } from '../login-route/login.route';




@NgModule({
    imports : [
        CommonModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        NgxPaginationModule,
        LoginRoute,
        AsideModule,
        ColorPickerModule,
        NgbModule.forRoot()
    ],
    declarations : [LoginComponent],
    exports : [LoginComponent]
})
export class LoginModule {

}