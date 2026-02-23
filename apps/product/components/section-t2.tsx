export default function SectionT2() {
  const steps = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="15" stroke="#00B4D8" strokeWidth="1.5" />
          <path d="M10 16h12M16 10v12" stroke="#00B4D8" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      step: '1',
      title: 'Cobra hoy',
      desc: 'El cliente paga con tarjeta, NFC o chip. El terminal confirma el cobro al instante.',
      highlight: 'Hoy',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="8" width="24" height="16" rx="3" stroke="#00B4D8" strokeWidth="1.5" />
          <path d="M4 13h24" stroke="#00B4D8" strokeWidth="1.5" />
          <path d="M9 19h4M20 19h3" stroke="#48CAE4" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
      step: '2',
      title: 'Procesamos',
      desc: 'El pago se procesa y el depósito a tu cuenta queda iniciado.',
      highlight: 'T + 1',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="13" stroke="#00B4D8" strokeWidth="1.5" />
          <path d="M16 10v6l4 2" stroke="#48CAE4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      step: '3',
      title: 'Recibes en 48h',
      desc: 'El dinero llega a tu cuenta bancaria en EE.UU. en 48 horas hábiles.',
      highlight: '48 horas',
    },
  ]

  return (
    <section className="bg-[#060F1E] py-16 md:py-24 border-t border-slate-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-12 md:mb-16" data-aos="fade-up">
          <span className="inline-block text-xs font-semibold text-[#00B4D8] uppercase tracking-widest mb-3">
            Depósito rápido
          </span>
          <h2 className="h2 text-white mb-3">
            Cobra hoy, recibe en 48 horas
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Sin esperar semanas. Tu dinero en tu cuenta bancaria, rápido y seguro.
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid md:grid-cols-3 gap-8 md:gap-6" data-aos="fade-up" data-aos-delay="80">
          {/* Connector line (desktop only) */}
          <div className="hidden md:block absolute top-12 left-1/3 right-1/3 h-px bg-gradient-to-r from-[#00B4D8]/40 via-[#00B4D8]/60 to-[#00B4D8]/40" aria-hidden="true" />

          {steps.map((s, i) => (
            <div
              key={s.step}
              className="relative flex flex-col items-center text-center bg-[#0A1628] border border-slate-800/70 rounded-2xl px-6 py-8"
              data-aos="fade-up"
              data-aos-delay={String(i * 100)}
            >
              {/* Step badge */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center justify-center w-6 h-6 rounded-full bg-[#00B4D8] text-[#060F1E] text-xs font-bold">
                {s.step}
              </div>
              {/* Icon */}
              <div className="mb-4 mt-2">{s.icon}</div>
              {/* Highlight time */}
              <div className="text-[#00B4D8] font-bold text-sm uppercase tracking-widest mb-2">
                {s.highlight}
              </div>
              {/* Title */}
              <h3 className="text-white font-semibold text-lg mb-2">{s.title}</h3>
              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Inline FAQ */}
        <div className="mt-10 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center bg-[#0A1628]/60 border border-slate-800/60 rounded-xl px-5 py-4">
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-lg" aria-hidden="true">🏦</span>
              <span className="text-sm font-semibold text-white">¿Qué banco necesito?</span>
            </div>
            <p className="text-sm text-slate-400">
              Cualquier banco en Estados Unidos. Depósito directo a tu cuenta de cheques o ahorros.
            </p>
          </div>
          <div className="mt-3 flex flex-col sm:flex-row gap-4 items-start sm:items-center bg-[#0A1628]/60 border border-slate-800/60 rounded-xl px-5 py-4">
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-lg" aria-hidden="true">📅</span>
              <span className="text-sm font-semibold text-white">¿Hay contrato?</span>
            </div>
            <p className="text-sm text-slate-400">
              No. Cancela en cualquier momento, sin penalidades ni letra chica.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
