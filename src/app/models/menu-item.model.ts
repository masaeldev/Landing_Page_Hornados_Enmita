export interface MenuItem {
  id: string;
  image?: string;
  name: string;
  description: string;
  price: string;
  priceSub: string;
  emoji: string;
  tag: string;
  imgClass: string;
  tab: 'hornado' | 'domingo';
}

export interface Location {
  id: string;
  image?: string;
  name: string;
  subtitle: string;
  badge: string;
  days: string;
  schedule: string;
  parking: string;
  ambiente: string;
  products: string[];
  mapsUrl: string;
  wazeUrl: string;
  cardClass: string;
  puestoCode?: string;
}

export interface Testimonial {
  stars: number;
  text: string;
  author: string;
  location: string;
  avatar: string;
  avatarBg: string;
}

export interface ReservationForm {
  nombre: string;
  celular: string;
  pedido: string;
  fecha: string;
  lugar: string;
  notas: string;
}
