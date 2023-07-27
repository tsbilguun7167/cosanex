import { Component } from '@angular/core';
import { people } from 'src/app/mock-data/people.data';
import { Person } from 'src/app/models/person';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {
  people: Person[] = people
}
