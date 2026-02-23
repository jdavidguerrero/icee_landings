# Icee Landings — Monorepo Web

## Project Overview
Two landing pages for Icee Electronics in a standalone Turborepo monorepo:
- `apps/corporate/` → Corporate landing (iceeelectronics.com) — Base: Cruip **Tidy** template
- `apps/product/` → Product landing for Icee POS (pos.iceeelectronics.com) — Base: Cruip **Fintech** template

## Company Context
**Icee Electronics S.A.S** — Technology company (Colombia, Ecuador, USA).
- Business lines: Electronic parts commercialization, specialized maintenance & repair, software development, robotic transformation solutions (STR-IA)
- Flagship product: **Icee POS Platform** — POS for Hispanic micro-businesses in the US (food trucks, taquerías, swap meets, bodegas)
- +10 years in market, +6 years PCI-DSS certified
- Partners: Newland, Sinova, Keenon, Spectra, Urovo, Topwise, Ciontek, Sunmi, Nexgo, Verifone

---

## Tech Stack
- **Framework:** Next.js 14+ (App Router) — comes from Cruip templates
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS — use existing Cruip tailwind.config, extend with Icee tokens
- **Animations:** Framer Motion (already in Cruip templates)
- **Monorepo:** Turborepo
- **Package manager:** npm (workspaces)

## Monorepo Structure
```
icee-landings/
├── CLAUDE.md
├── package.json              ← Turborepo root with workspaces
├── turbo.json
├── extract-assets.sh         ← Script to download assets from old Wix site
├── packages/
│   ├── tsconfig/             ← Shared TypeScript configs
│   │   ├── base.json
│   │   └── nextjs.json
│   ├── ui/                   ← Shared components & design tokens
│   │   └── src/
│   │       ├── tokens.ts     ← Icee brand colors & fonts
│   │       └── index.ts
│   └── assets/               ← All brand assets
│       ├── logos/            ← Icee logos (white, colombia, ecuador, usa)
│       ├── partners/         ← 10 partner logos
│       ├── images/           ← Hero backgrounds, product images
│       ├── product/          ← Topwise T1/T3 terminal photos
│       └── videos/           ← Promo videos
├── apps/
│   ├── corporate/            ← Cruip Tidy template (port 3000)
│   └── product/              ← Cruip Fintech template (port 3001)
```

---

## Critical Rules

### Working with Cruip Templates
- **ADAPT, don't rewrite.** The templates have high-quality components. Change content, colors, and images — don't rebuild from scratch.
- **Respect template structure.** Keep the existing `app/`, `components/`, `css/` folder structure from Cruip.
- **Extend tailwind.config**, don't replace it. Add Icee colors/fonts alongside existing Cruip config.
- Each template has its own `tailwind.config.ts`, `next.config.js`, and styling approach — respect them independently.

### Language
- **Content:** Spanish is the primary language. All visible text in Spanish.
- **Code:** Variables, components, types, comments, and commits in ENGLISH.
- **Copy tone for Icee POS:** Direct, warm, no technical jargon. Speak to a food truck owner, not a developer.

### Design
- **Dark theme** by default on both landings (consistent with Icee branding).
- **Primary color:** #0A1628 (deep navy) — backgrounds
- **Accent color:** #00B4D8 (cyan) — CTAs, links, highlights
- **Accent light:** #48CAE4 — hover states
- **Typography:** Keep whatever fonts the Cruip templates use, they're already good.
- **Mobile-first** — test at 375px minimum width.

### Assets
- Brand assets live in `packages/assets/`. Copy needed assets to each app's `public/` folder or reference via relative paths.
- Always use `next/image` for optimization.
- Partner logos: consistent height (40-60px), `object-contain`.

### Forms & CTAs
- Contact/demo forms → Next.js API route (for now just log to console, integration comes later)
- WhatsApp CTA: `https://wa.me/573104527042`
- All forms: client-side validation with meaningful Spanish error messages

### DO NOT
- Don't add heavy dependencies without justification
- Don't use `any` in TypeScript
- Don't modify template component logic unless necessary for content changes
- Don't create new components if the template already has an equivalent
- Don't ignore build errors or warnings

---

## Content Specifications

### Corporate Landing (apps/corporate) — Cruip Tidy

