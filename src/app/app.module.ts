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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    routing
  ],
  providers: [
    LoginService,
    DashboardService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
