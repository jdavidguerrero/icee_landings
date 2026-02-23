export default function Section05() {
  return (
    <section id="como-funciona">
      <div className="relative max-w-7xl mx-auto">
        {/* Bg */}
        <div
          className="absolute inset-0 rounded-tr-[100px] bg-linear-to-tr from-[#0A1628] to-[#1E293B] pointer-events-none -z-10"
          aria-hidden="true"
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
            {/* Section content */}
            <div className="relative max-w-xl mx-auto md:max-w-none text-center md:text-left">
              {/* Section header */}
              <div className="md:max-w-3xl mb-12 md:mb-20" data-aos="fade-up">
                <h2 className="h2 text-white mb-4">Empieza a cobrar en 3 pasos</h2>
                <p className="text-lg text-slate-300 mb-8">
                  Sin contratos, sin técnicos, sin complicaciones. En menos de un día estás listo.
                </p>
              </div>

              {/* Steps */}
              <div
                className="max-w-sm mx-auto grid gap-12 md:grid-cols-3 md:-mx-9 md:gap-0 items-start md:max-w-none text-left"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                {/* Step 1 */}
                <div className="relative md:px-9 after:hidden md:after:block after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-px after:h-16 after:bg-[#00B4D8]/30 last:after:hidden">
                  <div className="mb-3">
                    <div className="flex items-center justify-center font-bold text-[#0A1628] bg-[#00B4D8] h-11 w-11 rounded-full text-lg">
                      1
                    </div>
                  </div>
                  <h4 className="text-white text-xl font-bold mb-1">Elige tu plan</h4>
                  <p className="text-slate-400">
                    Te enviamos tu terminal configurado y listo para usar. Sin complicaciones.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="relative md:px-9 after:hidden md:after:block after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-px after:h-16 after:bg-[#00B4D8]/30 last:after:hidden">
                  <div className="mb-3">
                    <div className="flex items-center justify-center font-bold text-[#0A1628] bg-[#00B4D8] h-11 w-11 rounded-full text-lg">
                      2
                    </div>
                  </div>
                  <h4 className="text-white text-xl font-bold mb-1">Agrega tus productos</h4>
                  <p className="text-slate-400">
                    Fotos, precios, categorías. En 15 minutos tienes tu catálogo listo.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="relative md:px-9 after:hidden md:after:block after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-px after:h-16 after:bg-[#00B4D8]/30 last:after:hidden">
                  <div className="mb-3">
                    <div className="flex items-center justify-center font-bold text-[#0A1628] bg-[#00B4D8] h-11 w-11 rounded-full text-lg">
                      3
                    </div>
                  </div>
                  <h4 className="text-white text-xl font-bold mb-1">Empieza a cobrar</h4>
                  <p className="text-slate-400">
                    Tap, chip, o efectivo. Recibo impreso al instante. Así de simple.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
