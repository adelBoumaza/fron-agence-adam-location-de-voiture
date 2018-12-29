import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search.component';


@NgModule ({
    declarations:
    [
        SearchComponent
    ],
    imports:
    [
      CommonModule,
      FormsModule,
      HttpClientModule,
    ],
    exports :
    [
        SearchComponent
    ]
  })
export class SearchModule {

}