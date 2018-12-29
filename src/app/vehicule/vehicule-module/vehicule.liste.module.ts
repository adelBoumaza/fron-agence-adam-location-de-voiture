import { NgModule } from '@angular/core';
import { VehiculeListeComponent } from '../component/vhecule.liste.component';
import { GlobalModule } from '../../common/module-common/module.common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ColorPickerModule } from 'ngx-color-picker';
import { NgxPaginationModule } from 'ngx-pagination';
import { AsideModule } from '../../aside/aside-module/aside-module.module';
import { VehiculeListeRoute } from '../vehicule-route/vehicule.liste.route';
import { CardHeaderModule } from '../../common/cardHeader/card-header.module';
import { SearchModule } from '../../common/search/search.module';

@NgModule({
    declarations : [
        VehiculeListeComponent,
    ],
    imports : [
        GlobalModule,
        CardHeaderModule,
        VehiculeListeRoute,
        AsideModule,
        ColorPickerModule,
        SearchModule,
        NgbModule.forRoot()
    ],
    exports : [
        VehiculeListeComponent
    ]
})
export class VehiculeListeModule {
}