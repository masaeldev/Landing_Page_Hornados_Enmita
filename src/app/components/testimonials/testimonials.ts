import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuDataService } from '../../services/menu-data.service';
import { Testimonial } from '../../models/menu-item.model';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss'
})
export class TestimonialsComponent implements OnInit {
  private dataService = inject(MenuDataService);
  testimonials: Testimonial[] = [];
  doubled: Testimonial[] = [];

  ngOnInit(): void {
    this.testimonials = this.dataService.getTestimonials();
    this.doubled = [...this.testimonials, ...this.testimonials]; // duplicate for infinite loop
  }

  getStars(n: number): string { return '★'.repeat(n); }
}
