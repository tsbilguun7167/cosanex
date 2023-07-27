import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from '../models/service.type';
import { services } from '../mock-data/services.data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  services: Service[] = services

  constructor(public router:Router) {
  }
}
