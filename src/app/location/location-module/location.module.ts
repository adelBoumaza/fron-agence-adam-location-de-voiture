import { NgModule } from '@angular/core';
import { LocationComponent } from '../location.component';
import { GlobalModule } from '../../common/module-common/module.common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { AsideModule } from '../../aside/aside-module/aside-module.module';
import { LocationRoute } from '../location-route/location.route';

@NgModule({
    declarations : [LocationComponent],
    imports : [
      GlobalModule,
      CommonModule,
      // BrowserModule,
      LocationRoute,
      FormsModule,
      HttpClientModule,
      ReactiveFormsModule,
      NgxPaginationModule,
      AsideModule,
      NgbModule.forRoot()
    ],
    exports : [LocationComponent]
})
export class LocationModule {

}