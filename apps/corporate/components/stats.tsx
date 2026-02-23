'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface StatItem {
  prefix: string
  value: number
  suffix: string
  label: string
  sublabel?: string
}

const statsData: StatItem[] = [
  { prefix: '+', value: 10,  suffix: ' años',  label: 'de experiencia',       sublabel: 'en el mercado' },
  { prefix: '+', value: 6,   suffix: ' años',  label: 'certificación PCI-DSS', sublabel: 'vigente' },
  { prefix: '+', value: 10,  suffix: '',        label: 'aliados globales',      sublabel: 'en 3 continentes' },
  { prefix: '+', value: 120, suffix: 'K',       label: 'procesos históricos',   sublabel: 'completados' },
]

function AnimatedCounter({ prefix, value, suffix }: Omit<StatItem, 'label' | 'sublabel'>) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, amount: 'some' })
  const [count, setCount] = useState(0)
  const frameRef = useRef<number | null>(null)

  useEffect(() => {
    if (!isInView) return
    const duration = 1800
    let startTime: number | null = null
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * value))
      if (progress < 1) frameRef.current = requestAnimationFrame(step)
    }
    frameRef.current = requestAnimationFrame(step)
    return () => { if (frameRef.current !== null) cancelAnimationFrame(frameRef.current) }
  }, [isInView, value])

  return <span ref={ref}>{prefix}{count}{suffix}</span>
}

export default function Stats() {
  return (
    <section className="relative bg-gradient-to-r from-[#060F1E] via-[#0A1628] to-[#060F1E] border-y border-slate-800/60">
      {/* Subtle glow line at top */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00B4D8]/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <ul className="flex flex-wrap sm:flex-nowrap">
          {statsData.map((stat, index) => (
            <li
              key={stat.label}
              className="relative w-1/2 sm:w-1/4 px-4 text-center py-6 sm:py-0
                after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2
                after:w-px after:h-16
                after:bg-gradient-to-b after:from-transparent after:via-slate-600/60 after:to-transparent
                after:hidden sm:after:block last:after:hidden"
            >
              {/* Number */}
              <div className="text-4xl md:text-5xl font-playfair-display font-bold text-[#00B4D8] mb-1 tabular-nums leading-none">
                <AnimatedCounter prefix={stat.prefix} value={stat.value} suffix={stat.suffix} />
              </div>
              {/* Label */}
              <div className="text-sm md:text-base font-semibold text-white/90 leading-tight">{stat.label}</div>
              {/* Sublabel */}
              {stat.sublabel && (
                <div className="text-xs text-slate-500 mt-0.5">{stat.sublabel}</div>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Subtle glow line at bottom */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00B4D8]/20 to-transparent" />
    </section>
  )
}
