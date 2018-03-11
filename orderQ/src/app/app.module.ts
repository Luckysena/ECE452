import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { OrdersComponent } from './components/orders/orders.component';
import { AboutComponent } from './components/about/about.component';

import {DataService} from './services/data.service';
import { SearchorderComponent } from './components/searchorder/searchorder.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { ServerComponent } from './components/server/server.component';
const appRoutes: Routes = [
{path:'', component:OrdersComponent},
{path:'server', component:ServerComponent},
{path:'table/43',component:SearchorderComponent},
{path:'inventory',component:InventoryComponent},
{path:'queue',component:OrdersComponent},
{path:'about', component:AboutComponent}  
];

@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    AboutComponent,
    SearchorderComponent,
    InventoryComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
