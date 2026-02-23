'use client'

import { useState, useEffect } from 'react'

const statCards = [
  {
    value: '86.9%',
    text: 'de las transacciones en EE.UU. son sin efectivo. ¿Tu negocio está listo?',
    source: 'Fuente: Federal Reserve, 2023',
  },
  {
    value: '+12–18%',
    text: 'más gasto promedio cuando los clientes pagan con tarjeta vs. efectivo.',
    source: 'Fuente: Federal Reserve, 2023',
  },
]

export default function Section06() {
  const [active, setActive] = useState(0)

  // Auto-rotate every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % statCards.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="mt-12 md:mt-20" data-aos-id-6="">
      <div className="relative max-w-7xl mx-auto">
        {/* Bg */}
        <div
          className="absolute inset-0 rounded-tl-[100px] mb-24 md:mb-0 bg-linear-to-b from-slate-100 pointer-events-none -z-10"
          aria-hidden="true"
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
            {/* Section content */}
            <div className="relative max-w-xl mx-auto md:max-w-none text-center md:text-left flex flex-col md:flex-row items-center justify-end">
              {/* Content */}
              <div className="w-[512px] max-w-full shrink-0 md:order-1">
                {/* Copy */}
                <h2 className="h2 mb-4" data-aos="fade-up" data-aos-anchor="[data-aos-id-6]" data-aos-delay="100">
                  El dinero en efectivo está desapareciendo
                </h2>
                <p className="text-lg text-slate-500 mb-6" data-aos="fade-up" data-aos-anchor="[data-aos-id-6]" data-aos-delay="200">
                  Tus clientes ya prefieren pagar sin efectivo. Los negocios que aceptan tarjeta venden más y retienen más clientes.
                </p>
                <ul
                  className="inline-flex flex-col text-slate-500 space-y-2.5"
                  data-aos="fade-up"
                  data-aos-anchor="[data-aos-id-6]"
                  data-aos-delay="300"
                >
                  {[
                    'Aumenta el ticket promedio por venta',
                    'Menos tiempo manejando efectivo',
                    'Más seguridad y control de tu dinero',
                    'Reportes automáticos de tus ventas diarias',
                  ].map((item) => (
                    <li key={item} className="flex items-center">
                      <svg className="shrink-0 mr-3" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="10" cy="10" r="10" fill="#00B4D8" fillOpacity="0.15" />
                        <path
                          fill="#00B4D8"
                          d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"
                        />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stat card carousel — pure React, no Swiper */}
              <div className="w-full max-w-sm md:max-w-none md:mr-8 mt-12 md:mt-0" data-aos="fade-up" data-aos-anchor="[data-aos-id-6]">
                <div className="relative max-w-sm mx-auto">
                  <div className="absolute inset-0 mb-10 -mt-14 -mx-14 bg-slate-100 -z-10" aria-hidden="true" />

                  {/* Card */}
                  <div className="relative overflow-hidden shadow-2xl">
                    {statCards.map((card, i) => (
                      <div
                        key={i}
                        className={`flex flex-col h-auto text-left transition-opacity duration-700 ${
                          i === active ? 'opacity-100' : 'opacity-0 absolute inset-0'
                        }`}
                        aria-hidden={i !== active}
                      >
                        <div className="relative bg-[#0A1628] h-32 flex items-center justify-center">
                          <span className="text-5xl font-bold text-[#00B4D8]">{card.value}</span>
                        </div>
                        <div className="grow flex flex-col bg-[#1E293B] p-6 pt-8">
                          <p className="grow font-medium text-slate-200 mb-4">{card.text}</p>
                          <div className="font-medium text-xs text-slate-500">{card.source}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Dots */}
                  <div className="mt-4 text-center flex justify-center gap-2">
                    {statCards.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActive(i)}
                        className={`rounded-full transition-all duration-300 ${
                          i === active ? 'w-6 h-2 bg-[#00B4D8]' : 'w-2 h-2 bg-slate-400 hover:bg-slate-600'
                        }`}
                        aria-label={`Ver estadística ${i + 1}`}
                      />
                    ))}
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
