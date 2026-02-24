Objetivo
Construir un componente React interactivo que simula el flujo de venta del Icee POS dentro de un mockup visual de terminal Topwise T6. Este componente se embebe en la sección "Prueba el POS" de la landing de producto (apps/product/).
Contexto del Proyecto

Monorepo: Turborepo con apps/product/ (Next.js 14+, TypeScript, Tailwind CSS, Framer Motion)
Design System: Dark theme #0A1628 primary, #00B4D8 accent, Inter body, Plus Jakarta Sans headings
Figma Source: https://www.figma.com/design/GR1D7HMtwM7Q7pxKHANQdI/ICEE-POS?node-id=0-1

Figma File Map — Pantallas a Implementar
El archivo Figma GR1D7HMtwM7Q7pxKHANQdI contiene 17 pantallas del MVP. Para el demo interactivo, implementar 5 pantallas del flujo core de venta:
#PantallaFigma Node IDDimensionesDescripción1Catálogo con Búsqueda1:2390×884Grid 3-col de productos con fotos, categorías scrollables (Todo, Pan Dulce, Bebidas, Tamales), barra búsqueda, nav inferior con Ventas/Reportes/Productos/Config, barra rápida de precios ($2/$3/$5/$10/Otro)2Modificadores de Producto1:250390×884Bottom sheet overlay sobre catálogo blurred. Header con imagen+nombre+precio del producto. Sección "Extras" con toggles (Queso Extra +$1.50, Jalapeños +$0.75, Aguacate incluido, Salsa Habanera +$1.00). Quantity stepper. Botón "Agregar" con precio total3Carrito de Compras1:334390×884Header "Tu Orden" con X para cerrar. Lista de items con thumbnail, nombre, modificadores como subtitle gris, precio, quantity stepper (−/+), botón "Editar". Footer sticky: Subtotal, Impuesto (8%), TOTAL grande. CTAs: "Cobrar con Tarjeta $XX.XX" (primary cyan) y "Cobrar en Efectivo" (outline)4Pago Contactless NFC1:152390×884Fondo navy gradient. Monto arriba "$17.70 / Total a Pagar". Centro: icono NFC con 3 anillos pulsantes animados (cyan). Instrucción bilingüe "Acerque su tarjeta arriba / Tap card on top". Botón "Cancelar / Cancel". Timer line en bottom5Confirmación de Venta1:1116390×884Icono check verde grande con animación. "¡Venta Completada!". Card con recibo: ORDEN #4092, items con cantidades, Subtotal/Impuestos/Propina/Total. Método "Contactless •••• 4532". CTAs: "Imprimir Recibo" (primary), "Nueva Venta" (outline cyan), "Anular esta venta" (link rojo)
Productos del Demo (datos hardcoded)
typescriptconst DEMO_PRODUCTS = [
  { id: 1, name: "Tacos", price: 2.25, image: "tacos.jpg", category: "Todo" },
  { id: 2, name: "Burrito", price: 8.00, image: "burrito.jpg", category: "Todo" },
  { id: 3, name: "Tres Leches", price: 4.50, image: "tres-leches.jpg", category: "Pan Dulce" },
  { id: 4, name: "Horchata", price: 3.00, image: "horchata.jpg", category: "Bebidas" },
  { id: 5, name: "Jamaica", price: 2.50, image: "jamaica.jpg", category: "Bebidas" },
  { id: 6, name: "Birria", price: 9.50, image: "birria.jpg", category: "Todo" },
  { id: 7, name: "Flautas", price: 3.50, image: "flautas.jpg", category: "Todo" },
  { id: 8, name: "Quesadillas", price: 4.00, image: "quesadillas.jpg", category: "Todo" },
];

const DEMO_MODIFIERS = [
  { id: 1, name: "Queso Extra", price: 1.50 },
  { id: 2, name: "Jalapeños", price: 0.75 },
  { id: 3, name: "Aguacate", price: 0, label: "Incluido" },
  { id: 4, name: "Salsa Habanera", price: 1.00 },
];
Instrucciones de Implementación
Paso 1 — Extraer design context del Figma
Usa Figma MCP para obtener el código de diseño de cada pantalla. Ejecuta get_design_context para los 5 node IDs listados arriba. Esto te dará colores exactos, tipografías, espaciados y assets. Descarga los assets de imagen (producto thumbnails) como placeholders.
IMPORTANTE: Si Figma MCP no está disponible o falla, usa los screenshots como referencia visual y recrea las pantallas fielmente con Tailwind CSS basándote en las descripciones detalladas de arriba.
Paso 2 — Crear estructura de componentes
apps/product/src/components/interactive-demo/
├── InteractivePosDemo.tsx      ← Componente principal con state machine
├── DeviceFrame.tsx             ← Mockup visual del Topwise T1
├── screens/
│   ├── CatalogScreen.tsx       ← Grid de productos + categorías
│   ├── ModifiersSheet.tsx      ← Bottom sheet de modificadores
│   ├── CartScreen.tsx          ← Carrito con items y totales
│   ├── PaymentNfcScreen.tsx    ← Animación NFC
│   └── ConfirmationScreen.tsx  ← Venta completada
├── data/
│   └── demo-products.ts        ← Datos hardcoded
└── hooks/
    └── useDemoState.ts         ← State machine del flujo
