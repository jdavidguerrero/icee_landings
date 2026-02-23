'use client'

import { useEffect, useRef, useState } from 'react'

/* ─────────────────────── Data ─────────────────────── */
interface OfficeMarker {
  name: string
  flag: string
  coordinates: [number, number] // [lon, lat]
  address: string
}

const offices: OfficeMarker[] = [
  { name: 'Colombia',       flag: '🇨🇴', coordinates: [-74.07,  4.71], address: 'Bogotá, Colombia' },
  { name: 'Ecuador',        flag: '🇪🇨', coordinates: [-78.51, -0.22], address: 'Quito, Ecuador' },
  { name: 'Estados Unidos', flag: '🇺🇸', coordinates: [-80.19, 25.77], address: 'Miami, Florida' },
]

/* ─────────────────────── SVG Map ─────────────────────── */
const W = 960
const H = 500

interface WorldMapSVGProps {
  countryPaths: string[]
}

function WorldMapSVG({ countryPaths }: WorldMapSVGProps) {
  const [hovered, setHovered] = useState<OfficeMarker | null>(null)
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 })
  const svgRef = useRef<SVGSVGElement>(null)
  const projFn = useRef<((lon: number, lat: number) => [number, number]) | null>(null)

  useEffect(() => {
    if (countryPaths.length === 0) return
    import('d3-geo').then(({ geoEquirectangular }) => {
      const proj = geoEquirectangular()
        .translate([W / 2, H / 2])
        .scale((W / 2 / Math.PI) * 0.8)
        .center([0, 12])
      projFn.current = (lon: number, lat: number) => {
        const pt = proj([lon, lat])
        return pt ?? [0, 0]
      }
    })
  }, [countryPaths.length])

  const getMarkerPos = (lon: number, lat: number): [number, number] => {
    if (projFn.current) return projFn.current(lon, lat)
    const x = ((lon + 180) / 360) * W
    const y = ((90 - lat) / 180) * H
    return [x, y]
  }

  const handleMarkerEnter = (m: OfficeMarker, cx: number, cy: number) => {
    setHovered(m)
    const svg = svgRef.current
    if (!svg) return
    const rect = svg.getBoundingClientRect()
    setTooltipPos({
      x: (cx / W) * rect.width,
      y: (cy / H) * rect.height,
    })
  }

  return (
    <div className="relative w-full" style={{ paddingBottom: `${(H / W) * 100}%` }}>
      <svg
        ref={svgRef}
        viewBox={`0 0 ${W} ${H}`}
        className="absolute inset-0 w-full h-full"
      >
        {/* Ocean */}
        <rect width={W} height={H} fill="#0c1e3c" />

        {/* Grid lines */}
        {[-60, -30, 0, 30, 60].map((lat) => {
          const proj = geoEquirectangularSimple(0, lat)
          return (
            <line key={`lat${lat}`}
              x1={0} y1={proj[1]} x2={W} y2={proj[1]}
              stroke="#1e3658" strokeWidth={0.4} strokeDasharray="4 6" />
          )
        })}
        {[-120, -60, 0, 60, 120].map((lon) => {
          const proj = geoEquirectangularSimple(lon, 0)
          return (
            <line key={`lon${lon}`}
              x1={proj[0]} y1={0} x2={proj[0]} y2={H}
              stroke="#1e3658" strokeWidth={0.4} strokeDasharray="4 6" />
          )
        })}

        {/* Continent paths */}
        {countryPaths.map((d, i) => (
          <path key={i} d={d} fill="#1a3a5c" stroke="#2a4e7a" strokeWidth={0.5} />
        ))}

        {/* Office Markers */}
        {countryPaths.length > 0 && offices.map((m) => {
          const [cx, cy] = getMarkerPos(m.coordinates[0], m.coordinates[1])
          const isHovered = hovered?.name === m.name
          return (
            <g
              key={m.name}
              transform={`translate(${cx},${cy})`}
              style={{ cursor: 'pointer' }}
              onMouseEnter={() => handleMarkerEnter(m, cx, cy)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Animated pulse ring */}
              <circle r={isHovered ? 14 : 10} fill="#00B4D8" fillOpacity={0.15}
                style={{ transition: 'r 0.2s' }}>
                <animate attributeName="r" values="9;16;9" dur="2.5s" repeatCount="indefinite" />
                <animate attributeName="fill-opacity" values="0.15;0.04;0.15" dur="2.5s" repeatCount="indefinite" />
              </circle>
              {/* Main dot */}
              <circle r={isHovered ? 8 : 6} fill="#00B4D8" stroke="#060F1E" strokeWidth={1.5}
                style={{ transition: 'r 0.15s' }} />
              {/* Inner dot */}
              <circle r={2} fill="#fff" />
            </g>
          )
        })}
      </svg>

      {/* Tooltip */}
      {hovered && (
        <div
          className="pointer-events-none absolute z-10 -translate-x-1/2 flex items-center gap-2.5 bg-[#0D1F38]/95 border border-[#00B4D8]/40 rounded-lg px-3 py-2 text-sm text-white shadow-2xl"
          style={{ left: tooltipPos.x, top: Math.max(tooltipPos.y - 60, 4) }}
        >
          <span className="text-xl leading-none">{hovered.flag}</span>
          <div>
            <div className="font-semibold text-white text-xs leading-tight">{hovered.name}</div>
            <div className="text-[#00B4D8] text-xs mt-0.5">{hovered.address}</div>
          </div>
        </div>
      )}
    </div>
  )
}

