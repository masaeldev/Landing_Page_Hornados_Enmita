import { Component, AfterViewInit } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar';
import { HeroComponent } from './components/hero/hero';
import { StripComponent } from './components/strip/strip';
import { MenuComponent } from './components/menu/menu';
import { AboutComponent } from './components/about/about';
import { LocationsComponent } from './components/locations/locations';
import { TestimonialsComponent } from './components/testimonials/testimonials';
import { ContactComponent } from './components/contact/contact';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    StripComponent,
    MenuComponent,
    AboutComponent,
    LocationsComponent,
    TestimonialsComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    // Scroll reveal observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }
}
