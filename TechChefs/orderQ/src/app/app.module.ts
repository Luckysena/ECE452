import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './Modules/app-routing.module';
import { OrdersComponent } from './components/orders/orders.component';
import { AboutComponent } from './components/about/about.component';

import {DataService} from './services/data.service';
import { SearchorderComponent } from './components/searchorder/searchorder.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { ServerComponent } from './components/server/server.component';
import { EntreesComponent } from './cust-components/entrees/entrees.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
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

  ],
  providers: [DataService, CookieService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
