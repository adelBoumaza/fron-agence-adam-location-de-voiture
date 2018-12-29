import { NgModule } from '@angular/core';
import { DetteComponent } from '../dette.component';
import { FilterPipe } from '../../common/pipe/filter.pipe';
import { AsideModule } from '../../aside/aside-module/aside-module.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { GlobalModule } from '../../common/module-common/module.common';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DetteRoute } from '../route/dette.route';
import { CardHeaderModule } from '../../common/cardHeader/card-header.module';
import { SearchModule } from '../../common/search/search.module';


@NgModule ({
    declarations: [
      DetteComponent
    ],
    imports: [
      GlobalModule,
      CardHeaderModule,
      DetteRoute,
      AsideModule,
      SearchModule,
      NgbModule.forRoot()
    ],
    exports : [
      DetteComponent
    ]
  })
export class DetteModule {

}



