import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CardHeaderComponent } from '../../common/cardHeader/card-header.component';
import { HeaderPartComponent } from './header-part.component';


@NgModule ({
    declarations:
    [
        HeaderPartComponent
    ],
    imports:
    [
      CommonModule,
      FormsModule,
      HttpClientModule,
    ],
    exports :
    [
        HeaderPartComponent
    ]
  })
export class HeaderPartModule {

}