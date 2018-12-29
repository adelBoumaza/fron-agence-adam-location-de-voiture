import { NgModule } from '@angular/core';
import { LocationComponent } from '../location.component';
import { GlobalModule } from '../../common/module-common/module.common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { AsideModule } from '../../aside/aside-module/aside-module.module';
import { LocationRoute } from '../location-route/location.route';

@NgModule({
    declarations : [LocationComponent],
    imports : [
      GlobalModule,
      LocationRoute,
      AsideModule,
      NgbModule.forRoot()
    ],
    exports : [LocationComponent]
})
export class LocationModule {

}