import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolbarModule } from './components/toolbar/toolbar.module'
import { RestaurantTableModule } from './components/restaurant-table/restaurant-table.module';
import { RestaurantViewModule } from './components/restaurant-view/restaurant-view..module';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ToolbarModule,
    RestaurantTableModule,
    AppRoutingModule,
    RestaurantViewModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}