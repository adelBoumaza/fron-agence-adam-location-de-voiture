import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideComponent } from '../aside.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
  ]
  ,
  declarations: [AsideComponent]
  ,
  exports : [
    AsideComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AsideModule { }
