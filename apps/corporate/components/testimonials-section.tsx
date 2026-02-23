interface Testimonial {
  name: string
  role: string
  company: string
  country: string
  quote: string
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Roberto M.',
    role: 'Director de Tecnología',
    company: 'Banco Regional del Pacífico',
    country: 'Ecuador',
    quote:
      'Llevamos 5 años con Icee Electronics para el mantenimiento de nuestros terminales POS. Su certificación PCI-DSS y el tiempo de respuesta nos dan la tranquilidad que necesitamos en el sector financiero.',
    avatar: 'RM',
  },
  {
    name: 'Patricia L.',
    role: 'Gerente de Operaciones',
    company: 'Inversiones & Pagos S.A.',
    country: 'Colombia',
    quote:
      'El equipo de Icee entiende el negocio. Nos ayudaron a desarrollar el software de integración para nuestros puntos de venta en menos de 3 meses. Profesionalismo y conocimiento técnico de alto nivel.',
    avatar: 'PL',
  },
  {
    name: 'James T.',
    role: 'Operations Manager',
    company: 'TechPay Solutions',
    country: 'United States',
    quote:
      'We needed a reliable partner for POS hardware supply in Latin America. Icee Electronics has been that partner — consistent quality, fast shipping, and a team that truly knows the payment technology space.',
    avatar: 'JT',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="bg-[#060F1E] py-16 md:py-24 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-12 md:mb-16" data-aos="fade-up">
          <span className="inline-block text-xs font-semibold text-[#00B4D8] uppercase tracking-widest mb-3">
            Clientes
          </span>
          <h2 className="h2 font-playfair-display text-white mb-3">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Empresas del sector financiero y tecnológico que confían en Icee Electronics.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="relative flex flex-col bg-[#0A1628] border border-slate-800/70 rounded-2xl p-6"
              data-aos="fade-up"
              data-aos-delay={String(i * 100)}
            >
              {/* Quote mark */}
              <svg
                className="absolute top-4 right-5 w-8 h-8 text-[#00B4D8]/10 fill-current"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M0 20.333V32h11.556V20.333H3.852C3.852 14.222 8 10.481 16.296 9.778V0C6.074.74 0 7.111 0 20.333ZM32 20.333V32H20.444V20.333h7.704C28.148 14.222 24 10.481 15.704 9.778V0C25.926.74 32 7.111 32 20.333Z" />
              </svg>

              {/* Quote */}
              <p className="text-slate-300 text-sm leading-relaxed flex-1 mb-5">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#00B4D8]/20 border border-[#00B4D8]/30 flex items-center justify-center text-[#00B4D8] text-sm font-bold shrink-0">
                  {t.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-white font-semibold text-sm truncate">{t.name}</div>
                  <div className="text-slate-500 text-xs truncate">{t.role} · {t.company}</div>
                  <div className="text-slate-600 text-xs mt-0.5">{t.country}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
