import { NgModule } from '@angular/core';

import { RestaurantViewComponent } from './restaurant-view.component';
import { GoogleMapsModule } from '@angular/google-maps'
import { LeafletModule } from '@asymmetrik/ngx-leaflet';



@NgModule({
  declarations: [RestaurantViewComponent],
  imports: [
    GoogleMapsModule,
    LeafletModule
  ],
  exports: [
    RestaurantViewComponent,
    GoogleMapsModule
  ],
  providers: [],
})
export class RestaurantViewModule {}