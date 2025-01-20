import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InterpolationComponent } from './components/interpolation/interpolation.component';
import { PropertyBindingComponent } from './components/property-binding/property-binding.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForComponent } from './components/for/for.component';
import { ClassComponent } from './components/class/class.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { ObservableComponent } from './components/observable/observable.component';
import { StudentComponent } from './components/student/student.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { ReactiveComponent } from './components/reactive/reactive.component';
import { ViewEncapsulationComponent } from './components/view-encapsulation/view-encapsulation.component';
import { AddComponent } from './components/add/add.component';
import { DummiComponent } from './components/dummi/dummi.component';
import { MobilesInsertComponent } from './project/mobiles-insert/mobiles-insert.component';
import { UpdateEmployeeComponent } from './project/update-employee/update-employee.component';
import { DeleteEmployeeComponent } from './project/delete-employee/delete-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    ForComponent,
    ClassComponent,
    ParentComponent,
    ChildComponent,
    ObservableComponent,
    StudentComponent,
    StudentDetailsComponent,
    ReactiveComponent,
    ViewEncapsulationComponent,
    AddComponent,
    DummiComponent,
    MobilesInsertComponent,
    UpdateEmployeeComponent,
    DeleteEmployeeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
