import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FoodMenuListComponent } from './food-menu-list/food-menu-list.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';
import { RestaurantsListComponent } from './restaurants-list/restaurants-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import {MatDialogModule} from '@angular/material/dialog';
import { TopBar2Component } from './top-bar2/top-bar2.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    FoodMenuListComponent,
    RestaurantsListComponent,
    TopBarComponent,
    FooterComponent,
    CartComponent,
    TopBar2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule,
    MatProgressBarModule,
    MatCardModule,
    MatSliderModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
