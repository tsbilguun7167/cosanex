import { Component } from '@angular/core';
import { services } from 'src/app/mock-data/services.data';
import { Service } from 'src/app/models/service.type';
import { register } from 'swiper/element/bundle';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],
})
export class ServiceComponent {

  sliders: Service[] = [];

  constructor() {
    register();
    this.sliders = services;
  }
}
