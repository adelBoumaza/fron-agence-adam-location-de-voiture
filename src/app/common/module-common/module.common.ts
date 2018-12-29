import { NgModule } from '@angular/core';
import { FilterPipe } from '../pipe/filter.pipe';
import { FilterPipeVehicule } from '../pipe/filter.vehicule';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { HeaderPartComponent } from '../header-part/header-part.component';
import { HeaderPartModule } from '../header-part/header-part.module';

@NgModule({
  imports: []
  ,
  declarations: [
      FilterPipe,
      FilterPipeVehicule
    ]
  ,
  exports : [
    FilterPipe,
    FilterPipeVehicule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    HeaderPartModule
  ]
})
export class GlobalModule { }



