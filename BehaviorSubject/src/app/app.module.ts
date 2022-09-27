import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderDashboardComponent } from './main/orderDashboard/order-dashboard.component';
import { OrderHeaderComponentComponent } from './main/orderHeader/order-header.component';
import { OrderTableComponent } from './main/orderTable/order-table.component';
import {MatTableModule} from "@angular/material/table";



@NgModule({
  declarations: [
    AppComponent,
    OrderDashboardComponent,
    OrderHeaderComponentComponent,
    OrderTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
