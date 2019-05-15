import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RequestComponent } from './components/request/request.component';
import { EquipmentComponent } from './components/equipment/equipment.component';
import { EquipmentTypeComponent } from './components/equipment-type/equipment-type.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdminComponent } from './components/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RequestComponent,
    EquipmentComponent,
    EquipmentTypeComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
