import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AboutComponent } from './components/about/about.component';
import { ServiceComponent } from './components/service/service.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { MarqueeComponent } from './components/marquee/marquee.component';
import { TeamComponent } from './components/team/team.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { ServicesComponent } from './services/services.component';
import { SliderComponent } from './components/slider/slider.component';
import { CommonModule } from '@angular/common';
import { AboutusComponent } from './aboutus/aboutus.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    WelcomeComponent,
    AboutComponent,
    ServiceComponent,
    ExperienceComponent,
    MarqueeComponent,
    TeamComponent,
    PortfolioComponent,
    TestimonialComponent,
    ServicesComponent,
    SliderComponent,
    AboutusComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
