import Link from 'next/link'

export default function FeaturedProduct() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Banner card */}
          <div
            className="relative rounded-2xl bg-[#0A1628] border border-[#00B4D8]/30 overflow-hidden"
            data-aos="fade-up"
          >
            {/* Accent glow */}
            <div
              className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#00B4D8]/10 blur-3xl pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative max-w-xl mx-auto md:max-w-none flex flex-col md:flex-row md:items-center md:space-x-8 lg:space-x-16 space-y-8 md:space-y-0 px-6 sm:px-8 py-10 md:py-14">

              {/* Content */}
              <div className="text-center md:text-left md:w-1/2">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#00B4D8]/20 text-[#48CAE4] mb-4">
                  Producto destacado
                </div>
                <h2 className="h2 font-playfair-display text-slate-100 mb-4">
                  Conoce Icee POS
                </h2>
                <p className="text-xl text-slate-400 mb-8">
                  La plataforma POS diseñada para negocios hispanos en Estados Unidos. Todo en español, sin contratos, desde $29/mes.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                  <Link
                    className="btn text-white bg-[#00B4D8] hover:bg-[#0096B7] group"
                    href="https://pos.iceeelectronics.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver Icee POS{' '}
                    <span className="tracking-normal text-[#48CAE4] group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                      -&gt;
                    </span>
                  </Link>
                  <a
                    href="https://wa.me/573104527042?text=Hola%2C%20quiero%20saber%20m%C3%A1s%20sobre%20Icee%20POS"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn text-[#00B4D8] border border-[#00B4D8]/40 hover:border-[#00B4D8] bg-transparent hover:bg-[#00B4D8]/10 group"
                  >
                    Solicitar demo
                  </a>
                </div>
              </div>

              {/* Video showcase */}
              <div className="flex justify-center md:justify-end md:w-1/2">
                <div className="relative w-full max-w-sm md:max-w-none rounded-xl overflow-hidden border border-[#00B4D8]/20 shadow-2xl shadow-black/40">
                  {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="/images/icee_pos_nobg.png"
                    className="w-full h-auto object-cover"
                    aria-label="Demostración Icee POS en acción"
                  >
                    <source src="/videos/icee_pos_2.mp4" type="video/mp4" />
                  </video>
                  {/* Live badge */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm rounded-full px-2.5 py-1 border border-white/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00B4D8] animate-pulse" aria-hidden="true" />
                    <span className="text-xs text-white/80 font-medium">Icee POS en acción</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
