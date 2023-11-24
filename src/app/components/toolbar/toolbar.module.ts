import { NgModule } from '@angular/core';

import { ToolbarComponent } from './toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { RetaurantFormModule } from '../restaurant-form/restaurant-form.module'

@NgModule({
  declarations: [ToolbarComponent],
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RetaurantFormModule,
    MatDialogModule
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    ToolbarComponent,
    RetaurantFormModule,
    MatDialogModule
  ],
  providers: [],
})
export class ToolbarModule {}