export default function Section07() {
  const checkIcon = (
    <svg className="w-3 h-3 fill-current text-[#00B4D8] mr-3 mt-1.5 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
    </svg>
  )

  return (
    <section id="precios">
      <div className="relative max-w-7xl mx-auto">
        {/* Bg */}
        <div className="absolute inset-0 rounded-tr-[100px] mb-24 md:mb-0 border-2 border-slate-100 pointer-events-none -z-10" aria-hidden="true" />
        <div className="absolute inset-0 rounded-tr-[100px] mb-24 md:mb-0 bg-gradient-to-t from-white pointer-events-none -z-10" aria-hidden="true" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
            {/* Section content */}
            <div className="relative max-w-xl mx-auto md:max-w-none text-center md:text-left">
              {/* Section header */}
              <div className="md:max-w-3xl mb-12 md:mb-20" data-aos="fade-up">
                <h2 className="h2 mb-4">Planes simples, sin contratos</h2>
                <p className="text-lg text-slate-500 mb-6">
                  Todo incluido. Sin sorpresas. Cancela cuando quieras.
                </p>
                {/* Payment method logos */}
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs text-slate-400 mr-1">Acepta:</span>
                  {[
                    { label: 'Visa', bg: '#1A1F71', text: 'white' },
                    { label: 'Mastercard', bg: '#EB001B', text: 'white' },
                    { label: 'Amex', bg: '#2E77BC', text: 'white' },
                    { label: 'Apple Pay', bg: '#000000', text: 'white' },
                    { label: 'Google Pay', bg: '#FFFFFF', text: '#3C4043', border: '#DADCE0' },
                    { label: 'EBT (próx.)', bg: '#E5F0FF', text: '#1A6BB8', border: '#93C5FD' },
                  ].map(({ label, bg, text, border }) => (
                    <span
                      key={label}
                      className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-semibold"
                      style={{
                        background: bg,
                        color: text,
                        border: border ? `1px solid ${border}` : 'none',
                      }}
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </div>

              {/* Pricing tables — 2 centered cards */}
              <div
                className="max-w-sm md:max-w-2xl mx-auto grid gap-8 md:grid-cols-2 items-start"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                {/* Plan Basico */}
                <div className="relative flex flex-col h-full rounded-br-[100px] py-5 px-6 border border-slate-200 bg-white">
                  <div className="mb-4">
                    <div className="text-lg font-bold text-center mb-1">Plan Básico</div>
                    <p className="text-xs text-slate-500 text-center mb-3">Ideal para vendedores ambulantes y street vendors</p>
                  </div>
                  <div className="mb-5">
                    <div className="text-2xl text-slate-800 font-bold text-center mb-4">$29<span className="text-base font-normal text-slate-500">/mes</span></div>
                    <a
                      className="btn-sm w-full inline-flex justify-center items-center text-white bg-[#00B4D8] hover:bg-[#0096B7] shadow-xs"
                      href="#contacto"
                    >
                      Empezar con Básico
                    </a>
                  </div>
                  <div className="text-slate-700 font-medium mb-4">Incluye</div>
                  <ul className="text-slate-500 text-left space-y-2">
                    <li className="flex items-start">{checkIcon}<span>Terminal T1 portátil incluida</span></li>
                    <li className="flex items-start">{checkIcon}<span>Catálogo hasta 50 productos</span></li>
                    <li className="flex items-start">{checkIcon}<span>Reportes básicos de ventas</span></li>
                    <li className="flex items-start">{checkIcon}<span>Tap to Pay (NFC/contactless)</span></li>
                    <li className="flex items-start">{checkIcon}<span>Soporte en español</span></li>
                  </ul>
                </div>

                {/* Plan Pro */}
                <div className="relative flex flex-col h-full bg-[#0A1628] rounded-br-[100px] py-5 px-6">
                  <div className="absolute top-0 right-0 -translate-y-1/2 mr-6 inline-flex text-sm text-white bg-[#00B4D8] font-[550] rounded-full px-3 py-px">
                    Más popular
                  </div>
                  <div className="mb-4">
                    <div className="text-lg font-bold text-center text-white mb-1">Plan Pro</div>
                    <p className="text-xs text-slate-400 text-center mb-3">Ideal para food trucks, taquerías, swap meets</p>
                  </div>
                  <div className="mb-5">
                    <div className="text-2xl text-white font-bold text-center mb-4">$49<span className="text-base font-normal text-slate-400">/mes</span></div>
                    <a
                      className="btn-sm w-full inline-flex justify-center items-center text-[#0A1628] bg-[#00B4D8] hover:bg-[#48CAE4] shadow-xs font-bold"
                      href="#contacto"
                    >
                      Empezar con Pro
                    </a>
                  </div>
                  <div className="text-slate-300 font-medium mb-4">Todo en Básico, más</div>
                  <ul className="text-slate-300 text-left space-y-2">
                    <li className="flex items-start">{checkIcon}<span>Terminal T1 o T3 incluida</span></li>
                    <li className="flex items-start">{checkIcon}<span>Catálogo ilimitado de productos</span></li>
                    <li className="flex items-start">{checkIcon}<span>Reportes avanzados + exportación CSV</span></li>
                    <li className="flex items-start">{checkIcon}<span>Especiales del día y propinas configurables</span></li>
                    <li className="flex items-start">{checkIcon}<span>Modo offline completo</span></li>
                    <li className="flex items-start">{checkIcon}<span>Soporte prioritario 24/7 en español</span></li>
                  </ul>
                </div>
              </div>

              {/* Financing note */}
              <div className="mt-8 text-center" data-aos="fade-up" data-aos-delay="200">
                <p className="text-sm text-slate-500">
                  <span className="font-semibold text-slate-700">Financiamiento disponible:</span> $0 inicial + $15–25/mes por hardware
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
