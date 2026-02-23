'use client'

import { useState } from 'react'

interface Testimonial {
  name: string
  business: string
  city: string
  state: string
  type: string
  quote: string
  avatar: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    name: 'María G.',
    business: 'Tacos El Sol',
    city: 'Houston',
    state: 'TX',
    type: 'Food Truck',
    quote:
      'Antes perdía ventas porque muchos clientes no traían efectivo. Con Icee POS empecé a aceptar tarjeta en mi food truck en menos de un día. Ahora mis ventas subieron un 30% y todo el sistema está en español, perfecto para mí.',
    avatar: 'MG',
    rating: 5,
  },
  {
    name: 'Carlos R.',
    business: 'El Rincón del Swap',
    city: 'Los Angeles',
    state: 'CA',
    type: 'Swap Meet',
    quote:
      'Trabajo en el swap meet los fines de semana. La batería dura todo el día y funciona sin internet cuando la señal se pone mala. El soporte en español es lo mejor — por fin alguien que me entiende sin tener que usar Google Translate.',
    avatar: 'CR',
    rating: 5,
  },
  {
    name: 'Ana P.',
    business: 'Taquería La Paloma',
    city: 'Chicago',
    state: 'IL',
    type: 'Taquería',
    quote:
      'Tengo mi taquería hace 8 años. Intenté Square pero todo estaba en inglés y me perdía. Icee POS es diferente — lo entendí desde el primer día. La impresora de recibos integrada me ahorra mucho dinero en papel y tiempo.',
    avatar: 'AP',
    rating: 5,
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} estrellas de 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-[#F59E0B]' : 'text-slate-600'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function TestimonialsSection() {
  const [activeIdx, setActiveIdx] = useState(0)

  return (
    <section className="bg-[#060F1E] py-16 md:py-24 border-t border-slate-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <span className="inline-block text-xs font-semibold text-[#00B4D8] uppercase tracking-widest mb-3">
            Testimonios
          </span>
          <h2 className="h2 text-white mb-3">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Negocios hispanos en EE.UU. que ya cobran con Icee POS.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-3 gap-6" data-aos="fade-up" data-aos-delay="80">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`relative flex flex-col bg-[#0A1628] border rounded-2xl p-6 cursor-pointer transition-all duration-200 ${
                activeIdx === i
                  ? 'border-[#00B4D8]/60 shadow-lg shadow-[#00B4D8]/10'
                  : 'border-slate-800/70 hover:border-slate-700'
              }`}
              onClick={() => setActiveIdx(i)}
            >
              {/* Large quote mark */}
              <svg
                className="absolute top-4 right-5 w-8 h-8 text-[#00B4D8]/10 fill-current"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M0 20.333V32h11.556V20.333H3.852C3.852 14.222 8 10.481 16.296 9.778V0C6.074.74 0 7.111 0 20.333ZM32 20.333V32H20.444V20.333h7.704C28.148 14.222 24 10.481 15.704 9.778V0C25.926.74 32 7.111 32 20.333Z" />
              </svg>

              {/* Rating */}
              <StarRating rating={t.rating} />

              {/* Quote */}
              <p className="mt-4 text-slate-300 text-sm leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-5 flex items-center gap-3">
                {/* Avatar */}
                <div className="w-10 h-10 rounded-full bg-[#00B4D8]/20 border border-[#00B4D8]/30 flex items-center justify-center text-[#00B4D8] text-sm font-bold shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-slate-500 text-xs">
                    {t.business} · {t.city}, {t.state}
                  </div>
                </div>
                {/* Type pill */}
                <span className="ml-auto text-[10px] font-semibold text-[#00B4D8]/80 bg-[#00B4D8]/10 border border-[#00B4D8]/20 rounded-full px-2 py-0.5 whitespace-nowrap shrink-0">
                  {t.type}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIdx(i)}
              className={`rounded-full transition-all duration-300 ${
                i === activeIdx ? 'w-6 h-2 bg-[#00B4D8]' : 'w-2 h-2 bg-slate-600 hover:bg-slate-400'
              }`}
              aria-label={`Ver testimonio ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
