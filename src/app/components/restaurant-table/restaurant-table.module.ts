import { NgModule } from '@angular/core';

import { RestaurantTableComponent } from './restaurant-table.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RetaurantFormModule } from '../restaurant-form/restaurant-form.module'

@NgModule({
  declarations: [RestaurantTableComponent],
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    RetaurantFormModule
  ],
  exports: [
    RestaurantTableComponent,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    RetaurantFormModule
  ],
  providers: [],
})
export class RestaurantTableModule {}