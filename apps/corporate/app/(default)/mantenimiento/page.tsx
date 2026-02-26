export const metadata = {
  title: 'Mantenimiento y Reparación — Icee Electronics',
  description: 'Centro de servicio especializado con más de 120.000 procesos históricos y certificación PCI-DSS nivel 1.',
}

import Link from 'next/link'

const services = [
  {
    icon: '🔧',
    title: 'Mantenimiento Correctivo',
    description: 'Diagnóstico y reparación de fallas en terminales POS, datáfonos, impresoras fiscales y dispositivos de captura.',
  },
  {
    icon: '🛡️',
    title: 'Mantenimiento Preventivo',
    description: 'Programas de mantenimiento periódico para garantizar la vida útil y el rendimiento óptimo del hardware financiero.',
  },
  {
    icon: '🔒',
    title: 'Certificación PCI-DSS',
    description: 'Todos los procesos se ejecutan bajo estándares PCI-DSS Nivel 1 — el estándar más alto de seguridad en pagos.',
  },
  {
    icon: '⚡',
    title: 'Soporte Express',
    description: 'Atención prioritaria para minimizar el tiempo fuera de servicio de tus dispositivos críticos.',
  },
  {
    icon: '📦',
    title: 'Logística de Dispositivos',
    description: 'Gestión completa de recolección, reparación y entrega en Colombia, Ecuador y USA.',
  },
  {
    icon: '📊',
    title: 'Reportes de Gestión',
    description: 'Trazabilidad completa de cada proceso: diagnóstico, intervención, pruebas y entrega documentada.',
  },
]

const stats = [
  { value: '+120K', label: 'procesos históricos' },
  { value: '+6',    label: 'años certificación PCI-DSS' },
  { value: '3',     label: 'países de operación' },
  { value: '+10',   label: 'años de experiencia' },
]

const brands = ['Newland', 'Nexgo', 'Sunmi', 'Verifone', 'Spectra', 'Urovo', 'Ciontek', 'Ingenico', 'Topwise']

export default function MantenimientoPage() {
  return (
    <div className="bg-[#060F1E] min-h-screen">

      {/* ── Hero ── */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        {/* Glow background */}
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
            +120K procesos históricos
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight font-playfair-display">
            Mantenimiento y Reparación<br className="hidden md:block" /> Especializada
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed mb-8">
            Centro de servicio técnico certificado PCI-DSS para hardware financiero. Reparación correctiva y preventiva
            con trazabilidad completa en Colombia, Ecuador y Estados Unidos.
          </p>
          <a
            href="https://wa.me/573104527042?text=Hola%2C%20necesito%20servicio%20de%20mantenimiento"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#00B4D8] hover:bg-[#0096B7] text-white font-semibold px-6 py-3 rounded-xl transition-colors shadow-lg shadow-[#00B4D8]/20"
          >
            Solicitar servicio por WhatsApp
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <section className="border-y border-slate-800/60 bg-[#0A1628]/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <div className="text-3xl font-bold font-playfair-display text-[#00B4D8] mb-1">{value}</div>
                <div className="text-xs text-slate-400">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services grid ── */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 text-center font-playfair-display">
            Nuestros Servicios
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-xl mx-auto">
            Cobertura integral para el ciclo de vida de tus dispositivos electrónicos y financieros.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map(({ icon, title, description }) => (
              <div
                key={title}
                className="bg-[#0A1628] border border-slate-800/70 rounded-2xl p-6 hover:border-[#00B4D8]/30 transition-colors duration-200"
              >
                <div className="text-3xl mb-4">{icon}</div>
                <h3 className="text-white font-semibold text-base mb-2">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Brands ── */}
      <section className="py-12 border-t border-slate-800/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-6">
            Marcas que reparamos
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {brands.map((brand) => (
              <span
                key={brand}
                className="text-sm text-slate-400 bg-[#0A1628] border border-slate-800 rounded-lg px-4 py-2"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── PCI callout ── */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="bg-gradient-to-br from-[#00B4D8]/10 to-[#48CAE4]/5 border border-[#00B4D8]/25 rounded-3xl p-10">
            <div className="text-4xl mb-4">🔒</div>
            <h2 className="text-2xl font-bold text-white mb-3 font-playfair-display">
              Certificados PCI-DSS Nivel 1
            </h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              Cada proceso de mantenimiento sigue los protocolos de seguridad más estrictos del sector financiero.
              Más de 6 años consecutivos con certificación vigente — el estándar exigido por Visa, Mastercard y los principales bancos.
            </p>
            <a
              href="https://wa.me/573104527042?text=Quiero%20saber%20más%20sobre%20la%20certificación%20PCI-DSS"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#00B4D8] hover:text-[#48CAE4] font-semibold text-sm transition-colors"
            >
              Hablar con un experto →
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
