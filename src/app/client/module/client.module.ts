import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientRoute } from '../route/client.route';
import { ClientComponent } from '../component/client.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AsideModule } from '../../aside/aside-module/aside-module.module';
 import {
  MatFormFieldModule,
  MatInputModule,
  MatProgressBarModule,
  MatSelectModule,
  MatRippleModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatRadioModule,
  MatIconModule
} from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GlobalModule } from '../../common/module-common/module.common';


@NgModule ({
    declarations:
    [
      ClientComponent
    ],
    imports:
    [
      GlobalModule,
      CommonModule,
      MatFormFieldModule, MatInputModule, MatProgressBarModule , MatDatepickerModule,
      MatNativeDateModule, MatIconModule,
      MatRadioModule,
      MatRippleModule,
      MatSelectModule,
      FormsModule,
      HttpClientModule,
      ReactiveFormsModule,
      AsideModule,
      ClientRoute,
      NgbModule.forRoot()
    ],
    exports :
    [
      ClientComponent
    ],
    providers:
    [
      MatDatepickerModule,
    ],
  })
export class ClientModule {

}

