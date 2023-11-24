import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RestaurantService } from '../../services/restaurant.service';
import { MatDialogRef } from '@angular/material/dialog';
import { SnackbarService } from '../../services/snackbar.serice';

@Component({
  selector: 'app-retaurant-form',
  templateUrl: './restaurant-form.component.html',
  styleUrl: './restaurant-form.component.css'
})
export class RetaurantFormComponent {
  type: string[] = [
    'Non Halal',
    'Halal',
    'Healthy',
    'Fast Food'
  ]

  restaurantForm: FormGroup;

  constructor (
    private _fb: FormBuilder, 
    private _restaurantService: RestaurantService, 
    private _restaueantDailog: MatDialogRef<RetaurantFormComponent>,
    private _snackbarService: SnackbarService
    ) {
    this.restaurantForm = this._fb.group({
      name: '',
      type: '',
      lat: '',
      long: ''
    });
  }

  onFormSubmit() {
    if (this.restaurantForm.valid){
      this._restaurantService.addRestaurant(this.restaurantForm.value).subscribe({
        next: (val: any) => {
          console.log(val);
          this._snackbarService.openSnackBar('Restaurant added!', 'done');
          this._restaueantDailog.close(true);
        },
        error: (err: any) => {
          this._snackbarService.openSnackBar('Error, could not add restaurant, please try again', 'close');
          console.error(err);
        }
      })
    }
  }
}
