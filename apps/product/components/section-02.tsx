import Image from 'next/image'

export default function Section02() {
  return (
    <section data-aos-id-2="">
      <div className="relative max-w-7xl mx-auto">

        {/* Bg */}
        <div className="absolute inset-0 rounded-tr-[100px] mb-24 md:mb-0 bg-[#0A1628] pointer-events-none -z-10" aria-hidden="true" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-12 md:py-20">

            {/* Section content */}
            <div className="relative max-w-xl mx-auto md:max-w-none text-center md:text-left">

              {/* Content */}
              <div className="md:max-w-lg">

                {/* Copy */}
                <h2 className="h2 text-white mb-4" data-aos="fade-up" data-aos-anchor="[data-aos-id-2]" data-aos-delay="100">
                  Todo lo que necesitas, en un solo terminal
                </h2>
                <p className="text-lg text-slate-400 mb-8" data-aos="fade-up" data-aos-anchor="[data-aos-id-2]" data-aos-delay="200">
                  Un dispositivo compacto que reemplaza la caja registradora, la impresora, el lector de tarjetas, y todo lo demás.
                </p>

                {/* Feature list */}
                <ul
                  className="text-slate-300 space-y-3 mb-8"
                  data-aos="fade-up"
                  data-aos-anchor="[data-aos-id-2]"
                  data-aos-delay="300"
                >
                  {[
                    'Pantalla táctil y lector NFC/chip integrado',
                    'Impresora térmica para recibos al instante',
                    'Software 100% en español',
                    'Acepta contactless, chip, banda, y efectivo',
                    'Funciona sin WiFi — modo offline completo',
                    'Batería de 12+ horas',
                  ].map((feature) => (
                    <li key={feature} className="flex items-center">
                      <svg className="shrink-0 mr-3" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="10" cy="10" r="10" fill="#00B4D8" fillOpacity="0.2" />
                        <path
                          fill="#00B4D8"
                          d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <div className="max-w-xs mx-auto sm:max-w-none mb-8" data-aos="fade-up" data-aos-anchor="[data-aos-id-2]" data-aos-delay="400">
                  <div>
                    <a
                      className="btn-sm inline-flex items-center text-white bg-[#00B4D8] hover:bg-[#0096B7] group shadow-xs"
                      href="#contacto"
                    >
                      Solicitar demo gratuita
                      <span className="tracking-normal text-white/80 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-2">
                        <svg className="fill-current" width={12} height={10} xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 6.002h7.586L6.293 8.295a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.416l-4-4a1 1 0 0 0-1.414 1.416l2.293 2.293H1a1 1 0 1 0 0 2Z" />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="md:absolute md:left-[412px] md:top-0 -mb-12 mt-8 md:mt-16 md:mb-0">
                <div className="relative -mx-16 md:mx-0">
                  <div data-aos="fade-up" data-aos-anchor="[data-aos-id-2]">
                    <Image
                      src="/images/terminales.png"
                      className="md:max-w-none"
                      style={{ height: 'auto' }}
                      width={500}
                      height={500}
                      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 500px"
                      alt="Terminal Icee POS con impresora y pantalla táctil"
                    />
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