Paso 3 — State Machine del Demo
typescripttype DemoScreen = 'catalog' | 'modifiers' | 'cart' | 'payment' | 'confirmation';

interface DemoState {
  currentScreen: DemoScreen;
  cart: CartItem[];
  selectedProduct: Product | null;
  selectedModifiers: number[];
  quantity: number;
  subtotal: number;
  tax: number;
  total: number;
}

// Flujo:
// catalog → (tap producto) → modifiers → (agregar) → catalog (con badge carrito actualizado)
// catalog → (tap carrito) → cart → (cobrar con tarjeta) → payment → (auto 3s) → confirmation
// confirmation → (nueva venta) → catalog (carrito vacío)
Paso 4 — Device Frame (Topwise T1 Mockup)
Crear un frame visual que simule la carcasa del terminal POS:

Rectángulo redondeado con bordes gruesos oscuros (#1a1a2e)
Esquinas redondeadas 24px
Pantalla interna de exactamente 390×844px (viewport del contenido)
Sutil reflejo/gradiente en el borde para dar profundidad 3D
Pequeño indicador LED verde arriba (simula cámara/sensor NFC)
Base más ancha abajo (simula la impresora del terminal)
Shadow largo para efecto de flotación
NO usar imagen real del Topwise — crear el frame con CSS puro

┌──────────────────────┐
│  ● ─────────── ●     │  ← borde superior con LED
│ ┌──────────────────┐ │
│ │                  │ │
│ │   [SCREEN]       │ │  ← 390×844 viewport
│ │   390 × 844      │ │
│ │                  │ │
│ └──────────────────┘ │
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  │  ← zona impresora (decorativa)
└──────────────────────┘
      ████████████        ← base/stand
Paso 5 — Pantallas de UI (Tailwind + Framer Motion)
Principios de diseño para TODAS las pantallas:

Fondo de pantallas: #FFFFFF (blanco) para las pantallas del POS (NO dark theme — el POS tiene UI clara)
Header navy: #0A1628
Accent/CTAs: #00B4D8 (cyan Icee)
Tipografía: Inter para body (14-16px), Plus Jakarta Sans para headings
Bordes redondeados: 12px para cards, 8px para botones
Sombras suaves para elevación de cards
Transiciones entre pantallas: slide horizontal con Framer Motion (como app nativa)
Touch feedback: scale(0.97) on press para botones y cards

CatalogScreen:

Header navy con "Icee Food" centrado, badge carrito con contador, hamburger menu (decorativo)
SearchBar con ícono lupa y placeholder "Buscar productos..."
Chips de categoría scrollables horizontalmente: Todo (selected/cyan), Pan Dulce, Bebidas, Tamales, Postres, Combos
Grid 3 columnas de ProductCard: imagen cuadrada con rounded corners, nombre debajo, precio en cyan bold
Al tocar un producto → transición a ModifiersSheet
Bottom nav con 4 tabs: Ventas (activo), Reportes, Productos, Config
Barra rápida de precios arriba del nav: $2, $3, $5, $10, Otro

ModifiersSheet:

Overlay semi-transparente sobre catálogo (backdrop-blur)
Bottom sheet con drag handle
Header: imagen del producto (80×80 rounded), nombre bold, precio, descripción corta
Sección "Extras" con badge "Opcional": lista de modifier rows con checkbox/toggle visual
Cada modifier: nombre, precio (+$X.XX o "Incluido"), checkbox circle
Selected state: fondo cyan suave, check icon
Quantity stepper: botón −, número, botón + (el + con sombra/énfasis)
Botón footer "Agregar $XX.XX": full width, cyan, precio dinámico

CartScreen:

Header "Tu Orden" con botón X para cerrar
Lista scrollable de CartItem rows: thumbnail 48×48, nombre bold, modifiers en gris italic, precio, quantity stepper inline, "Editar" link
Link "Agregar más productos" con ícono +
Footer sticky con fondo blanco + sombra top:

Subtotal — $XX.XX
Impuesto (8%) — $X.XX
Línea divisora
TOTAL — $XX.XX (grande, bold)
"Cobrar con Tarjeta $XX.XX" — botón primary cyan full width
"Cobrar en Efectivo" — botón outline con ícono billetes



PaymentNfcScreen:

Fondo: gradiente navy (#0A1628 → #0D2137)
Flecha arriba animada (bounce sutil)
Monto grande "$XX.XX" en blanco bold + "Total a Pagar" subtitle
Centro: ícono NFC (wifi rotado) dentro de círculo cyan
3 anillos concéntricos pulsando outward (keyframe animation, cyan con opacity decreciente)
Texto bilingüe: "Acerque su tarjeta arriba" (bold) + "Tap card on top" (regular, más pequeño)
Botón "✕ Cancelar / Cancel" outline blanco
Timer bar en bottom (progress bar cyan que se llena en 3 segundos)
Auto-advance: después de 3 segundos, transición automática a ConfirmationScreen

ConfirmationScreen:

Fondo blanco con confetti sutil (opcional)
Ícono check grande (círculo verde #10B981, check blanco) con animación scale+bounce al entrar
"¡Venta Completada!" heading
Card de recibo con borde y sombra:

ORDEN #4092 — 12:42 PM
Items listados con cantidad badge (círculo con número) y precio
Línea divisora
Subtotal, Impuestos (10%), Propina, Total
Badge "Contactless •••• 4532" con ícono NFC


Botón "Imprimir Recibo 🖨️" — primary cyan
Botón "Nueva Venta ⊕" — outline cyan → al tocar, reset todo y volver a catalog
Link "Anular esta venta" — texto rojo pequeño

Paso 6 — Imágenes de Productos
Para las imágenes de productos, usa estos placeholders con gradientes y emojis como fallback. Si es posible, descarga las imágenes del Figma usando get_design_context con los node IDs de las imágenes dentro del CatalogScreen (node 1:2). Si no, genera placeholders con:
tsx// Placeholder con gradiente y emoji
const ProductPlaceholder = ({ emoji, color }: { emoji: string; color: string }) => (
  <div className={`w-full aspect-square rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-4xl`}>
    {emoji}
  </div>
);
// Usar: 🌮 tacos, 🌯 burrito, 🍰 tres leches, 🥤 horchata, 🌺 jamaica, 🥘 birria, 🫔 flautas, 🧀 quesadillas
Paso 7 — Integrar en la Landing de Producto
El componente InteractivePosDemo se coloca en una nueva sección de la landing, DESPUÉS del hero y ANTES de la comparación con competidores. La sección debe tener:
tsx<section id="demo" className="relative py-20 overflow-hidden">
  {/* Background sutil con patrón */}
  <div className="max-w-6xl mx-auto px-4">
    {/* Texto izquierda + Device derecha en desktop */}
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <span className="text-[#00B4D8] font-semibold text-sm uppercase tracking-wider">
          Demo Interactivo
        </span>
        <h2 className="text-3xl lg:text-4xl font-bold text-white mt-2">
          Prueba el POS ahora mismo
        </h2>
        <p className="text-gray-400 mt-4 text-lg">
          Toca los productos, arma una orden y completa un cobro.
          Así de fácil es vender con Icee POS.
        </p>
        <div className="mt-8 space-y-4">
          {/* Feature bullets con iconos */}
          <FeatureBullet icon="⚡" text="Agrega productos en 1 toque" />
          <FeatureBullet icon="💳" text="Cobra con tarjeta o efectivo" />
          <FeatureBullet icon="🧾" text="Recibo automático al instante" />
        </div>
      </div>
      <div className="flex justify-center">
        <InteractivePosDemo />
      </div>
    </div>
  </div>
</section>
Paso 8 — Animaciones y Polish

Transiciones entre pantallas: AnimatePresence de Framer Motion, slide horizontal (enter from right, exit to left)
NFC rings: CSS keyframes con @keyframes pulse-ring que escala y desvanece
Check icon: Spring animation de Framer Motion al montar
Product cards: Hover/tap con scale(0.97) y sombra más pronunciada
Bottom sheet: Slide up con spring damping
Cart badge: Scale bounce cuando cambia el número
Auto-guided hint: Si el usuario no interactúa en 5s, mostrar un cursor animado que señala un producto (tooltip "Toca un producto para empezar")

Paso 9 — Responsive

Desktop: Device frame centrado con texto a la izquierda (grid 2 cols)
Tablet: Device frame centrado, texto arriba
Mobile: Device frame a 85% de ancho, sin texto lateral (solo el demo full width). Ocultar el frame decorativo y mostrar solo la pantalla con borde sutil

Criterios de Aceptación

✅ El usuario puede tocar un producto del catálogo
✅ Se abre el sheet de modificadores con opciones seleccionables
✅ Al agregar, vuelve al catálogo con badge del carrito actualizado
✅ Puede agregar múltiples productos
✅ Al tocar el carrito, ve los items con totales correctos
✅ Al tocar "Cobrar con Tarjeta", ve la animación NFC
✅ Después de 3 segundos, se muestra la confirmación automáticamente
✅ "Nueva Venta" resetea todo el flujo
✅ Las transiciones son fluidas y se sienten como app nativa
✅ Funciona en mobile, tablet y desktop
✅ No hay dependencias externas más allá de lo ya instalado (Next.js, Tailwind, Framer Motion)

Comando de Ejecución
bash# Después de implementar, verificar que compile:
cd apps/product && npm run build
# Y probar en dev:
cd apps/product && npm run dev
NOTAS IMPORTANTES

El contenido de la UI del POS es en español (es una app para negocios hispanos)
Los CTAs bilingües solo aplican en la pantalla de NFC ("Acerque su tarjeta / Tap card on top")
El demo NO necesita backend — todo es client-side con estado local
Las imágenes del Figma son de comida mexicana real (tacos, burritos, etc.) — si puedes descargarlas del Figma, mejor. Si no, usa los emoji placeholders
El frame del device debe verse premium — es la primera impresión del visitante
Priorizar que FUNCIONE y se sienta fluido sobre pixel-perfection