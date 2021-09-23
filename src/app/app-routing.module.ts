import { LandingPageComponent } from './landing-page/landing-page.component';
import { AppComponent } from './app.component';
import { RestaurantsListComponent } from './restaurants-list/restaurants-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodMenuListComponent } from './food-menu-list/food-menu-list.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {path: '', redirectTo: 'landing-page', pathMatch: 'full'},
  {path: 'food-menu-list', component: FoodMenuListComponent},
  {path: 'restaurants-list', component: RestaurantsListComponent},
  {path: 'landing-page', component: LandingPageComponent},
  {path: 'cart', component: CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