**Hero:**
- Headline: "Soluciones Innovadoras en Tecnología de Pagos y Electrónica"
- Subtitle: "+10 años de experiencia · Certificación PCI-DSS · Presencia en Colombia, Ecuador y USA"
- CTA primary: "Conoce nuestras soluciones" (smooth scroll)
- CTA secondary: "Contactar" (wa.me/573104527042)
- Below hero: 3 subsidiary logos (Colombia, Ecuador, USA)

**Business Lines (4 cards):**
1. Comercialización de partes y piezas — Venta al por mayor y detal de repuestos y dispositivos electrónicos
2. Mantenimiento y reparación especializada — Reparación correctiva y preventiva. +120,000 procesos históricos
3. Desarrollo de Software — Software integrado y plataformas POS para el sector financiero
4. Soluciones de Transformación Robótica (STR-IA) — Renting y venta de soluciones robóticas con IA

**Stats:** +10 años experiencia | +6 PCI-DSS | +10 aliados globales | +120K procesos

**Featured Product:** Icee POS card/banner → CTA to pos.iceeelectronics.com

**Partners:** 10 logos (Newland, Sinova, Keenon, Spectra, Urovo, Topwise, Ciontek, Sunmi, Nexgo, Verifone)

**Quote:** "Contamos con una sólida experiencia en el mercado, respaldada por años de trayectoria, conocimiento técnico y compromiso con la excelencia en cada proyecto."

**Footer:** Company + subsidiaries + social + WhatsApp + © 2026

---

### Product Landing (apps/product) — Cruip Fintech

**Hero:**
- Headline: "Tu negocio, tu idioma, tu control"
- Subtitle: "La plataforma POS diseñada para negocios hispanos en Estados Unidos. Cobra con tarjeta, imprime recibos, y controla tu negocio — todo en español."
- CTA primary: "Solicitar demo" → scroll to contact form
- CTA secondary: "Ver cómo funciona" → scroll to solution section

**Pain Points (3 cards):**
1. "¿Perdiendo ventas por no aceptar tarjeta?" — 65-75% de street vendors son cash-only
2. "¿Cansado de apps en inglés?" — Square, Toast y Clover no hablan tu idioma
3. "¿Hardware caro que no entiendes?" — iPad + reader + printer = $800+. Icee POS desde $150

**Solution:** Terminal todo-en-uno (pantalla, NFC/chip, impresora, batería 12h+), software español, offline mode

**Verticals (tabs/cards):**
- 🌮 Food Trucks & Taquerías: catálogo visual, propinas, especiales del día
- 🛒 Mercados y Swap Meets: modo offline, precios ajustables, multi-localidad
- 🏪 Bodegas y Tiendas (Próximamente): inventario, código de barras, control stock

**Comparison Table:** vs Square, Toast, Clover — español, printer, costo, offline, fee, soporte

**How It Works (3 steps):**
1. Elige tu plan → terminal configurado y listo
2. Agrega tus productos → 15 minutos
3. Empieza a cobrar → tap, chip, o efectivo

**Pricing:**
- Básico $29/mes: T1, 50 productos, reportes básicos, Tap to Pay
- Pro $49/mes: T1 o T3, ilimitado, reportes avanzados, especiales, propinas, offline
- Financiamiento: $0 inicial + $15-25/mes hardware

**FAQ (6):**
1. ¿Necesito internet? → No, modo offline
2. ¿Duración batería? → 12+ horas
3. ¿EBT/Food Stamps? → Próximamente
4. ¿Cómo recibo dinero? → Depósito T+1
5. ¿Hay contrato? → No, cancela sin penalidad
6. ¿Qué negocios? → Food trucks, taquerías, swap meets, panaderías, bodegas, etc.

**Social Proof:** "86.9% de transacciones en US son cashless" / "12-18% más gasto con tarjeta"

**Final CTA:** Formulario (nombre, negocio, teléfono, tipo) + WhatsApp

**Footer:** Icee branding + links + "Producto de Icee Electronics S.A.S" + © 2026

---

## Development Commands
```bash
npm run dev:corporate    # localhost:3000
npm run dev:product      # localhost:3001
npm run build            # Build both
npm run lint             # Lint both
```

## Deploy
- Vercel with 2 projects from same repo
- Corporate: root = `apps/corporate`, domain = iceeelectronics.com
- Product: root = `apps/product`, domain = pos.iceeelectronics.com