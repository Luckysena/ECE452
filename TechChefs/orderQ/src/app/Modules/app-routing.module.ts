import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrdersComponent } from '../components/orders/orders.component';
import { AboutComponent } from '../components/about/about.component';
import{EmployeeComponent} from '../components/employee/employee.component';
import { SearchorderComponent } from '../components/searchorder/searchorder.component';
import { InventoryComponent } from '../components/inventory/inventory.component';
import { ServerComponent } from '../components/server/server.component';
import { EntreesComponent } from '../cust-components/entrees/entrees.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { HomeComponent } from '../cust-components/home/home.component';
import { PlaceOrderComponent } from '../cust-components/place-order/place-order.component';
import { ConfirmComponent } from '../cust-components/confirm/confirm.component';
import { CustDashboardComponent } from '../cust-components/cust-dashboard/cust-dashboard.component';
import{EmpDashComponent} from '../components/emp-dash/emp-dash.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
        { path: 'register', component: RegisterComponent },
    {
        path: 'dashboard', component: CustDashboardComponent, children: [
            { path: 'home', component: HomeComponent },
            { path: 'place-order', component: PlaceOrderComponent },
            { path: 'confirm', component: ConfirmComponent },
            { path: 'entrees', component: EntreesComponent },
        ]
    },
    { path: 'server', component: ServerComponent },
    { path: 'table/43', component: SearchorderComponent },
    { path: 'inventory', component: InventoryComponent },
      { path: 'empDash', component: EmpDashComponent },
    { path: 'employee', component: EmployeeComponent },
    { path: 'queue', component: OrdersComponent },
    { path: 'about', component: AboutComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
