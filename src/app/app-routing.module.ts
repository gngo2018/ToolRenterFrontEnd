import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { EquipmentComponent } from './components/equipment/equipment.component';
import { EquipmentTypeComponent } from './components/equipment-type/equipment-type.component';
import { RequestComponent } from './components/request/request.component';
import { AdminComponent } from './components/admin/admin.component';

const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'admin', component: AdminComponent},
  //Home Default Path
  {path: '', component: HomeComponent},

  //Table Routing
  {path: 'equipment', children: [
    {path: '', component: EquipmentComponent},
    //For Later
    // {path: 'create', component: EquipmentCreateComponent},
    // {path: 'detail/:id', component: EquipmentDetailComponent},
    // {path: 'update/:id', component: EquipmentUpdateComponent},
    // {path: 'delete/:id', component: EquipmentDeleteComponent},
  ]},
  {path: 'equipment-type', children:[
    {path: '', component: EquipmentTypeComponent},
    //For Later
    // {path: 'create', component: EquipmentTypeCreateComponent},
    // {path: 'detail/:id', component: EquipmentTypeDetailComponent},
    // {path: 'update/:id', component: EquipmentTypeUpdateComponent},
    // {path: 'delete/:id', component: EquipmentTypeDeleteComponent},
  ]},
  {path: 'request', children:[
    {path: '', component: RequestComponent},
    //For Later
    // {path: 'create', component: RequestCreateComponent},
    // {path: 'detail/:id', component: RequestDetailComponent},
    // {path: 'update/:id', component: RequestUpdateComponent},
    // {path: 'delete/:id', component: RequestDeleteComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }