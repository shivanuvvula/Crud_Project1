import { NgModule, ViewEncapsulation } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './components/parent/parent.component';
import { HomeComponent } from './components/home/home.component';
import { StudentComponent } from './components/student/student.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { ReactiveComponent } from './components/reactive/reactive.component';
import { ViewEncapsulationComponent } from './components/view-encapsulation/view-encapsulation.component';
import { DummiComponent } from './components/dummi/dummi.component';
import { MobilesInsertComponent } from './project/mobiles-insert/mobiles-insert.component';
import { UpdateEmployeeComponent } from './project/update-employee/update-employee.component';
import { DeleteEmployeeComponent } from './project/delete-employee/delete-employee.component';

const routes: Routes = [{
path:'',//localhost:4200
redirectTo:'/dummi',
pathMatch:'full'
},
{
  path:"home",
  component:HomeComponent
},
{
path:"dummi",
component:DummiComponent
},
{
  path:"reactive",
  component:ReactiveComponent
},
{
  path:"parent",
  component:ParentComponent
},
{
  path:"student",
  component:StudentComponent
},
{
  path:"details",
  component:StudentDetailsComponent
},
{
  path:"encapsulation",
  component:ViewEncapsulationComponent
},
{
  path:"insert",
  component:MobilesInsertComponent
},
{
  path:"update/:id",
  component:UpdateEmployeeComponent
},
{
  path:"delete/:id",
  component:DeleteEmployeeComponent
},
{ path: 'user', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule) }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }