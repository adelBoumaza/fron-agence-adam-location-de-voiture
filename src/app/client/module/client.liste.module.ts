import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientRoute } from '../route/client.route';
import { ClientComponent } from '../component/client.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AsideComponent } from '../../aside/aside.component';
import { ClientListeComponent } from '../component/client.liste.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from '../../common/pipe/filter.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { AsideModule } from '../../aside/aside-module/aside-module.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ColorPickerModule } from 'ngx-color-picker';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GlobalModule } from '../../common/module-common/module.common';
import { ListeClientRoute } from '../route/client.liste.route';

@NgModule ({
    declarations: [
      ClientListeComponent
    ],
    imports: [
      GlobalModule,
      CommonModule,
      FormsModule,
      HttpClientModule,
      ReactiveFormsModule,
      NgxPaginationModule,
      AsideModule,
      NgbModule.forRoot(),
      ListeClientRoute
    ],
    exports : [
      ClientListeComponent
    ]
  })
export class ListeClientModule {

}

