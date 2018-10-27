import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardService } from './dashboard/dashboard.service';
import { AuthGuard } from './common/authGuard/AuthGuard';
import { LayoutComponent } from './layout/layout.component';
import { ReservationSesrvice } from './reservation/service/reservation.service';
import { NouvelleReservationService } from './reservation/service/nouvelleReservation.service';
import { I18n } from './common/customDate/I18n';
import { CustomDatepickerI18n } from './common/customDate/customDatepicker';
import { UtilitaireService } from './common/util/utilitaire';
import { ApiAgenceAdamService } from './common/service/api.agence.adam.service';
import { ApiResolverAgenceAdamService } from './common/resolver/api.agence.adam.resolver';
import { ClientServiceResolver } from './common/resolver/client.resolve';
import { ClientService } from './client/service/client.service';
import { VehiculeService } from './vehicule/service/vehicule.service';
import { VehiculeResolver } from './common/resolver/vehicule.resolver';
import { RevisionService } from './revision/revision.service';
import { RevisionResolver } from './common/resolver/revision.resolver';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AsideService } from './aside/aside.service';
import { AlertService } from './alert/alert.service';
import { MaintenanceService } from './maintenance/maintenance.service';
import { MaintenanceResolver } from './common/resolver/maintenance.resolver';
import { NumberOnlyDirective } from './common/directive/numberOnly.directive';
import { AuthGuardLocation } from './common/authGuard/AuthGuardLocation';
import { LocationService } from './location/service/location.service';
import { DetteService } from './dette/dette.service';
import { AsideModule } from './aside/aside-module/aside-module.module';
import { GlobalModule } from './common/module-common/module.common';
import { LoginService } from './login/login.service';










@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LayoutComponent,
    NumberOnlyDirective
  ]
  ,
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    GlobalModule,
    AsideModule
  ]
  ,
  providers: [
    UtilitaireService,
    LocationService,
    LoginService,
    DashboardService,
    AuthGuardLocation,
    AuthGuard, ReservationSesrvice, NouvelleReservationService, I18n, CustomDatepickerI18n, ClientService,
    RevisionService, RevisionResolver, AsideService, AlertService, MaintenanceService, MaintenanceResolver,
    ApiAgenceAdamService, ApiResolverAgenceAdamService, ClientServiceResolver, VehiculeService, VehiculeResolver,
    DetteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