function geoEquirectangularSimple(lon: number, lat: number): [number, number] {
  return [
    ((lon + 180) / 360) * W,
    ((90 - lat) / 180) * H,
  ]
}

/* ─────────────────────── Main section ─────────────────────── */
export default function PresenceSection() {
  const [countryPaths, setCountryPaths] = useState<string[]>([])
  const loaded = useRef(false)

  useEffect(() => {
    if (loaded.current) return
    loaded.current = true

    Promise.all([
      import('d3-geo'),
      import('topojson-client'),
      fetch('/world-110m.json').then((r) => r.json()),
    ]).then(([d3geo, topo, topology]) => {
      const projection = d3geo.geoEquirectangular()
        .translate([W / 2, H / 2])
        .scale((W / 2 / Math.PI) * 0.8)
        .center([0, 12])

      const pathGen = d3geo.geoPath(projection)

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const land = (topo.feature as (...a: any[]) => any)(topology, topology.objects.land)

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const paths = (land.features as any[])
        .map((f: unknown) => pathGen(f as Parameters<typeof pathGen>[0]))
        .filter(Boolean) as string[]

      setCountryPaths(paths)
    }).catch(console.error)
  }, [])

  return (
    <section className="bg-[#060F1E] py-16 md:py-24 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* ── Header ── */}
        <div className="text-center mb-10 md:mb-14" data-aos="fade-up">
          <span className="inline-block text-xs font-semibold text-[#00B4D8] uppercase tracking-widest mb-3">
            Nuestras sedes
          </span>
          <h2 className="h2 font-playfair-display text-white mb-3">
            Presencia en 3 países
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Colombia, Ecuador y Estados Unidos — más de 10 años al servicio de empresas en América.
          </p>
        </div>

        {/* ── Quick stats ── */}
        <div className="flex justify-center gap-10 sm:gap-20 mb-10" data-aos="fade-up" data-aos-delay="80">
          {[{ n: '3', l: 'sedes propias' }, { n: '2', l: 'países en Latam' }, { n: '+10', l: 'años' }].map(({ n, l }) => (
            <div key={l} className="text-center">
              <div className="text-3xl font-bold font-playfair-display text-[#00B4D8]">{n}</div>
              <div className="text-xs text-slate-500 mt-0.5">{l}</div>
            </div>
          ))}
        </div>

        {/* ── Map ── */}
        <div
          className="rounded-2xl overflow-hidden border border-slate-800/60 bg-[#0c1e3c] relative"
          data-aos="fade-up"
          data-aos-delay="120"
        >
          {countryPaths.length === 0 && (
            <div className="absolute inset-0 flex items-center justify-center" style={{ minHeight: 300 }}>
              <div className="w-8 h-8 border-2 border-[#00B4D8]/30 border-t-[#00B4D8] rounded-full animate-spin" />
            </div>
          )}
          <WorldMapSVG countryPaths={countryPaths} />
        </div>

        {/* ── Office cards ── */}
        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8"
          data-aos="fade-up"
          data-aos-delay="160"
        >
          {offices.map((office) => (
            <div
              key={office.name}
              className="flex items-center gap-4 bg-[#0A1628] border border-slate-800/70 rounded-xl px-5 py-4"
            >
              <span className="text-3xl leading-none">{office.flag}</span>
              <div>
                <div className="text-white font-semibold text-sm leading-tight">{office.name}</div>
                <div className="text-[#00B4D8] text-xs mt-0.5">{office.address}</div>
                <div className="text-slate-500 text-xs mt-0.5">Sede propia</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
