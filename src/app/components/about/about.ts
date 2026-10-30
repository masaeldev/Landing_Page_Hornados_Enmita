import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class AboutComponent {
  // Rutas de las fotos (se guardan en public/images/enmita/)
  enmitaPhoto = 'images/enmita/enmita.jpeg';
  puestoPhoto = 'images/enmita/puesto.jpeg';

  onImgError(event: Event): void {
    (event.target as HTMLImageElement).style.display = 'none';
  }

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
