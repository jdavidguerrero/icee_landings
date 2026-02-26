export const metadata = {
  title: 'Desarrollo de Software — Icee Electronics',
  description: 'Software integrado y plataformas POS para el sector financiero. Soluciones a medida para Colombia, Ecuador y USA.',
}

import Link from 'next/link'

const solutions = [
  {
    icon: '💳',
    title: 'Icee POS Platform',
    description: 'Sistema de punto de venta para negocios hispanos en EE.UU. y Latinoamérica. Cobra con tarjeta, efectivo o NFC, imprime recibos y gestiona tu inventario — todo en español.',
    badge: 'Producto propio',
    badgeColor: 'text-[#00B4D8] bg-[#00B4D8]/10 border-[#00B4D8]/30',
    cta: { label: 'Ver demo en vivo', href: 'https://pos.iceeelectronics.com', external: true },
  },
  {
    icon: '🔗',
    title: 'Integraciones POS ↔ ERP',
    description: 'Conectamos tu sistema de punto de venta con plataformas ERP (SAP, Siigo, Alegra), pasarelas de pago y sistemas de facturación electrónica según normativas locales.',
    badge: 'A medida',
    badgeColor: 'text-slate-400 bg-slate-800/60 border-slate-700',
    cta: null,
  },
  {
    icon: '🧾',
    title: 'Facturación Electrónica',
    description: 'Módulos certificados de facturación electrónica DIAN (Colombia) y SRI (Ecuador) integrados al flujo de ventas de tu empresa.',
    badge: 'Cumplimiento',
    badgeColor: 'text-slate-400 bg-slate-800/60 border-slate-700',
    cta: null,
  },
  {
    icon: '📊',
    title: 'Dashboards y Reportes',
    description: 'Paneles gerenciales en tiempo real para monitorear ventas, inventarios, dispositivos y KPIs clave del negocio. Exportación a Excel y API REST.',
    badge: 'Analítica',
    badgeColor: 'text-slate-400 bg-slate-800/60 border-slate-700',
    cta: null,
  },
  {
    icon: '🛒',
    title: 'E-commerce y Tiendas en Línea',
    description: 'Desarrollo de tiendas en línea conectadas a tu inventario físico. Integración con WooCommerce, Shopify y pasarelas locales.',
    badge: 'Digital',
    badgeColor: 'text-slate-400 bg-slate-800/60 border-slate-700',
    cta: null,
  },
  {
    icon: '🤖',
    title: 'Software para Kioscos y Autoservicio',
    description: 'Interfaces táctiles para kioscos de pago, consulta y autoservicio en bancos, centros comerciales y restaurantes. Compatible con hardware Nexgo, Sunmi y Spectra.',
    badge: 'Embebido',
    badgeColor: 'text-slate-400 bg-slate-800/60 border-slate-700',
    cta: null,
  },
]

const demos = [
  {
    title: 'Icee POS — Demo Interactivo',
    description: 'Prueba el flujo completo de venta en tu browser: agrega productos, personaliza la orden y completa el cobro.',
    status: 'Disponible ahora',
    statusColor: 'text-emerald-400',
    href: 'https://pos.iceeelectronics.com',
    external: true,
  },
  {
    title: 'Dashboard de Reportes',
    description: 'Panel gerencial con ventas en tiempo real, inventario y métricas clave para tu negocio.',
    status: 'Demo próximamente',
    statusColor: 'text-slate-500',
    href: null,
    external: false,
  },
  {
    title: 'Kiosco de Autoservicio',
    description: 'Interfaz táctil para consulta de saldos, recarga y pago de servicios en modo kiosco.',
    status: 'Demo próximamente',
    statusColor: 'text-slate-500',
    href: null,
    external: false,
  },
]

