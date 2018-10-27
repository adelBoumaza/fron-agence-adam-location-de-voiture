import { NgModule } from '@angular/core';
import { FilterPipe } from '../pipe/filter.pipe';
import { FilterPipeVehicule } from '../pipe/filter.vehicule';
import { AsideModule } from '../../aside/aside-module/aside-module.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    // AsideModule,
    // BrowserModule,
    // BrowserAnimationsModule,
    // FormsModule,
    // HttpClientModule,
    // NgbModule.forRoot(),
    // ReactiveFormsModule,
    // NgxPaginationModule
  ]
  ,
  declarations: [
      FilterPipe,
      FilterPipeVehicule
    ]
  ,
  exports : [
    FilterPipe,
    FilterPipeVehicule,
    // AsideModule,
    // BrowserModule,
    // CommonModule,
    // BrowserAnimationsModule,
    // FormsModule,
    // HttpClientModule,
    // ReactiveFormsModule,
    // NgxPaginationModule
  ]
})
export class GlobalModule { }



