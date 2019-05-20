import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { 
  MatToolbarModule, 
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';

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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { EquipmentTypeService } from './services/equipment-type.service';
import { EquipmentService } from './services/equipment.service';
import { RequestService } from './services/request.service';

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
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    AuthService,
    EquipmentTypeService,
    EquipmentService,
    RequestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
