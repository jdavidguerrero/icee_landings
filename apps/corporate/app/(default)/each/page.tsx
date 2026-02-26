export const metadata = {
  title: 'EACH — Ecosistema Autónomo de Cápsulas Habitacionales | Icee Electronics',
  description: 'Solución modular de arquitectura sostenible para vivienda, hospitalidad e innovación. Comunidades autónomas y centros de innovación.',
}

import Link from 'next/link'

const pillars = [
  {
    icon: '🌿',
    title: 'Sostenibilidad',
    description: 'Construcción modular con materiales sostenibles, sistemas de energía renovable integrados y gestión eficiente del agua.',
  },
  {
    icon: '🔧',
    title: 'Modularidad',
    description: 'Cápsulas habitacionales intercambiables y escalables. Expande o reconfigura tu espacio según las necesidades del proyecto.',
  },
  {
    icon: '🤝',
    title: 'Comunidad',
    description: 'Diseñado para generar espacios de convivencia, colaboración y bienestar — desde comunidades residenciales hasta hubs de innovación.',
  },
  {
    icon: '⚡',
    title: 'Autonomía',
    description: 'Ecosistemas autosuficientes con generación de energía propia, conectividad inteligente y gestión centralizada.',
  },
]

const markets = [
  {
    icon: '🏠',
    title: 'Vivienda',
    description: 'Proyectos residenciales modulares para zonas rurales y urbanas. Alternativa accesible y rápida de implementar frente a la construcción tradicional.',
    features: ['Tiempo de instalación reducido', 'Costo por m² competitivo', 'Certificación sismo-resistente', 'Diseño arquitectónico personalizable'],
  },
  {
    icon: '🏨',
    title: 'Hospitalidad',
    description: 'Glamping, ecolodges, hoteles boutique y cabañas de alto diseño. Experiencias únicas en entornos naturales o urbanos.',
    features: ['Diseño premium de interiores', 'Integración con ecosistema natural', 'Rápida apertura al mercado', 'Alta demanda en turismo sostenible'],
  },
  {
    icon: '💡',
    title: 'Innovación',
    description: 'Centros de co-working, oficinas satélite, hubs tecnológicos y campus de innovación modulares para empresas y startups.',
    features: ['Conectividad de alta velocidad integrada', 'Espacios configurables', 'Sala de reuniones y áreas comunes', 'Certificación LEED compatible'],
  },
]

export default function EachPage() {
  return (
    <div className="bg-[#060F1E] min-h-screen">

      {/* ── Hero ── */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-[#00B4D8]/4 blur-3xl pointer-events-none" />
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
            EACH · Ecosistema Autónomo de Cápsulas Habitacionales
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight font-playfair-display">
            Vivir y trabajar diferente.<br className="hidden md:block" /> Arquitectura modular.
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed mb-8">
            EACH es una solución de arquitectura modular sostenible diseñada para crear comunidades autónomas,
            espacios de hospitalidad únicos y centros de innovación. Tecnología de construcción del futuro, hoy.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/573104527042?text=Hola%2C%20me%20interesa%20el%20proyecto%20EACH"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#00B4D8] hover:bg-[#0096B7] text-white font-semibold px-6 py-3 rounded-xl transition-colors shadow-lg shadow-[#00B4D8]/20"
            >
              Solicitar información
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="https://wa.me/573104527042?text=Quiero%20ver%20los%20planos%20y%20renders%20de%20EACH"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/8 hover:bg-white/14 text-slate-300 font-semibold px-6 py-3 rounded-xl transition-colors border border-slate-700"
            >
              Ver renders y planos
            </a>
          </div>
        </div>
      </section>

      {/* ── Pillars ── */}
      <section className="py-16 md:py-20 border-t border-slate-800/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 text-center font-playfair-display">
            Los 4 Pilares de EACH
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-xl mx-auto">
            Un ecosistema diseñado para ser autosuficiente, escalable y adaptable a cualquier entorno.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map(({ icon, title, description }) => (
              <div
                key={title}
                className="bg-[#0A1628] border border-slate-800/70 rounded-2xl p-6 text-center hover:border-[#00B4D8]/30 transition-colors duration-200"
              >
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="text-white font-semibold text-base mb-2">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Markets ── */}
      <section className="py-16 md:py-20 border-t border-slate-800/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 text-center font-playfair-display">
            Mercados
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-xl mx-auto">
            EACH se adapta a múltiples sectores con una misma plataforma modular.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {markets.map(({ icon, title, description, features }) => (
              <div
                key={title}
                className="bg-[#0A1628] border border-slate-800/70 rounded-2xl p-7 hover:border-[#00B4D8]/30 transition-colors duration-200"
              >
                <div className="text-3xl mb-4">{icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">{description}</p>
                <ul className="space-y-2">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
                      <svg className="w-4 h-4 text-[#00B4D8] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="bg-gradient-to-br from-[#00B4D8]/10 to-[#48CAE4]/5 border border-[#00B4D8]/25 rounded-3xl p-10">
            <h2 className="text-2xl font-bold text-white mb-3 font-playfair-display">
              ¿Tienes un proyecto en mente?
            </h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              Cuéntanos sobre tu terreno, ubicación y visión. Nuestro equipo te presentará
              una propuesta con renders, planos y presupuesto inicial sin costo.
            </p>
            <a
              href="https://wa.me/573104527042?text=Hola%2C%20tengo%20un%20proyecto%20EACH%20y%20quiero%20una%20propuesta"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#00B4D8] hover:bg-[#0096B7] text-white font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Iniciar mi proyecto →
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
