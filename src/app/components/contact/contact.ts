import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WhatsappService } from '../../services/whatsapp.service';
import { MenuDataService } from '../../services/menu-data.service';
import { ReservationForm } from '../../models/menu-item.model';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class ContactComponent implements OnInit {
  private wa = inject(WhatsappService);
  private dataService = inject(MenuDataService);

  orderOptions: { value: string; label: string }[] = [];
  today = new Date().toISOString().split('T')[0];

  form: ReservationForm = { nombre: '', celular: '', pedido: '', fecha: '', lugar: '', notas: '' };

  ngOnInit(): void {
    this.orderOptions = this.dataService.getOrderOptions();
    // Pre-select from menu card click
    const selected = sessionStorage.getItem('selectedOrder');
    if (selected) {
      const match = this.orderOptions.find(o => o.label.includes(selected.split('(')[0].trim()));
      if (match) this.form.pedido = match.value;
      sessionStorage.removeItem('selectedOrder');
    }
  }

  sendReservation(): void {
    if (!this.form.nombre || !this.form.celular || !this.form.pedido) {
      alert('Por favor completa al menos tu nombre, celular y tipo de pedido.');
      return;
    }
    const msg = this.wa.buildReservationMessage(this.form);
    this.wa.openWhatsApp(msg);
  }

  openDirectWA(): void { this.wa.openDirectWhatsApp(); }
}
