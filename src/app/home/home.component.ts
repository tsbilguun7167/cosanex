import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private meta: Meta,private title: Title) {
    this.meta.addTags([
      {name: 'description', content: 'Cosanex - Legal Services'},
      {name: 'author', content: 'Blueprint Solutions LLC'},
      {name: 'keywords', content: 'cosanex, legal, legal-services, law, law-firm'}
    ]);
    this.setTitle('Home');
  }
  public setTitle( newTitle: string) {
    this.title.setTitle( newTitle );
    }
}
