'use client'

import { useState, useEffect } from 'react'
import { DEMO_PRODUCTS, CATEGORIES, type Product, type Category } from '../data/demo-products'

interface CatalogScreenProps {
  cartCount: number
  onProductTap: (product: Product) => void
  onCartTap: () => void
}

export default function CatalogScreen({ cartCount, onProductTap, onCartTap }: CatalogScreenProps) {
  const [activeCategory, setActiveCategory] = useState<Category>('Todo')
  const [search, setSearch] = useState('')
  const [showHint, setShowHint] = useState(true)

  // Auto-dismiss hint after 4 s
  useEffect(() => {
    const t = setTimeout(() => setShowHint(false), 4000)
    return () => clearTimeout(t)
  }, [])

  const handleProductTap = (p: Product) => {
    setShowHint(false)
    onProductTap(p)
  }

  const filtered = DEMO_PRODUCTS.filter(p => {
    const matchCat = activeCategory === 'Todo' || p.category === activeCategory
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <div className="bg-[#fafbfd] flex flex-col size-full" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>

      {/* Header */}
      <div className="bg-[#0b2545] flex items-center justify-between px-4 py-3 shadow-md shrink-0" style={{ height: 64 }}>
        {/* Hamburger */}
        <button className="flex items-center justify-center w-10 h-10 rounded-full">
          <svg width="21" height="14" viewBox="0 0 21 14" fill="none">
            <rect width="21" height="2" rx="1" fill="rgba(255,255,255,0.7)" />
            <rect y="6" width="15" height="2" rx="1" fill="rgba(255,255,255,0.7)" />
            <rect y="12" width="18" height="2" rx="1" fill="rgba(255,255,255,0.7)" />
          </svg>
        </button>
        {/* Title + status */}
        <div className="flex items-center gap-2">
          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 18, color: '#fff', letterSpacing: '-0.45px' }}>
            Icee Food
          </span>
          <div className="relative w-3 h-3">
            <div className="absolute inset-0 bg-green-400 rounded-full opacity-75 animate-ping" style={{ animationDuration: '2s' }} />
            <div className="absolute inset-0 bg-green-500 rounded-full border-2 border-[#0b2545]" />
          </div>
        </div>
        {/* Cart button */}
        <button onClick={onCartTap} className="relative flex items-center justify-center w-10 h-10 rounded-full">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M1 1H4.27L6.82 13.47C6.97 14.11 7.54 14.57 8.19 14.57H17.71C18.36 14.57 18.92 14.12 19.08 13.49L21 6H5" stroke="rgba(255,255,255,0.85)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="9" cy="18.5" r="1.5" fill="rgba(255,255,255,0.85)"/>
            <circle cx="17" cy="18.5" r="1.5" fill="rgba(255,255,255,0.85)"/>
          </svg>
          {cartCount > 0 && (
            <span className="absolute -top-0.5 -right-0.5 flex items-center justify-center w-4 h-4 rounded-full bg-red-500 border-2 border-[#0b2545]"
              style={{ fontSize: 10, fontWeight: 700, color: '#fff', lineHeight: 1 }}>
              {cartCount}
            </span>
          )}
        </button>
      </div>

      {/* Search */}
      <div className="px-4 pt-4 pb-1 shrink-0">
        <div className="relative">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="6.5" cy="6.5" r="5" stroke="#9ca3af" strokeWidth="1.5"/>
            <path d="M10.5 10.5L14 14" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <input
            type="text"
            placeholder="Buscar productos..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full bg-white border border-[#e5e7eb] rounded-[10px] pl-10 pr-4 py-3 text-sm outline-none text-[#374151] placeholder:text-[#9ca3af]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14 }}
          />
        </div>
      </div>

      {/* Category chips */}
      <div className="flex gap-3 px-4 py-3 overflow-x-auto shrink-0" style={{ scrollbarWidth: 'none' }}>
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className="shrink-0 rounded-full px-5 py-2 text-sm font-semibold shadow-sm transition-all"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 14,
              fontWeight: activeCategory === cat ? 700 : 500,
              background: activeCategory === cat ? '#00b4d8' : '#fff',
              color: activeCategory === cat ? '#fff' : '#475569',
              border: `1px solid ${activeCategory === cat ? '#00b4d8' : '#e2e8f0'}`,
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product grid — scrollable */}
      <div className="flex-1 overflow-y-auto px-4 pb-36 relative" style={{ scrollbarWidth: 'none' }}>

        {/* Tap hint — points at first product, auto-fades after 4 s */}
        {showHint && (
          <>
            <style>{`
              @keyframes hint-life {
                0%   { opacity: 0; transform: translateY(6px); }
                12%  { opacity: 1; transform: translateY(0); }
                75%  { opacity: 1; }
                100% { opacity: 0; }
              }
              @keyframes tap-pulse {
                0%, 100% { transform: scale(1) translateY(0); }
                45%       { transform: scale(0.88) translateY(5px); }
                65%       { transform: scale(0.93) translateY(3px); }
              }
            `}</style>
            <div
              className="absolute pointer-events-none z-20"
              style={{
                top: 26,
                left: 24,
                animation: 'hint-life 4s ease forwards',
              }}
            >
              {/* Ripple rings */}
              <div className="relative w-16 h-16 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-[#00b4d8]"
                  style={{ opacity: 0.18, animation: 'ping 1.4s cubic-bezier(0,0,0.2,1) infinite' }} />
                <div className="absolute inset-2 rounded-full bg-[#00b4d8]"
                  style={{ opacity: 0.25, animation: 'ping 1.4s cubic-bezier(0,0,0.2,1) infinite', animationDelay: '0.35s' }} />
                {/* Finger */}
                <span
                  style={{
                    fontSize: 28,
                    lineHeight: 1,
                    animation: 'tap-pulse 1.4s ease-in-out infinite',
                    filter: 'drop-shadow(0 2px 6px rgba(0,180,216,0.5))',
                  }}
                >
                  👆
                </span>
              </div>
              {/* Label chip */}
              <div
                className="absolute mt-1 whitespace-nowrap rounded-full px-2.5 py-1 text-white font-semibold"
                style={{
                  top: '100%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  fontSize: 11,
                  background: 'rgba(11,37,69,0.92)',
                  border: '1px solid rgba(0,180,216,0.35)',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                  backdropFilter: 'blur(4px)',
                }}
              >
                ¡Tócalo!
              </div>
            </div>
          </>
        )}

        <div className="grid grid-cols-3 gap-2">
          {filtered.map(product => (
            <button
              key={product.id}
              onClick={() => handleProductTap(product)}
              className="bg-white border border-[#f1f5f9] rounded-2xl p-2 shadow-sm text-left active:scale-95 transition-transform"
            >
              <div className="bg-[#f1f5f9] rounded-xl overflow-hidden mb-2" style={{ height: 88 }}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  onError={e => {
                    const t = e.currentTarget
                    t.style.display = 'none'
                    const parent = t.parentElement
                    if (parent) parent.innerHTML = `<div style="height:100%;display:flex;align-items:center;justify-content:center;font-size:32px">${product.emoji}</div>`
                  }}
                />
              </div>
              <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 500, fontSize: 13, color: '#1e293b', lineHeight: 1.3 }}>{product.name}</div>
              <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 15, color: '#00b4d8', marginTop: 2 }}>${product.price.toFixed(2)}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Quick-price bar + Bottom nav */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-[#f1f5f9]">
        {/* Quick prices */}
        <div className="flex gap-2 px-4 pt-3 pb-1">
          {['$2', '$3', '$5', '$10', 'Otro'].map(p => (
            <div key={p} className="flex-1 flex items-center justify-center py-2.5 rounded-full bg-[#e8f8fd]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 13, color: '#00b4d8' }}>
              {p}
            </div>
          ))}
        </div>
        {/* Nav */}
        <div className="flex items-end justify-center pb-5 pt-2">
          {[
            { label: 'Ventas', active: true, icon: <path d="M2 10h4v8H2V10zm7-7h4v15H9V3zm7 4h4v11h-4V7z" fill="currentColor"/> },
            { label: 'Reportes', active: false, icon: <><path d="M3 3h18v18H3V3z" fill="none" stroke="currentColor" strokeWidth="1.5"/><path d="M7 16l3-4 3 3 3-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></> },
            { label: 'Productos', active: false, icon: <><rect x="2" y="3" width="20" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5"/><path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></> },
            { label: 'Config', active: false, icon: <path d="M12 15a3 3 0 100-6 3 3 0 000 6z M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" fill="none" stroke="currentColor" strokeWidth="1.5"/> },
          ].map(({ label, active, icon }) => (
            <div key={label} className="flex-1 flex flex-col items-center gap-1">
              <div className="flex items-center justify-center w-8 h-8">
                <svg width="20" height="20" viewBox="0 0 24 24" style={{ color: active ? '#00b4d8' : '#94a3b8' }}>
                  {icon}
                </svg>
              </div>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11, fontWeight: active ? 700 : 500, color: active ? '#00b4d8' : '#94a3b8' }}>
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
