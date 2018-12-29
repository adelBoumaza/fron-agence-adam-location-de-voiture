import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CardHeaderComponent } from '../../common/cardHeader/card-header.component';


@NgModule ({
    declarations:
    [
        CardHeaderComponent
    ],
    imports:
    [
      CommonModule,
      FormsModule,
      HttpClientModule,
    ],
    exports :
    [
        CardHeaderComponent
    ]
  })
export class CardHeaderModule {

}

