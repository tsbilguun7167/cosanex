import { Component } from '@angular/core';
import { services } from '../mock-data/services.data';
import { Service } from '../models/service.type';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services: Service[] = [];
  chosenService?: Service;

  constructor(private route:ActivatedRoute, private router:Router) {
    this.services = services;
    this.chosenService = services.find((service: Service) => service.id == this.route.snapshot.params['service']);
  }

  serviceClick(service_id: string) {
    this.router.navigate(['/services', service_id])
  }
}
