import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientListeComponent } from '../component/client.liste.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { AsideModule } from '../../aside/aside-module/aside-module.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GlobalModule } from '../../common/module-common/module.common';
import { ListeClientRoute } from '../route/client.liste.route';
import { ErrorGlobalHandlerService } from '../../common/error/global-error/service/error.global.handler.service';
import { TableComponent } from '../../common/table/table.component';
import { CardHeaderModule } from '../../common/cardHeader/card-header.module';
import { SearchModule } from '../../common/search/search.module';

@NgModule({
  declarations:
    [
      ClientListeComponent
    ],
  imports:
    [
      GlobalModule,
      AsideModule,
      NgbModule.forRoot(),
      ListeClientRoute,
      SearchModule,
      CardHeaderModule
    ],
  exports:
    [
      ClientListeComponent
    ]
    ,
    providers:
    [
      { provide: ErrorHandler, useClass: ErrorGlobalHandlerService }
    ]
})
export class ListeClientModule {

}

