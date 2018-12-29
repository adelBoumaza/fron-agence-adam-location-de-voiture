import { NgModule } from '@angular/core';
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
import { ProfileComponent } from '../component/profile.component';
import { ProfileRoute } from '../route/profile.route';


@NgModule ({
    declarations:
    [
      ProfileComponent
    ],
    imports:
    [
      GlobalModule,
      MatFormFieldModule, MatInputModule, MatProgressBarModule , MatDatepickerModule,
      MatNativeDateModule, MatIconModule,
      MatRadioModule,
      MatRippleModule,
      MatSelectModule,
      AsideModule,
      ProfileRoute,
      NgbModule.forRoot()
    ],
    exports :
    [
        ProfileComponent
    ],
    providers:
    [
      MatDatepickerModule,
    ],
  })
export class ProfileModule {

}

