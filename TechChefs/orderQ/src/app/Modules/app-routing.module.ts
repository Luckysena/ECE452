import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrdersComponent } from '../components/orders/orders.component';
import { AboutComponent } from '../components/about/about.component';

import { SearchorderComponent } from '../components/searchorder/searchorder.component';
import { InventoryComponent } from '../components/inventory/inventory.component';
import { ServerComponent } from '../components/server/server.component';
import { EntreesComponent } from '../cust-components/entrees/entrees.component';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../cust-components/home/home.component';

const appRoutes: Routes = [
    { path:'login', component: LoginComponent },
    { path:'entree', component: EntreesComponent },
    { path:'home', component: HomeComponent },
    { path:'server', component:ServerComponent },
    { path:'table/43',component:SearchorderComponent },
    { path:'inventory',component:InventoryComponent },
    { path:'queue',component:OrdersComponent },
    { path:'about', component:AboutComponent },
    { path: '', redirectTo:'/login', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
