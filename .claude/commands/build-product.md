Build the Icee POS product landing page by adapting the Cruip Fintech template.

Read the CLAUDE.md and the nextjs-landing skill for full content specs and design tokens.

## Step 1: Extend Tailwind Config

In `apps/product/tailwind.config.ts`, add Icee custom colors (same as corporate):
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

## Step 2: Adapt sections in order

Use @landing-dev for each section. Work through these one at a time:

### 2.1 Hero
Find the Fintech hero. Replace:
- Headline: "Tu negocio, tu idioma, tu control"
- Subtitle: "La plataforma POS diseñada para negocios hispanos en Estados Unidos. Cobra con tarjeta, imprime recibos, y controla tu negocio — todo en español."
- CTA1: "Solicitar demo" → scroll to #contact
- CTA2: "Ver cómo funciona" → scroll to #how-it-works
- Visual: Image of terminal from public/images/terminales.png (or placeholder)

### 2.2 Pain Points (3 cards)
Find the features or problem section:
1. "¿Perdiendo ventas por no aceptar tarjeta?" — El 65-75% de los vendedores ambulantes son cash-only y pierden entre $75-$200 diarios.
2. "¿Cansado de apps en inglés?" — Square, Toast, Clover — ninguno habla tu idioma.
3. "¿Hardware caro que no entiendes?" — iPad + lector + impresora = $800+. Con Icee POS, todo-en-uno desde $150.

### 2.3 Solution Overview
Terminal todo-en-uno with key features:
- Pantalla táctil, lector NFC/chip, impresora térmica
- Software 100% en español
- Contactless, chip, y efectivo
- Recibos impresos al instante
- Funciona sin WiFi (modo offline)
- Batería 12+ horas

### 2.4 Verticals (Tabs or Cards)
🌮 Food Trucks — catálogo visual, propinas, especiales del día
🛒 Mercados y Swap Meets — modo offline, precios ajustables, multi-localidad
🏪 Bodegas y Tiendas — BADGE "Próximamente" — inventario, código de barras

### 2.5 Comparison Table
| Feature | Square | Toast | Clover | Icee POS |
|---------|--------|-------|--------|----------|
| Español nativo | ❌ Parcial | ❌ | ❌ | ✅ Completo |
| Printer integrado | ❌ | ✅ | ✅ | ✅ |
| Costo hardware | $800+ | $799+ | $599+ | ✅ $150-$250 |
| Modo offline | ❌ | Parcial | ❌ | ✅ Completo |
| Fee mensual | 2.6%+$0.10 | $69+/mo | $14-90/mo | ✅ $29-49/mo |
| Soporte español | Limitado | ❌ | ❌ | ✅ 24/7 |

Highlight the Icee POS column with accent color.

### 2.6 How It Works (3 steps)
1. "Elige tu plan" → Te enviamos tu terminal configurado y listo
2. "Agrega tus productos" → Fotos, precios, categorías. 15 minutos.
3. "Empieza a cobrar" → Tap, chip, o efectivo. Recibo impreso al instante.

### 2.7 Pricing
Find the pricing component in Fintech template. Two cards:

**Plan Básico — $29/mes**
- Terminal T1 portátil
- Catálogo hasta 50 productos
- Reportes básicos
- Tap to Pay (contactless)
- Ideal para: paleteros, eloteros, street vendors

**Plan Pro — $49/mes** (highlighted/recommended)
- Terminal T1 o T3
- Catálogo ilimitado
- Reportes avanzados + exportación
- Especiales del día, propinas configurables
- Modo offline completo
- Ideal para: food trucks, taquerías, panaderías

Footer note: "Financiamiento disponible: $0 inicial + $15-25/mes por hardware"

### 2.8 FAQ
Find accordion/FAQ component. 6 questions — see nextjs-landing skill for full Q&A content.

### 2.9 CTA + Contact Form
- Headline: "¿Listo para cobrar con tarjeta?"
- Simple form: Nombre, Nombre del negocio, Teléfono, Tipo de negocio (select: Food Truck, Taquería, Swap Meet, Bodega, Otro)
- Submit button: "Solicitar demo"
- WhatsApp button alongside: "O escríbenos por WhatsApp"
- API route: `app/api/demo-request/route.ts` — logs to console for now, returns success JSON

### 2.10 Footer
Same structure as corporate. Links to iceeelectronics.com for corporate info.

## Step 3: SEO Metadata

Add to `apps/product/app/layout.tsx`:
- Title: "Icee POS | Sistema de Punto de Venta para Negocios Hispanos en USA"
- Description: "Terminal POS todo-en-uno en español. Cobra con tarjeta, imprime recibos, funciona sin internet. Desde $29/mes. Para food trucks, taquerías, swap meets y más."
- OG image, twitter card

## Step 4: Verify

- `npx tsc --noEmit` — no errors
- Responsive at 375px, 768px, 1280px
- Form submission works (check console)
- @seo-auditor audit

## Step 5: Commit
`git add apps/product/ && git commit -m "feat(product): adapt Fintech template with Icee POS content"`
