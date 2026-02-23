import Link from 'next/link'
import Image from 'next/image'

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
                  La plataforma POS diseñada para negocios hispanos en Estados Unidos. Todo en español.
                </p>
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
              </div>

              {/* Image */}
              <div className="flex justify-center md:justify-end md:w-1/2">
                <Image
                  src="/images/terminales.png"
                  alt="Terminales Icee POS"
                  width={480}
                  height={360}
                  className="object-contain max-h-72 md:max-h-80"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
