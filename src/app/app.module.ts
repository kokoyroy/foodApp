import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { MainviewComponent } from './dashboard/mainview/mainview.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FooditemComponent } from './dashboard/mainview/fooditem/fooditem.component';
import { FooddetailsComponent } from './dashboard/mainview/fooddetails/fooddetails.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent,
    HeaderComponent,
    MainviewComponent,
    FooditemComponent,
    FooddetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
