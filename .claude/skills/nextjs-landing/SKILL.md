---
name: nextjs-landing
description: Patterns and references for adapting Cruip Next.js templates into production landing pages. Use when building or modifying sections in apps/corporate or apps/product. Contains design tokens, content specs, and adaptation patterns.
---

# Next.js Landing Page — Cruip Template Adaptation

## Design Tokens

```typescript
// packages/ui/src/tokens.ts
export const iceeColors = {
  primary: '#0A1628',
  primaryLight: '#1E293B',
  accent: '#00B4D8',
  accentLight: '#48CAE4',
  accentDark: '#0096B7',
  white: '#FFFFFF',
  gray: {
    50: '#F8FAFC', 100: '#F1F5F9', 200: '#E2E8F0', 300: '#CBD5E1',
    400: '#94A3B8', 500: '#64748B', 600: '#475569', 700: '#334155',
    800: '#1E293B', 900: '#0F172A',
  },
} as const;
```

## Tailwind Mapping

When adapting Cruip templates, replace their color classes with:

| Cruip default | Replace with |
|---------------|-------------|
| `bg-gray-900` / `bg-slate-900` | `bg-[#0A1628]` |
| `bg-gray-800` | `bg-[#1E293B]` |
| `text-blue-500` / `text-indigo-500` | `text-[#00B4D8]` |
| `hover:text-blue-400` | `hover:text-[#48CAE4]` |
| `bg-blue-500` (buttons) | `bg-[#00B4D8] hover:bg-[#0096B7]` |
| `text-gray-400` | `text-slate-400` |

Or better: extend `tailwind.config.ts` with custom colors once:
```typescript
colors: {
  icee: {
    primary: '#0A1628',
    'primary-light': '#1E293B',
    accent: '#00B4D8',
    'accent-light': '#48CAE4',
    'accent-dark': '#0096B7',
  }
}
```
Then use `bg-icee-primary`, `text-icee-accent`, etc.

## Asset References

Partners logos: `packages/assets/partners/{newland,sinova,keenon,spectra,urovo,topwise,ciontek,sunmi,nexgo,verifone}.png`

Icee logos: `packages/assets/logos/{icee-white,icee-colombia,icee-ecuador,icee-usa}.png`

Images: `packages/assets/images/{hero-bg.jpg,lineas-negocio.png,terminales.png}`

To use in a Next.js app, either:
1. Symlink or copy to `apps/{app}/public/images/`
2. Or import directly if the bundler supports it

## Content: Corporate Landing

### Hero
```
Headline: "Soluciones Innovadoras en Tecnología de Pagos y Electrónica"
Subtitle: "+10 años de experiencia · Certificación PCI-DSS · Presencia en Colombia, Ecuador y USA"
CTA1: "Conoce nuestras soluciones" → scroll to #lineas
CTA2: "Contactar" → https://wa.me/573104527042
Below hero: 3 subsidiary logos (Colombia, Ecuador, USA)
```

### Líneas de Negocio
```
Card 1: "Comercialización de partes y piezas"
  → Venta al por mayor y al detal de repuestos y dispositivos electrónicos.
Card 2: "Mantenimiento y reparación especializada"
  → Reparación correctiva y preventiva en dispositivos electrónicos. +120,000 procesos.
Card 3: "Desarrollo de Software"
  → Desarrollo personalizado de software integrado y plataformas POS.
Card 4: "Soluciones de Transformación Robótica (STR-IA)"
  → Renting y venta de soluciones de transformación robótica con inteligencia artificial.
```

### Stats
```
+10 → Años de experiencia en el mercado
+6  → Años de recertificación PCI-DSS
+10 → Aliados estratégicos alrededor del mundo
+120K → Procesos de mantenimiento realizados
```

## Content: Product Landing (Icee POS)

### Hero
```
Headline: "Tu negocio, tu idioma, tu control"
Subtitle: "La plataforma POS diseñada para negocios hispanos en Estados Unidos. Cobra con tarjeta, imprime recibos, y controla tu negocio — todo en español."
CTA1: "Solicitar demo" → #contact-form
CTA2: "Ver cómo funciona" → scroll to #how-it-works
```

### Pain Points
```
Card 1: "¿Perdiendo ventas por no aceptar tarjeta?"
  → El 65-75% de los vendedores ambulantes son cash-only y pierden entre $75-$200 diarios en ventas.
Card 2: "¿Cansado de apps en inglés?"
  → Square, Toast, Clover — ninguno habla tu idioma. Menús, reportes, soporte: todo en inglés.
Card 3: "¿Hardware caro que no entiendes?"
  → iPad + lector + impresora = $800+. Con Icee POS, todo-en-uno desde $150.
```

### Comparativa
```
| Feature           | Square    | Toast     | Clover    | Icee POS     |
|-------------------|-----------|-----------|-----------|--------------|
| Español nativo    | Parcial   | No        | No        | ✅ Completo  |
| Printer integrado | No        | Sí        | Sí        | ✅ Sí        |
| Costo hardware    | $800+     | $799+     | $599+     | ✅ $150-$250 |
| Modo offline      | No        | Parcial   | No        | ✅ Completo  |
| Fee mensual       | 2.6%+$0.10| $69+/mo  | $14-90/mo | ✅ $29-49/mo |
| Soporte español   | Limitado  | No        | No        | ✅ 24/7      |
```

### Pricing
```
Plan Básico — $29/mes
  - Terminal T1 portátil
  - Catálogo hasta 50 productos
  - Reportes básicos
  - Tap to Pay (contactless)
  - Ideal para: paleteros, eloteros, street vendors

Plan Pro — $49/mes
  - Terminal T1 o T3
  - Catálogo ilimitado
  - Reportes avanzados + exportación
  - Especiales del día, propinas configurables
  - Modo offline completo
  - Ideal para: food trucks, taquerías, panaderías

Nota: Financiamiento disponible: $0 inicial + $15-25/mes por hardware
```

### FAQ
```
Q: ¿Necesito internet para cobrar?
A: No. El modo offline guarda las transacciones y las sincroniza cuando vuelve la conexión.

Q: ¿Cuánto dura la batería?
A: 12+ horas de uso continuo. Carga completa en 3 horas.

Q: ¿Puedo aceptar EBT/Food Stamps?
A: Estamos trabajando en la certificación. Disponible próximamente.

Q: ¿Cómo recibo mi dinero?
A: Depósito directo a tu cuenta bancaria en el siguiente día hábil (T+1).

Q: ¿Hay contrato?
A: No. Cancela cuando quieras, sin penalidad.

Q: ¿Qué tipo de negocios pueden usar Icee POS?
A: Food trucks, taquerías, pupuserías, panaderías, swap meets, bodegas, eloteros, paleteros, y más.
```
