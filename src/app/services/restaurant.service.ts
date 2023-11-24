import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators'; 


@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  constructor(private _http: HttpClient) {}
  private restaurantAddedSource = new Subject<void>();
  restaurantAdded$ = this.restaurantAddedSource.asObservable();

  addRestaurant(data: any): Observable<any> {
    const newRestaurant = {
      name: data.name,
      coordinates: {
        latitude: data.lat,
        longitude: data.long
      },
      type: data.type
    };
    return this._http.post('http://localhost:5000/restaurant', newRestaurant)
    .pipe(
      tap(() => this.triggerRestaurantAdded())
    );
  }

  triggerRestaurantAdded() {
    this.restaurantAddedSource.next();
  }

  getRestaurants(): Observable<any> {
    return this._http.get('http://localhost:5000/restaurant');
  }

  deleteRestaurant(id: string): Observable<any> {
    return this._http.delete(`http://localhost:5000/restaurant/${id}`);
  }

  getRestaurantDetails(id: string): Observable<any> {
    return this._http.get(`http://localhost:5000/restaurant/${id}`);
  }
}
