import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginComponent} from './login/login.component';
import { OverviewComponent } from './dashboard/overview/overview.component';
import { AddPolicyComponent } from './dashboard/add-policy/add-policy.component';
import { ProfileManagementComponent } from './dashboard/profile-management/profile-management.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from "./angular-material";
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OverviewComponent,
    AddPolicyComponent,
    ProfileManagementComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
