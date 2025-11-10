export interface Product {
  id: string;
  slug: string;
  nombre: string;
  precio: number;
  descripcion: string;
  imagen: string;
  imagenes?: string[]; // Array de imágenes para galería
  categoria: string;
  badge?: string; // "Nuevo", "Más vendido", "Oferta"
  stock?: number;
  paquete?: string; // "Paquete de 50 unidades", etc.
}

export type Category =
  | 'all'
  | 'arandelas'
  | 'arandelas-tipo-cono'
  | 'arandela-inyector'
  | 'arandela-conica-punta-inyector'
  | 'arandela-doble-retorno'
  | 'arandela-aluminio'
  | 'mini-kits'
  | 'oring'
  | 'aditivos'
  | 'bombas'
  | 'turbos';

export type PriceRange = 'all' | '0-50' | '50-100' | '100-500';
