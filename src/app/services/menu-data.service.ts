import { Injectable } from '@angular/core';
import { MenuItem, Location, Testimonial } from '../models/menu-item.model';

@Injectable({ providedIn: 'root' })
export class MenuDataService {
  getMenuItems(): MenuItem[] {
    return [
      { id: 'hornado-grande', image: 'images/menu/Hornados4.jpg', name: 'Plato de Hornado Grande', description: 'Porción generosa de cerdo horneado acompañado de mote, papas y agrio de chicha. El clásico de siempre.', price: '$3.00', priceSub: 'por plato', emoji: '🍽️', tag: '⭐ Estrella', imgClass: 'menu-card-img--hornado', tab: 'hornado' },
      { id: 'hornado-pequeno', image: 'images/menu/Hornados3.jpg', name: 'Plato de Hornado Pequeño', description: 'Porción individual con acompañamientos. Ideal para el que madruga y quiere arrancar el fin de semana con energía.', price: '$2.50', priceSub: 'por plato', emoji: '⚖️', tag: '🔥 Popular', imgClass: 'menu-card-img--libra', tab: 'hornado' },
      { id: 'cuero', image: 'images/menu/cuero.jpg', name: 'Cuero Crujiente', description: 'Porciones de cuero de chancho horneado, crujiente por fuera y suave por dentro. ¡Se agota temprano!', price: 'Preg.', priceSub: 'precio por porción', emoji: '🥩', tag: 'Especial', imgClass: 'menu-card-img--cuero', tab: 'hornado' },
      { id: 'Patas', image: 'images/menu/Pata.jpg', name: 'Patas', description: 'Son patas de chancho con cuero super rico hay de $3.00 y $4.00 un sabor delicioso', price: 'Preg.', priceSub: 'precio por porción', emoji: '🥩', tag: 'Especial', imgClass: 'menu-card-img--cuero', tab: 'hornado' },
      { id: 'salchipapas', image: 'images/menu/salchipapas.jpg', name: 'Salchipapas', description: 'Papas fritas crujientes con salchichas, salsas y ají. El antojo perfecto para el camino a Chachimbiro.', price: '🌿', priceSub: 'Solo El Milagro', emoji: '🍟', tag: 'Favorito', imgClass: 'menu-card-img--salchi', tab: 'domingo' },
      { id: 'papitas-hornado', image: 'images/menu/papitas-hornado.jpg', name: 'Papitas Fritas con Hornado', description: 'Papas fritas acompañadas de trozos de hornado selecto. Combinación perfecta para disfrutar al aire libre.', price: '🌿', priceSub: 'Solo El Milagro', emoji: '🥔', tag: 'Con Hornado', imgClass: 'menu-card-img--papas', tab: 'domingo' },
      { id: 'papitas-menudencia', image: 'images/menu/papitas-menudencia.jpg', name: 'Papitas con Menudencia', description: 'Papas fritas acompañadas de menudencia sazonada al estilo de Enmita. Un clásico que no puede faltar los domingos.', price: '🌿', priceSub: 'Solo El Milagro', emoji: '🍲', tag: 'Especial Dom.', imgClass: 'menu-card-img--menud', tab: 'domingo' }
    ];
  }

  getOrderOptions(): { value: string; label: string }[] {
    return [
      { value: 'Plato Grande de Hornado ($3.00)', label: 'Plato Grande de Hornado – $3.00' },
      { value: 'Plato Pequeño de Hornado ($2.50)', label: 'Plato Pequeño de Hornado – $2.50' },
      { value: 'Hornado por Libras', label: 'Hornado por Libras (cualquier parte)' },
      { value: 'Porciones de Cuero Crujiente', label: 'Porciones de Cuero Crujiente' },
      { value: 'Salchipapas (El Milagro)', label: 'Salchipapas – El Milagro' },
      { value: 'Papitas con Hornado (El Milagro)', label: 'Papitas con Hornado – El Milagro' },
      { value: 'Papitas con Menudencia (El Milagro)', label: 'Papitas con Menudencia – El Milagro' },
      { value: 'Pedido especial / Evento', label: 'Pedido especial / Evento familiar' }
    ];
  }

  getLocations(): Location[] {
    return [
      { id: 'mercado', image: 'images/puestos/mercado.jpg', name: 'Mercado Santo Domingo', subtitle: 'Ibarra, Imbabura, Ecuador', badge: '📅 Sábados & Domingos', days: 'Sáb y Dom', schedule: '06:00 – 13:00', parking: 'Cerca del mercado', ambiente: 'Mercado tradicional', products: ['🐷 Hornado', '⚖️ Por Libras', '🥩 Cuero', '🍽️ Platos'], mapsUrl: 'https://maps.google.com/?q=Mercado+Santo+Domingo+Ibarra+Ecuador', wazeUrl: 'https://waze.com/ul?q=Mercado+Santo+Domingo+Ibarra', cardClass: 'loc-card-header--mercado', puestoCode: 'F139' },
      { id: 'milagro', image: 'images/puestos/milagro.jpg', name: 'Sector El Milagro', subtitle: 'Vía a Urcuquí · Vía a Chachimbiro', badge: '🌄 Solo Domingos', days: 'Solo Domingos', schedule: 'Mañana', parking: 'Amplio, al aire libre', ambiente: 'Campo · Familiar', products: ['🐷 Hornado', '🍟 Salchipapas', '🥔 Papitas', '🍲 Menudencia'], mapsUrl: 'https://maps.google.com/?q=Sector+El+Milagro+Via+Urcuqui+Ibarra', wazeUrl: 'https://waze.com/ul?q=El+Milagro+Via+Urcuqui+Ibarra', cardClass: 'loc-card-header--milagro' }
    ];
  }

  getTestimonials(): Testimonial[] {
    return [
      { stars: 5, text: '"El mejor hornado de Ibarra sin duda. Madrugamos para llegar al puesto F139 y siempre vale la pena."', author: 'Carlos A.', location: 'Ibarra', avatar: '👨', avatarBg: '#FDEBD0' },
      { stars: 5, text: '"Paramos en El Milagro en ruta a Chachimbiro. Las salchipapas y el hornado son increíbles al aire libre."', author: 'Andrea B.', location: 'Quito', avatar: '👩', avatarBg: '#D5F5E3' },
      { stars: 5, text: '"Pedimos 3 libras de hornado por WhatsApp para el cumpleaños de mi mamá. Llegó perfecto y a tiempo."', author: 'Familia Morales', location: 'Ibarra', avatar: '👨‍👩‍👧', avatarBg: '#D6EAF8' },
      { stars: 5, text: '"El cuero crujiente es lo mejor que he probado. Se acaba rapidísimo, hay que llegar temprano o reservar."', author: 'Lucía T.', location: 'Otavalo', avatar: '👩', avatarBg: '#FDEBD0' },
      { stars: 5, text: '"Venimos desde Tulcán solo para el hornado de Enmita. El sabor es auténtico, de abuelita de verdad."', author: 'Roberto V.', location: 'Tulcán', avatar: '🧑', avatarBg: '#D5F5E3' }
    ];
  }
}
