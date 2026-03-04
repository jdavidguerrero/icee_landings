import Link from 'next/link'
import Image from 'next/image'

const subsidiaries = [
  { src: '/images/logos/icee-colombia.png', alt: 'Icee Electronics Colombia', label: 'Colombia' },
  { src: '/images/logos/icee-ecuador.png',  alt: 'Icee Electronics Ecuador',  label: 'Ecuador'  },
  { src: '/images/logos/icee-usa.png',      alt: 'Icee Electronics USA',      label: 'USA'      },
]

export default function HeroHome() {
  return (
    <section className="relative isolate overflow-hidden flex items-center min-h-[88vh]">

      {/* Background video — hero-icee */}
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none -z-20"
        aria-hidden="true"
      >
        <source src="/videos/hero-icee.mp4" type="video/mp4" />
        {/* fallback */}
        <source src="/videos/icee_presentacion.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0A1628]/75 pointer-events-none -z-10" aria-hidden="true" />

      {/* Bottom fade to match next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#060F1E] to-transparent pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="pt-28 pb-20 md:pt-36 md:pb-32 text-center">

          {/* PCI inline badge */}
          <div
            className="inline-flex items-center gap-2.5 bg-[#00B4D8]/10 border border-[#00B4D8]/30 rounded-full px-4 py-1.5 mb-7"
            data-aos="fade-down"
          >
            <span className="w-2 h-2 bg-[#00B4D8] rounded-full animate-pulse" aria-hidden="true" />
            <span className="text-xs font-semibold text-[#00B4D8] uppercase tracking-widest">PCI-DSS Nivel 1 Certificado</span>
            <span className="text-slate-500 text-xs">·</span>
            <span className="text-xs text-slate-400">+6 años vigente</span>
          </div>

          {/* H1 — Institutional B2B copy */}
          <h1
            className="h1 font-playfair-display text-slate-100 mb-5 max-w-4xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="60"
          >
            Tu Aliado Estratégico en Infraestructura de Pagos
          </h1>

          {/* Subtitle */}
          <p
            className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="120"
          >
            Más de 10 años proveyendo hardware POS, mantenimiento certificado PCI-DSS
            y software de integración para el sector financiero y retail
            en América Latina y EE.UU.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row justify-center gap-4"
            data-aos="fade-up"
            data-aos-delay="180"
          >
            <Link
              className="btn text-white bg-[#00B4D8] hover:bg-[#0096B7] group"
              href="#lineas-negocio"
            >
              Conoce nuestras soluciones{' '}
              <span className="tracking-normal text-[#48CAE4] group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                -&gt;
              </span>
            </Link>
            <Link
              className="btn text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm"
              href="https://wa.me/573104527042?text=Hola%2C%20me%20interesa%20Icee%20Electronics"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hablar con un Experto
            </Link>
          </div>

          {/* Subsidiary logos */}
          <div
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
            data-aos="fade-up"
            data-aos-delay="240"
          >
            {subsidiaries.map(({ src, alt, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 bg-white/95 rounded-xl px-4 py-2.5 shadow-sm"
              >
                <Image
                  src={src}
                  alt={alt}
                  width={100}
                  height={36}
                  className="object-contain h-[34px] w-auto"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
