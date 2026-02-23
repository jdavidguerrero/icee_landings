const sectors = [
  {
    emoji: '🏦',
    title: 'Sector Financiero',
    desc: 'Bancos, cooperativas, fintechs y entidades de crédito que confían en nuestra infraestructura de pagos.',
    stat: '+15',
    statLabel: 'instituciones',
  },
  {
    emoji: '🏪',
    title: 'Comercio & Retail',
    desc: 'Cadenas de tiendas, supermercados y comercios que necesitan terminales POS confiables y soporte especializado.',
    stat: '+80',
    statLabel: 'puntos de venta',
  },
  {
    emoji: '🚚',
    title: 'Logística & Distribución',
    desc: 'Empresas de distribución y logística que requieren dispositivos robustos para captura de datos en campo.',
    stat: '+30',
    statLabel: 'empresas',
  },
  {
    emoji: '🏥',
    title: 'Salud & Gobierno',
    desc: 'Clínicas, instituciones públicas y entidades de gobierno con requerimientos estrictos de seguridad de datos.',
    stat: '+20',
    statLabel: 'proyectos',
  },
]

export default function ClientsSection() {
  return (
    <section className="bg-[#0A1628] py-16 md:py-24 border-t border-slate-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-12 md:mb-16" data-aos="fade-up">
          <span className="inline-block text-xs font-semibold text-[#00B4D8] uppercase tracking-widest mb-3">
            Clientes
          </span>
          <h2 className="h2 font-playfair-display text-white mb-3">
            Sectores que nos eligen
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Empresas de diferentes industrias en Colombia, Ecuador y EE.UU. confían en Icee Electronics
            para su infraestructura de pagos y mantenimiento tecnológico.
          </p>
        </div>

        {/* Sector cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {sectors.map((sector, i) => (
            <div
              key={sector.title}
              className="group relative bg-[#060F1E] border border-slate-800/70 rounded-2xl p-6 hover:border-[#00B4D8]/40 transition-colors duration-200"
              data-aos="fade-up"
              data-aos-delay={String(i * 80)}
            >
              {/* Icon */}
              <div className="text-3xl mb-4 leading-none">{sector.emoji}</div>

              {/* Stat */}
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-2xl font-bold text-[#00B4D8]">{sector.stat}</span>
                <span className="text-xs text-slate-500">{sector.statLabel}</span>
              </div>

              {/* Title */}
              <h3 className="text-white font-semibold text-base mb-2">{sector.title}</h3>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed">{sector.desc}</p>

              {/* Hover line */}
              <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#00B4D8]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
            </div>
          ))}
        </div>

        {/* PCI reinforce strip */}
        <div
          className="mt-10 flex flex-wrap justify-center gap-3"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {[
            { label: 'PCI-DSS Level 1', icon: '🛡️' },
            { label: 'ISO 27001 alineados', icon: '✅' },
            { label: 'Cifrado TLS 256-bit', icon: '🔐' },
            { label: 'Tokenización de datos', icon: '🔒' },
            { label: 'Cumplimiento GDPR', icon: '📋' },
          ].map(({ label, icon }) => (
            <span
              key={label}
              className="inline-flex items-center gap-1.5 bg-[#00B4D8]/8 border border-[#00B4D8]/20 text-slate-300 text-xs font-medium rounded-full px-3 py-1.5"
            >
              <span aria-hidden="true">{icon}</span> {label}
            </span>
          ))}
        </div>

      </div>
    </section>
  )
}
