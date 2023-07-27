import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PersonComponent } from './person/person.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'services/:service', component: ServicesComponent},
  { path: 'person/:person', component: PersonComponent},
  { path: 'aboutus', component: AboutusComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
