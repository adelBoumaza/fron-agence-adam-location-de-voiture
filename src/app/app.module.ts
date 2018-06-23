import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { routing } from './routing';
import { RouterModule } from '@angular/router';
import { LoginService } from './login/login.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardService } from './dashboard/dashboard.service';
import { AuthGuard } from './common/authGuard/AuthGuard';
import { LayoutComponent } from './layout/layout.component';
import { ClientComponent } from './client/client.component';
import { AsideComponent } from './aside/aside.component';
import { VehiculeComponent } from './vehicule/vehicule.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { LocationComponent } from './location/location.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ReservationService } from './reservation/reservation.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FullCalendarModule } from 'ng-fullcalendar';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    LayoutComponent,
    ClientComponent,
    AsideComponent,
    VehiculeComponent,
    LocationComponent,
    ReservationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    routing,
    ColorPickerModule,
    FullCalendarModule,
    NgbModule.forRoot()
  ],
  providers: [
    LoginService,
    DashboardService,
    AuthGuard,
    ReservationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
