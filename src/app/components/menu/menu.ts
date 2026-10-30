import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuDataService } from '../../services/menu-data.service';
import { MenuItem } from '../../models/menu-item.model';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.html',
  styleUrl: './menu.scss'
})
export class MenuComponent implements OnInit {
  private dataService = inject(MenuDataService);

  activeTab: 'hornado' | 'domingo' = 'hornado';
  hornadoItems: MenuItem[] = [];
  domingoItems: MenuItem[] = [];

  ngOnInit(): void {
    const all = this.dataService.getMenuItems();
    this.hornadoItems = all.filter(i => i.tab === 'hornado');
    this.domingoItems = all.filter(i => i.tab === 'domingo');
  }

  switchTab(tab: 'hornado' | 'domingo'): void { this.activeTab = tab; }

  reservar(item: MenuItem): void {
    sessionStorage.setItem('selectedOrder', item.name);
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  }

  onImgError(event: Event): void {
    (event.target as HTMLImageElement).style.display = 'none';
  }

  reservarLibras(): void {
    sessionStorage.setItem('selectedOrder', 'Hornado por Libras');
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  }
}
