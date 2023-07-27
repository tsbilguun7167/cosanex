import { Component } from '@angular/core';
import { Person } from '../models/person';
import { people } from '../mock-data/people.data';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {
  people: Person[] = people;
  person?: Person;

  constructor(private route:ActivatedRoute) {
    this.person = people.find((person: Person) => person.id == this.route.snapshot.params['person']);
  }
}
