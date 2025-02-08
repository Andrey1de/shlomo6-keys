import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarDeliveryComponent } from "./tables/car-delivery/car-delivery.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, CarDeliveryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'shlomo6-keys';
  constructor(){

  }
  
}
