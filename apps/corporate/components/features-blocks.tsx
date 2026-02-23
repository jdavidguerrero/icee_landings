'use client'

import Image from 'next/image'
import { useRef, useState, useEffect, useCallback } from 'react'

/* ─────────────────────── Types ─────────────────────── */
type BgType = 'image' | 'video'

interface Slide {
  id: string
  icon: React.ReactNode
  title: string
  description: string
  tag: string
  bg: { type: BgType; src: string }
}

/* ─────────────────────── Icons ─────────────────────── */
function IconParts() {
  return (
    <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="10" fill="rgba(0,180,216,0.15)" />
      <path d="M12 14h16v13H12zM15 14v-2a5 5 0 0110 0v2" stroke="#00B4D8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 20.5h6M20 17.5v6" stroke="#48CAE4" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function IconTool() {
  return (
    <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="10" fill="rgba(0,180,216,0.15)" />
      <path d="M26 15a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5c.68 0 1.33.13 1.93.38L20 13.75l1.25 2.5L24 15l2.1-2.1c.57.6.9 1.4.9 2.1z" stroke="#00B4D8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18.8 20.24l-5.05 5.27a1.25 1.25 0 001.77 1.77l5.06-5.06" stroke="#48CAE4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function IconCode() {
  return (
    <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="10" fill="rgba(0,180,216,0.15)" />
      <rect x="10" y="13" width="20" height="16" rx="2" stroke="#00B4D8" strokeWidth="1.5" />
      <path d="M16.5 19.5l-3 2.5 3 2.5M23.5 19.5l3 2.5-3 2.5M21 17l-2 8" stroke="#48CAE4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function IconRobot() {
  return (
    <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="10" fill="rgba(0,180,216,0.15)" />
      <rect x="11" y="17" width="18" height="14" rx="2" stroke="#00B4D8" strokeWidth="1.5" />
      <rect x="16" y="11" width="8" height="6" rx="1.5" stroke="#00B4D8" strokeWidth="1.5" />
      <line x1="20" y1="10" x2="20" y2="11" stroke="#48CAE4" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M15 17v-3.5a5 5 0 0110 0V17" stroke="#00B4D8" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M16 24h2M22 24h2M16 28h8" stroke="#48CAE4" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

/* ─────────────────────── Slides data ─────────────────────── */
const slides: Slide[] = [
  {
    id: 'comercializacion',
    icon: <IconParts />,
    title: 'Comercialización de Partes y Piezas',
    description: 'Venta al por mayor y al detal de repuestos y dispositivos electrónicos para el sector financiero y empresarial.',
    tag: 'Distribución',
    bg: { type: 'image', src: '/images/lineas-negocio.png' },
  },
  {
    id: 'mantenimiento',
    icon: <IconTool />,
    title: 'Mantenimiento y Reparación Especializada',
    description: 'Reparación correctiva y preventiva de dispositivos electrónicos. Más de 120,000 procesos históricos bajo estándares PCI-DSS.',
    tag: '+120K procesos',
    bg: { type: 'video', src: '/videos/icee_video_lab2.mp4' },
  },
  {
    id: 'software',
    icon: <IconCode />,
    title: 'Desarrollo de Software',
    description: 'Software integrado y plataformas POS para el sector financiero. Soluciones a medida para negocios en Colombia, Ecuador y USA.',
    tag: 'Tecnología propia',
    bg: { type: 'image', src: '/images/section-bg-1.png' },
  },
  {
    id: 'robotica',
    icon: <IconRobot />,
    title: 'Soluciones de Transformación Robótica (STR-IA)',
    description: 'Renting y venta de soluciones robóticas con inteligencia artificial para la transformación empresarial y automatización de procesos.',
    tag: 'STR-IA',
    bg: { type: 'video', src: '/videos/icee_robot.mp4' },
  },
]

/* ─────────────────────── Video background ─────────────────────── */
function VideoBg({ src, active }: { src: string; active: boolean }) {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = ref.current
    if (!video) return
    if (active) {
      video.currentTime = 0
      video.play().catch(() => {/* autoplay blocked is OK */})
    } else {
      video.pause()
    }
  }, [active])

  return (
    // eslint-disable-next-line jsx-a11y/media-has-caption
    <video
      ref={ref}
      muted
      loop
      playsInline
      preload="none"
      className="absolute inset-0 w-full h-full object-cover"
      aria-hidden="true"
    >
      <source src={src} type="video/mp4" />
    </video>
  )
}


/* ─────────────────────── Main carousel ─────────────────────── */
export default function FeaturesBlocks() {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + slides.length) % slides.length)
  }, [])

  // Auto-advance
  useEffect(() => {
    if (isPaused) return
    timerRef.current = setTimeout(next, 5500)
    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  }, [current, isPaused, next])

  const slide = slides[current]

  return (
    <section id="lineas-negocio" className="bg-[#060F1E]">
      {/* ── Section header ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-14 pb-8 text-center">
        <h2 className="h2 font-playfair-display text-white mb-3" data-aos="fade-up">
          Nuestras Líneas de Negocio
        </h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          Más de 10 años brindando soluciones tecnológicas integrales para el sector financiero y empresarial.
        </p>
      </div>

      {/* ── Carousel ── */}
      <div
        className="relative overflow-hidden"
        style={{ minHeight: '540px' }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Slides (stacked, only active is visible) */}
        {slides.map((s, i) => (
          <div
            key={s.id}
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: i === current ? 1 : 0, pointerEvents: i === current ? 'auto' : 'none' }}
            aria-hidden={i !== current}
          >
            {/* ── Background ── */}
            {s.bg.type === 'video' ? (
              <VideoBg src={s.bg.src} active={i === current} />
            ) : (
              <Image
                src={s.bg.src}
                alt=""
                fill
                className="object-cover"
                aria-hidden="true"
                priority={i === 0}
              />
            )}

            {/* Dark overlay — stronger at bottom for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#060F1E] via-[#060F1E]/70 to-[#060F1E]/50" />

            {/* ── Content ── */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full min-h-[540px] px-6 py-16 text-center">
              {/* Tag pill */}
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00B4D8] bg-[#00B4D8]/10 border border-[#00B4D8]/30 rounded-full px-3 py-1 mb-5 uppercase tracking-wider">
                {s.tag}
              </span>

              {/* Icon */}
              <div className="mb-5">{s.icon}</div>

              {/* Title */}
              <h3 className="font-playfair-display text-2xl sm:text-3xl md:text-4xl font-bold text-white max-w-2xl mb-4 leading-tight">
                {s.title}
              </h3>

              {/* Description */}
              <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed mb-6">
                {s.description}
              </p>

            </div>
          </div>
        ))}

        {/* ── Prev / Next arrows ── */}
        <button
          onClick={prev}
          className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-black/40 border border-white/10 text-white/70 hover:text-white hover:bg-[#00B4D8]/30 hover:border-[#00B4D8]/40 transition-all duration-200 backdrop-blur-sm"
          aria-label="Anterior"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={next}
          className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-black/40 border border-white/10 text-white/70 hover:text-white hover:bg-[#00B4D8]/30 hover:border-[#00B4D8]/40 transition-all duration-200 backdrop-blur-sm"
          aria-label="Siguiente"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* ── Slide counter (top-right) ── */}
        <div className="absolute top-4 right-16 z-20 text-xs text-white/40 tabular-nums">
          {current + 1} / {slides.length}
        </div>
      </div>

      {/* ── Dot nav + slide titles ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-12">
        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-6 mb-6">
          {slides.map((s, i) => (
            <button
              key={s.id}
              onClick={() => { setCurrent(i); setIsPaused(false) }}
              className={`transition-all duration-300 rounded-full ${
                i === current
                  ? 'w-8 h-2 bg-[#00B4D8]'
                  : 'w-2 h-2 bg-slate-600 hover:bg-slate-400'
              }`}
              aria-label={`Ir a ${s.title}`}
            />
          ))}
        </div>

        {/* Thumbnail strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
          {slides.map((s, i) => (
            <button
              key={s.id}
              onClick={() => { setCurrent(i); setIsPaused(false) }}
              className={`text-left px-3 py-2.5 rounded-lg border transition-all duration-200 ${
                i === current
                  ? 'border-[#00B4D8]/50 bg-[#00B4D8]/10 text-white'
                  : 'border-slate-800 bg-[#0A1628]/60 text-slate-500 hover:border-slate-600 hover:text-slate-300'
              }`}
            >
              <div className="flex items-center gap-2">
                <div className={`w-1 h-6 rounded-full flex-shrink-0 transition-colors ${i === current ? 'bg-[#00B4D8]' : 'bg-slate-700'}`} />
                <span className="text-xs font-medium leading-tight line-clamp-2">{s.title}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

    </section>
  )
}
