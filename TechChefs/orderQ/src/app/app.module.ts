import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './Modules/app-routing.module';
import { OrdersComponent } from './components/orders/orders.component';
import { AboutComponent } from './components/about/about.component';
import { EmployeeComponent } from './components/employee/employee.component';
import {DataService} from './services/data.service';
import { InvServiceService } from './components/inventory/inv-service.service';
import { EmployeeService } from './components/employee/employee.service';
import { SearchorderComponent } from './components/searchorder/searchorder.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { ServerComponent } from './components/server/server.component';
import { EntreesComponent } from './cust-components/entrees/entrees.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from './../environments/environment';
import { CookieService } from 'ngx-cookie-service';
import { DatePipe } from '@angular/common';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';
import 'hammerjs';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './cust-components/home/home.component';
import { PlaceOrderComponent } from './cust-components/place-order/place-order.component';
import { ConfirmComponent } from './cust-components/confirm/confirm.component';
import { CustDashboardComponent } from './cust-components/cust-dashboard/cust-dashboard.component';
import { CartComponent } from './cust-components/cart/cart.component';
import { EmpDashComponent } from './components/emp-dash/emp-dash.component';
import { RevenueGraphComponent } from './components/revenue-graph/revenue-graph.component';
import { RegisterComponent } from './register/register.component';

import { CommentsComponent } from './cust-components/comments/comments.component';
import { MessageComponent } from './cust-components/message/message.component';
import { MinThreshComponent } from './min-thresh/min-thresh.component';



@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    AboutComponent,
    SearchorderComponent,
    InventoryComponent,
    ServerComponent,
    EntreesComponent,
    LoginComponent,
    HomeComponent,
    PlaceOrderComponent,
    ConfirmComponent,
    CustDashboardComponent,
    CartComponent,
    EmployeeComponent,
    EmpDashComponent,
    RegisterComponent,
    CommentsComponent,
    MessageComponent,
    MinThreshComponent,
    RevenueGraphComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  entryComponents: [
    CartComponent
  ],
  providers: [DataService, CookieService, DatePipe, InvServiceService, EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
