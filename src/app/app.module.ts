import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import {ScrollToModule} from 'ng2-scroll-to';

import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StudentComponent } from './student/student.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';
import { UserloginComponent } from './user/userlogin/userlogin.component';
import { UserregistrationComponent } from './user/userregistration/userregistration.component';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { AdminserviceComponent } from './admin/adminservice/adminservice.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StudentComponent,
    HomeComponent,
    UserComponent,
    AboutComponent,
    UserloginComponent,
    UserregistrationComponent,
    AdmindashboardComponent,
    AdminserviceComponent,
    AdminloginComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ScrollToModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
