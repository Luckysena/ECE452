import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { MenuComponent } from '../menu/menu.component';
import { CocktailsComponent } from '../cocktails/cocktails.component';
import { LoginComponent } from '../login/login.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'menu', component: MenuComponent, children: [
      { path: 'cocktails', component: CocktailsComponent, outlet:'cocktails' },
    ]
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
