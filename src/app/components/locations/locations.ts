import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuDataService } from '../../services/menu-data.service';
import { Location } from '../../models/menu-item.model';

@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './locations.html',
  styleUrl: './locations.scss'
})
export class LocationsComponent implements OnInit {
  private dataService = inject(MenuDataService);
  locations: Location[] = [];

  ngOnInit(): void { this.locations = this.dataService.getLocations(); }

  onImgError(event: Event): void {
    (event.target as HTMLImageElement).style.display = 'none';
  }

  openMap(url: string): void { window.open(url, '_blank'); }
}
