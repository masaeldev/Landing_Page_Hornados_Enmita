import { Injectable } from '@angular/core';
import { ReservationForm } from '../models/menu-item.model';

@Injectable({ providedIn: 'root' })
export class WhatsappService {
  private readonly phone = '593XXXXXXXXX';

  buildReservationMessage(form: ReservationForm): string {
    const fechaFmt = form.fecha
      ? new Date(form.fecha + 'T12:00:00').toLocaleDateString('es-EC', { weekday: 'long', day: 'numeric', month: 'long' })
      : 'por confirmar';
    return `Hola Hornados Enmita 🐷, quiero realizar una reserva:\n\n*Nombre:* ${form.nombre}\n*Celular:* ${form.celular}\n*Pedido:* ${form.pedido}\n*Fecha:* ${fechaFmt}\n*Lugar:* ${form.lugar || 'por confirmar'}${form.notas ? '\n*Notas:* ' + form.notas : ''}\n\n¡Muchas gracias! 🙏`;
  }

  openWhatsApp(message: string): void {
    window.open(`https://wa.me/${this.phone}?text=${encodeURIComponent(message)}`, '_blank');
  }

  openDirectWhatsApp(): void {
    this.openWhatsApp('Hola Hornados Enmita, quiero realizar una reserva para este fin de semana de...');
  }
}
