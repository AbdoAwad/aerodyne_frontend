// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantViewComponent } from './components/restaurant-view/restaurant-view.component';
import { RestaurantTableComponent } from './components/restaurant-table/restaurant-table.component';

const routes: Routes = [
  { path: '', component: RestaurantTableComponent },
  { path: ':id', component: RestaurantViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