const stack = ['React / Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'REST API', 'Android (AOSP)', 'Linux Embebido', 'PCI-DSS compliant']

export default function SoftwarePage() {
  return (
    <div className="bg-[#060F1E] min-h-screen">

      {/* ── Hero ── */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-[#00B4D8]/5 blur-3xl pointer-events-none" />
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(0,180,216,0.06) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <Link href="/#lineas-negocio" className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-[#00B4D8] mb-6 transition-colors">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Volver al inicio
          </Link>
          <span className="inline-block text-xs font-semibold text-[#00B4D8] uppercase tracking-widest mb-4 bg-[#00B4D8]/10 border border-[#00B4D8]/30 rounded-full px-3 py-1">
            Tecnología propia
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight font-playfair-display">
            Desarrollo de Software
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed mb-8">
            Soluciones de software integrado y plataformas POS para el sector financiero y retail.
            Desarrollamos a medida para negocios en Colombia, Ecuador y Estados Unidos.
          </p>
          <a
            href="https://wa.me/573104527042?text=Hola%2C%20me%20interesa%20el%20desarrollo%20de%20software"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#00B4D8] hover:bg-[#0096B7] text-white font-semibold px-6 py-3 rounded-xl transition-colors shadow-lg shadow-[#00B4D8]/20"
          >
            Hablar con un desarrollador
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>

      {/* ── Solutions grid ── */}
      <section className="py-16 md:py-20 border-t border-slate-800/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 text-center font-playfair-display">
            Soluciones de Software
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-xl mx-auto">
            Desde plataformas POS hasta integraciones empresariales — construidas con tecnología moderna y cumplimiento PCI-DSS.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {solutions.map(({ icon, title, description, badge, badgeColor, cta }) => (
              <div
                key={title}
                className="bg-[#0A1628] border border-slate-800/70 rounded-2xl p-6 hover:border-[#00B4D8]/30 transition-colors duration-200 flex flex-col"
              >
                <div className="text-3xl mb-3">{icon}</div>
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="text-white font-semibold text-base leading-tight">{title}</h3>
                </div>
                <span className={`self-start text-[10px] font-bold uppercase tracking-widest border rounded-full px-2 py-0.5 mb-3 ${badgeColor}`}>
                  {badge}
                </span>
                <p className="text-slate-400 text-sm leading-relaxed flex-1">{description}</p>
                {cta && (
                  <a
                    href={cta.href}
                    target={cta.href.startsWith('http') ? '_blank' : undefined}
                    rel={cta.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#00B4D8] hover:text-[#48CAE4] transition-colors"
                  >
                    {cta.label}
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Demos section ── */}
      <section className="py-16 md:py-20 border-t border-slate-800/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 text-center font-playfair-display">
            Demos Interactivos
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-xl mx-auto">
            Prueba nuestras soluciones antes de implementarlas. Sin registro, sin instalación.
          </p>
          <div className="grid sm:grid-cols-3 gap-5">
            {demos.map(({ title, description, status, statusColor, href, external }) => (
              <div
                key={title}
                className="bg-[#0A1628] border border-slate-800/70 rounded-2xl p-6 flex flex-col"
              >
                <span className={`text-xs font-semibold mb-3 ${statusColor}`}>{status}</span>
                <h3 className="text-white font-semibold text-base mb-2">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed flex-1">{description}</p>
                {href ? (
                  <a
                    href={href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    className="mt-5 inline-flex items-center gap-2 bg-[#00B4D8] hover:bg-[#0096B7] text-white font-semibold text-sm px-4 py-2.5 rounded-xl transition-colors"
                  >
                    Probar demo
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                ) : (
                  <div className="mt-5 inline-flex items-center gap-2 bg-slate-800/60 text-slate-500 font-semibold text-sm px-4 py-2.5 rounded-xl cursor-not-allowed">
                    Próximamente
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech stack ── */}
      <section className="py-12 border-t border-slate-800/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-6">Stack tecnológico</p>
          <div className="flex flex-wrap justify-center gap-3">
            {stack.map((tech) => (
              <span
                key={tech}
                className="text-sm text-slate-400 bg-[#0A1628] border border-slate-800 rounded-lg px-4 py-2"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
