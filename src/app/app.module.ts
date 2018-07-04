import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { routing } from './routing';
import { RouterModule } from '@angular/router';
import { LoginService } from './login/login.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardService } from './dashboard/dashboard.service';
import { AuthGuard } from './common/authGuard/AuthGuard';
import { LayoutComponent } from './layout/layout.component';
import { ClientComponent } from './client/component/client.component';
import { AsideComponent } from './aside/aside.component';
import { VehiculeComponent } from './vehicule/vehicule.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { LocationComponent } from './location/location.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FullCalendarModule } from 'ng-fullcalendar';
import { ReservationSesrvice } from './reservation/service/reservation.service';
import { ReservationComponent } from './reservation/component/reservation.component';
import { NouvelleReservationComponent } from './reservation/component/nouvelleReservation.component';
import { NouvelleReservationService } from './reservation/service/nouvelleReservation.service';
import { I18n } from './common/customDate/I18n';
import { CustomDatepickerI18n } from './common/customDate/customDatepicker';
import { RevisionComponent } from './revision/revision.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { UtilitaireService } from './common/util/utilitaire';
import { ApiAgenceAdamService } from './common/service/api.agence.adam.service';
import { ApiResolverAgenceAdamService } from './common/resolver/api.agence.adam.resolver';
import { ClientServiceResolver } from './common/resolver/client.resolve';
import { ClientListeComponent } from './client/component/client.liste.component';
import { ClientService } from './client/service/client.service';
import {NgxPaginationModule} from 'ngx-pagination';
import { FilterPipe } from './common/pipe/filter.pipe';















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
    ReservationComponent,
    NouvelleReservationComponent,
    RevisionComponent,
    MaintenanceComponent,
    ClientListeComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    routing,
    ColorPickerModule,
    FullCalendarModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [
    UtilitaireService,
    LoginService,
    DashboardService,
    AuthGuard,ReservationSesrvice,NouvelleReservationService,I18n,CustomDatepickerI18n,ClientService,
    ApiAgenceAdamService,ApiResolverAgenceAdamService,ClientServiceResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
