import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { MenuComponent } from '../menu/menu.component';
import { CocktailsComponent } from '../cocktails/cocktails.component';
import { LoginComponent } from '../login/login.component';
import { UserChoiceComponent } from '../user-choice/user-choice.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { SchedulingComponent } from '../scheduling/scheduling.component';

const routes: Routes = [
  { path: 'userchoice', component: UserChoiceComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'home', component: HomeComponent, children: [
      { path: 'dashboard', component: DashboardComponent},
      { path: 'menu', component: MenuComponent },
      { path: 'scheduling', component: SchedulingComponent }
      //{ path: '', redirectTo: '/dashboard', pathMatch: 'full' }
    ]
  },
  //{
  //  path: 'menu', component: MenuComponent, children: [
  //    { path: 'cocktails', component: CocktailsComponent, outlet:'cocktails' },
  //  ]
  //},
  { path: '', redirectTo: '/userchoice', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
