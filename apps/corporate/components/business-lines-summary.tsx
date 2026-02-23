import Link from 'next/link'

const lines = [
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 6h12v9H4zM6 6V4a4 4 0 018 0v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 11h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Comercialización',
    desc: 'Partes y piezas electrónicas',
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 7.5a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5c.5 0 1 .07 1.45.2L10 5l1 2 2-1 1.57-1.57c.28.31.43.7.43 1.07z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.1 12.18l-3.79 3.95a1 1 0 001.41 1.41l3.8-3.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Mantenimiento',
    desc: '+120K procesos PCI-DSS',
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="4" width="16" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 9.5l-2 2 2 2M13 9.5l2 2-2 2M11 7l-2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Software',
    desc: 'Plataformas POS a medida',
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="8" width="14" height="11" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <rect x="7" y="4" width="6" height="5" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 3v1M7 12h2M11 12h2M7 15h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'STR-IA',
    desc: 'Soluciones robóticas con IA',
  },
]

export default function BusinessLinesSummary() {
  return (
    <section className="bg-[#060F1E] py-14 md:py-20 border-t border-slate-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-8 md:mb-10" data-aos="fade-up">
          <span className="inline-block text-xs font-semibold text-[#00B4D8] uppercase tracking-widest mb-3">
            Lo que hacemos
          </span>
          <h2 className="h2 font-playfair-display text-white mb-3">
            Nuestras Líneas de Negocio
          </h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto">
            Más de 10 años con soluciones integrales para el sector financiero y empresarial.
          </p>
        </div>

        {/* Pills grid */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
          data-aos="fade-up"
          data-aos-delay="80"
        >
          {lines.map((line) => (
            <Link
              key={line.title}
              href="/empresa"
              className="group flex flex-col items-center text-center gap-3 bg-[#0A1628] border border-slate-800/70 rounded-2xl px-4 py-5 hover:border-[#00B4D8]/50 hover:bg-[#0A1628]/80 transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-xl bg-[#00B4D8]/10 border border-[#00B4D8]/20 flex items-center justify-center text-[#00B4D8] group-hover:bg-[#00B4D8]/15 transition-colors">
                {line.icon}
              </div>
              <div>
                <div className="text-white font-semibold text-sm leading-tight mb-0.5">{line.title}</div>
                <div className="text-slate-500 text-xs leading-tight">{line.desc}</div>
              </div>
              {/* Arrow */}
              <div className="mt-auto text-[#00B4D8]/50 group-hover:text-[#00B4D8] transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA to /empresa */}
        <div className="text-center mt-8" data-aos="fade-up" data-aos-delay="160">
          <Link
            href="/empresa"
            className="inline-flex items-center gap-2 text-[#00B4D8] hover:text-[#48CAE4] font-medium text-sm transition-colors duration-150"
          >
            Ver todas las líneas de negocio
            <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  )
}
