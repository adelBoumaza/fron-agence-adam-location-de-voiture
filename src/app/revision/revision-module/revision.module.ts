import { NgModule } from '@angular/core';
import { GlobalModule } from '../../common/module-common/module.common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RevisionComponent } from '../revision.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AsideModule } from '../../aside/aside-module/aside-module.module';
import { ColorPickerModule } from 'ngx-color-picker';
import { RevisionRoute } from '../revision-route/revision.route';

@NgModule({
    imports: [
        GlobalModule,
        RevisionRoute,
        AsideModule,
        ColorPickerModule,
        NgbModule.forRoot()
    ],
    declarations: [RevisionComponent],
    exports: [RevisionComponent]
})
export class RevisionModule {

}