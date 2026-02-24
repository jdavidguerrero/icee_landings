// Figma MCP asset URLs — expire 7 days from generation. Replace with /images/demo/* for production.
export const FIGMA_ASSETS = {
  // Catalog screen
  tacos:       'https://www.figma.com/api/mcp/asset/7f483ca2-c9bd-4e96-8f70-05344e909aaf',
  burrito:     'https://www.figma.com/api/mcp/asset/4bb4bdb3-0401-40d1-84cc-1a27ecbb0c99',
  tresLeches:  'https://www.figma.com/api/mcp/asset/ce62bcda-0c84-4b4d-94a9-1e89eeffda8d',
  horchata:    'https://www.figma.com/api/mcp/asset/1a019097-de88-4763-ac95-691395ecde7e',
  jamaica:     'https://www.figma.com/api/mcp/asset/e69f8c32-076d-4396-9fb0-7a2d8b8e1f11',
  birria:      'https://www.figma.com/api/mcp/asset/84f9d43b-96e9-420e-ab51-67093348eeb7',
  flautas:     'https://www.figma.com/api/mcp/asset/10370d79-1b70-490d-a6fe-b5b8cabacf6b',
  quesadillas: 'https://www.figma.com/api/mcp/asset/a93b2583-ce66-4b06-a513-9982fa2ab378',
  // Modifiers screen product image (Torta de Asada)
  tortaAsada:  'https://www.figma.com/api/mcp/asset/49df8633-cbc7-499c-abd5-2cb968259b6b',
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
  { id: 1, name: 'Tacos',       price: 2.25, image: FIGMA_ASSETS.tacos,       category: 'Todo',      emoji: '🌮', description: 'Tacos al pastor con cilantro y cebolla' },
  { id: 2, name: 'Burrito',     price: 8.00, image: FIGMA_ASSETS.burrito,     category: 'Todo',      emoji: '🌯', description: 'Burrito de asada con frijoles y arroz' },
  { id: 3, name: 'Tres Leches', price: 4.50, image: FIGMA_ASSETS.tresLeches,  category: 'Pan Dulce', emoji: '🍰', description: 'Pastel húmedo con crema y leche' },
  { id: 4, name: 'Horchata',    price: 3.00, image: FIGMA_ASSETS.horchata,    category: 'Bebidas',   emoji: '🥤', description: 'Horchata fresca con canela' },
  { id: 5, name: 'Jamaica',     price: 2.50, image: FIGMA_ASSETS.jamaica,     category: 'Bebidas',   emoji: '🌺', description: 'Agua fresca de jamaica natural' },
  { id: 6, name: 'Birria',      price: 9.50, image: FIGMA_ASSETS.birria,      category: 'Todo',      emoji: '🥘', description: 'Birria de res con consomé' },
  { id: 7, name: 'Flautas',     price: 3.50, image: FIGMA_ASSETS.flautas,     category: 'Todo',      emoji: '🫔', description: 'Flautas crujientes de pollo' },
  { id: 8, name: 'Quesadillas', price: 4.00, image: FIGMA_ASSETS.quesadillas, category: 'Todo',      emoji: '🧀', description: 'Quesadilla de queso derretido' },
]

export const DEMO_MODIFIERS: Modifier[] = [
  { id: 1, name: 'Extra Queso',      price: 1.50 },
  { id: 2, name: 'Aguacate',         price: 2.00 },
  { id: 3, name: 'Sin Cebolla',      price: 0,    label: '$0.00' },
  { id: 4, name: 'Salsa Verde Extra', price: 0.50 },
]

export const CATEGORIES: Category[] = ['Todo', 'Pan Dulce', 'Bebidas', 'Tamales']

export const TAX_RATE = 0.08
