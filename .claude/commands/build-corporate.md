Build the corporate landing page for Icee Electronics by adapting the Cruip Tidy template.

Read the CLAUDE.md and the nextjs-landing skill for full content specs and design tokens.

## Step 1: Extend Tailwind Config

In `apps/corporate/tailwind.config.ts`, add Icee custom colors:
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

### 2.1 Hero Section
Find the hero component in the Tidy template. Replace content:
- Headline: "Soluciones Innovadoras en Tecnología de Pagos y Electrónica"
- Subtitle: "+10 años de experiencia · Certificación PCI-DSS · Presencia en Colombia, Ecuador y USA"
- CTA buttons: "Conoce nuestras soluciones" (scroll to #lineas) + "Contactar" (https://wa.me/573104527042)
- Below hero: row of 3 subsidiary logos from public/images/logos/ (Colombia, Ecuador, USA)
- Apply dark theme colors

### 2.2 Business Lines (Feature Grid)
Find the features/grid component. Adapt to 4 cards:
1. Comercialización de partes y piezas — Venta al por mayor y al detal de repuestos y dispositivos electrónicos.
2. Mantenimiento y reparación especializada — Reparación correctiva y preventiva. +120,000 procesos.
3. Desarrollo de Software — Desarrollo personalizado de software integrado y plataformas POS.
4. Soluciones de Transformación Robótica (STR-IA) — Renting y venta de soluciones robóticas con IA.
Use appropriate icons (from Heroicons or whatever icon set the template uses).

### 2.3 Stats Section
Find counter/stats component or create simple one. Numbers: +10 años | +6 PCI-DSS | +10 aliados | +120K procesos.

### 2.4 Featured Product — Icee POS
Create a highlighted card/banner linking to pos.iceeelectronics.com. Brief description of the POS platform.

### 2.5 Partners Logo Cloud
Display 10 partner logos from public/images/partners/ in a scrolling or grid layout.
Logos: newland, sinova, keenon, spectra, urovo, topwise, ciontek, sunmi, nexgo, verifone.

### 2.6 Quote/Testimonial
"Contamos con una sólida experiencia en el mercado, respaldada por años de trayectoria, conocimiento técnico y compromiso con la excelencia en cada proyecto."

### 2.7 Footer
Company info, quick links, WhatsApp CTA, social links. Subsidiaries: Colombia, Ecuador, USA.

## Step 3: SEO Metadata

Add to `apps/corporate/app/layout.tsx`:
- Title: "Icee Electronics | Soluciones en Tecnología de Pagos y Electrónica"
- Description: "Empresa líder en comercialización, mantenimiento y desarrollo de soluciones tecnológicas de pago. +10 años de experiencia. PCI-DSS certificado. Colombia, Ecuador, USA."
- OG image, twitter card

## Step 4: Verify

- Run `npx tsc --noEmit` — no errors
- Check responsive at 375px, 768px, 1280px
- Run @seo-auditor on apps/corporate/

## Step 5: Commit
`git add apps/corporate/ && git commit -m "feat(corporate): adapt Tidy template with Icee content"`
