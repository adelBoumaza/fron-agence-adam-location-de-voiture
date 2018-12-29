import { NgModule, ErrorHandler } from '@angular/core';
import { MaintenanceComponent } from '../maintenance.component';
import { GlobalModule } from '../../common/module-common/module.common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { AsideModule } from '../../aside/aside-module/aside-module.module';
import { ColorPickerModule } from 'ngx-color-picker';
import { MaintenanceRoute } from '../maintenance-route/maintenance.route';

@NgModule({
    imports : [
        GlobalModule,
        MaintenanceRoute,
        AsideModule,
        ColorPickerModule,
        NgbModule.forRoot()
    ],
    declarations : [MaintenanceComponent],
    exports : [MaintenanceComponent]
})
export class MaintenanceModule {

}