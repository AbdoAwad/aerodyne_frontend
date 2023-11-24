import { Component, OnInit, ViewChild } from '@angular/core';
import { RestaurantService } from '../../services/restaurant.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { RetaurantFormComponent } from '../restaurant-form/restaurant-form.component';
import { SnackbarService } from '../../services/snackbar.serice';
import { Router } from '@angular/router';



@Component({
  selector: 'app-restaurant-table',
  templateUrl: './restaurant-table.component.html',
  styleUrl: './restaurant-table.component.css'
})

export class RestaurantTableComponent implements OnInit {

  displayedColumns: string[] = ['name', 'type', 'coordinates', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _restaurantService: RestaurantService,
    private _dialog: MatDialog,
    private _snackbarService: SnackbarService,
    private router: Router
    ){}

  ngOnInit(): void {
    this.getRestaurants();
    this._restaurantService.restaurantAdded$.subscribe(() => {
      this.getRestaurants();
    });
  }

  openRestaurantForm(){
    this._dialog.open(RetaurantFormComponent)
  }



  getRestaurants() {
    this._restaurantService.getRestaurants().subscribe({
      next: (restaurantsList) => {
        restaurantsList.reverse();
        this.dataSource = new MatTableDataSource(restaurantsList);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: (err: any) => {
        console.error(err);
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteRestaurant(id: string){
    this._restaurantService.deleteRestaurant(id).subscribe({
      next: (res) => {
        this._snackbarService.openSnackBar('Restaurant deleted!', 'done');
        this.getRestaurants();
      },
      error: console.log,
    });
  }

  viewRestaurant(id: string) {
    console.log(id)
    this.router.navigate(['/', id]);
  }

}
