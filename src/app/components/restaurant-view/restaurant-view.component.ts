import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../../services/restaurant.service';
import * as L from 'leaflet';

@Component({
  selector: 'app-restaurant-view',
  templateUrl: './restaurant-view.component.html',
  styleUrls: ['./restaurant-view.component.css']
})
export class RestaurantViewComponent implements OnInit {
  restaurantId!: string;
  restaurantDetails: any;
  map!: L.Map; // Use definite assignment assertion here
  markers: L.Marker[] = [];

  constructor(
    private route: ActivatedRoute,
    private restaurantService: RestaurantService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.restaurantId = params['id'];
      this.initializeMap();
      this.fetchRestaurantDetails();
    });
  }

  initializeMap(): void {
    this.map = L.map('map').setView([1.5, 3.4], 2);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);
  }

  inactiveLocation = L.icon({
    iconUrl: 'assets/location_red.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34]
  });

  activeLocation = L.icon({
    iconUrl: 'assets/location_black.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34]
  });


  fetchRestaurantDetails(): void {
    this.restaurantService.getRestaurantDetails(this.restaurantId).subscribe({
      next: (details) => {
        console.log(details);
        this.restaurantDetails = details;
  
        const selectedRestaurant = this.restaurantDetails.find((restaurant: any) => restaurant.selected);
  
        if (selectedRestaurant) {
          this.map.setView(
            [parseFloat(selectedRestaurant.coordinates.latitude), parseFloat(selectedRestaurant.coordinates.longitude)],
            12
          );
        }
        this.markers = [];
  
        this.restaurantDetails.forEach((restaurant: any) => {
          const marker = L.marker([parseFloat(restaurant.coordinates.latitude), parseFloat(restaurant.coordinates.longitude)], {icon: restaurant.selected? this.activeLocation:this.inactiveLocation})
            .addTo(this.map)
            .bindPopup(`<b>${restaurant.name}</b><br>${restaurant.type}`);
          this.markers.push(marker);
        });
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
