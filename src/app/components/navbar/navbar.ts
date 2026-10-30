import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class NavbarComponent {
  isScrolled = false;
  isMenuOpen = false;

  @HostListener('window:scroll')
  onScroll(): void { this.isScrolled = window.scrollY > 60; }

  toggleMenu(): void { this.isMenuOpen = !this.isMenuOpen; }
  closeMenu(): void { this.isMenuOpen = false; }
  scrollTo(id: string): void { this.closeMenu(); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); }
}
