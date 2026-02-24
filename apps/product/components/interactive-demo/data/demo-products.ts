// Local product images — stored in public/images/demo/
const DEMO_IMG = {
  tacos:       '/images/demo/tacos.png',
  burrito:     '/images/demo/burrito.png',
  tresLeches:  '/images/demo/tres-leches.png',
  horchata:    '/images/demo/horchata.png',
  jamaica:     '/images/demo/jamaica.png',
  birria:      '/images/demo/birria.png',
  flautas:     '/images/demo/flautas.png',
  quesadillas: '/images/demo/quesadillas.png',
  tortaAsada:  '/images/demo/torta-asada.png',
}

export type Category = 'Todo' | 'Pan Dulce' | 'Bebidas' | 'Tamales'

export interface Product {
  id: number
  name: string
  price: number
  image: string
  category: Category
  emoji: string
  description: string
}

export interface Modifier {
  id: number
  name: string
  price: number
  label?: string
}

export interface CartItem {
  product: Product
  quantity: number
  selectedModifiers: number[]
  modifierTotal: number
}

export const DEMO_PRODUCTS: Product[] = [
  { id: 1, name: 'Tacos',       price: 2.25, image: DEMO_IMG.tacos,       category: 'Todo',      emoji: '🌮', description: 'Tacos al pastor con cilantro y cebolla' },
  { id: 2, name: 'Burrito',     price: 8.00, image: DEMO_IMG.burrito,     category: 'Todo',      emoji: '🌯', description: 'Burrito de asada con frijoles y arroz' },
  { id: 3, name: 'Tres Leches', price: 4.50, image: DEMO_IMG.tresLeches,  category: 'Pan Dulce', emoji: '🍰', description: 'Pastel húmedo con crema y leche' },
  { id: 4, name: 'Horchata',    price: 3.00, image: DEMO_IMG.horchata,    category: 'Bebidas',   emoji: '🥤', description: 'Horchata fresca con canela' },
  { id: 5, name: 'Jamaica',     price: 2.50, image: DEMO_IMG.jamaica,     category: 'Bebidas',   emoji: '🌺', description: 'Agua fresca de jamaica natural' },
  { id: 6, name: 'Birria',      price: 9.50, image: DEMO_IMG.birria,      category: 'Todo',      emoji: '🥘', description: 'Birria de res con consomé' },
  { id: 7, name: 'Flautas',     price: 3.50, image: DEMO_IMG.flautas,     category: 'Todo',      emoji: '🫔', description: 'Flautas crujientes de pollo' },
  { id: 8, name: 'Quesadillas', price: 4.00, image: DEMO_IMG.quesadillas, category: 'Todo',      emoji: '🧀', description: 'Quesadilla de queso derretido' },
]

export const DEMO_MODIFIERS: Modifier[] = [
  { id: 1, name: 'Extra Queso',      price: 1.50 },
  { id: 2, name: 'Aguacate',         price: 2.00 },
  { id: 3, name: 'Sin Cebolla',      price: 0,    label: '$0.00' },
  { id: 4, name: 'Salsa Verde Extra', price: 0.50 },
]

export const CATEGORIES: Category[] = ['Todo', 'Pan Dulce', 'Bebidas', 'Tamales']

export const TAX_RATE = 0.08
