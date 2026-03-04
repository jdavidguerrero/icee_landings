const trustPoints = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 10c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286z" />
      </svg>
    ),
    title: 'Certificación PCI-DSS',
    description: 'Más de 6 años con certificación PCI-DSS vigente — el estándar de seguridad de la industria de pagos.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: 'Cifrado punto a punto',
    description: 'Cada transacción viaja cifrada. Los datos de tarjeta nunca se almacenan en el dispositivo.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    ),
    title: 'EMV + NFC + Chip',
    description: 'Compatible con Visa, Mastercard, American Express y todas las redes de pago mayores en EE.UU.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: '+120,000 procesos',
    description: 'Más de 120,000 transacciones procesadas. Respaldo probado en Colombia, Ecuador y EE.UU.',
  },
]

export default function PciTrustSection() {
  return (
    <section className="relative py-12 md:py-16 bg-[#060F1E] overflow-hidden">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        aria-hidden="true"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(0,180,216,0.05) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-10" data-aos="fade-up">
          {/* PCI badge */}
          <div className="flex items-center gap-3 bg-[#00B4D8]/10 border border-[#00B4D8]/30 rounded-2xl px-5 py-3 shrink-0 self-start">
            <svg className="w-8 h-8 text-[#00B4D8] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 10c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286z" />
            </svg>
            <div>
              <p className="text-[#00B4D8] font-bold text-sm leading-none">PCI-DSS</p>
              <p className="text-[10px] text-[#48CAE4] uppercase tracking-widest font-semibold mt-0.5">Certificado</p>
            </div>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-white leading-snug">
              Tu dinero protegido con seguridad bancaria
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Icee Electronics lleva más de 6 años certificado PCI-DSS — el mismo estándar que usan los bancos.
            </p>
          </div>
        </div>

        {/* Trust points grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {trustPoints.map(({ icon, title, description }) => (
            <div
              key={title}
              className="bg-[#0A1628]/80 border border-slate-800/60 rounded-xl p-5 hover:border-[#00B4D8]/25 transition-colors duration-200"
              data-aos="fade-up"
            >
              <div className="text-[#00B4D8] mb-3">{icon}</div>
              <h3 className="text-white font-semibold text-sm mb-1">{title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
