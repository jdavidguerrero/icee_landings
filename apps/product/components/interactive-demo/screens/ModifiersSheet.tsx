'use client'

import { DEMO_MODIFIERS, type Product } from '../data/demo-products'

interface ModifiersSheetProps {
  product: Product
  selectedModifiers: number[]
  quantity: number
  onToggleModifier: (id: number) => void
  onSetQuantity: (qty: number) => void
  onAdd: () => void
  onBack: () => void
  showTourHint?: boolean
}

export default function ModifiersSheet({
  product, selectedModifiers, quantity,
  onToggleModifier, onSetQuantity, onAdd, onBack,
  showTourHint = false,
}: ModifiersSheetProps) {
  const modifierTotal = DEMO_MODIFIERS
    .filter(m => selectedModifiers.includes(m.id))
    .reduce((s, m) => s + m.price, 0)
  const lineTotal = (product.price + modifierTotal) * quantity

  return (
    <div className="relative size-full" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {/* Blurred backdrop */}
      <div className="absolute inset-0 bg-[#fafbfd] opacity-20" />
      <div className="absolute inset-0 bg-[rgba(20,20,20,0.3)]" onClick={onBack} />

      {/* Bottom sheet */}
      <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-[32px] shadow-[0_-8px_30px_rgba(0,0,0,0.12)] flex flex-col" style={{ maxHeight: '92%' }}>
        {/* Drag handle */}
        <div className="flex justify-center pt-3 pb-1">
          <div className="w-12 h-1.5 bg-[#d1d5db] rounded-full" />
        </div>

        {/* Scrollable content */}
        <div className="overflow-y-auto pb-44" style={{ scrollbarWidth: 'none' }}>
          {/* Product header */}
          <div className="flex gap-4 px-6 pt-4 pb-6 border-b border-[#f3f4f6]">
            <div className="w-20 h-20 rounded-3xl overflow-hidden bg-[#f3f4f6] shrink-0 shadow-sm">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover"
                onError={e => {
                  const t = e.currentTarget
                  t.style.display = 'none'
                  const p = t.parentElement
                  if (p) p.innerHTML = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:36px">${product.emoji}</div>`
                }}
              />
            </div>
            <div className="pt-1 flex-1">
              <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: 24, color: '#101718', lineHeight: '30px' }}>
                {product.name}
              </div>
              <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 30, color: '#00b2d6', lineHeight: '30px', marginTop: 2 }}>
                ${product.price.toFixed(2)}
              </div>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, color: '#5e858d', marginTop: 4 }}>
                {product.description}
              </div>
            </div>
          </div>

          {/* Modifiers section */}
          <div className="px-6 py-4 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 18, color: '#101718', letterSpacing: '-0.45px' }}>
                Extras
              </span>
              <span className="bg-[#f3f4f6] rounded-md px-2 py-1 text-xs font-medium text-[#5e858d]"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Opcional
              </span>
            </div>
            <div className="flex flex-col gap-3">
              {DEMO_MODIFIERS.map(mod => {
                const isSelected = selectedModifiers.includes(mod.id)
                return (
                  <button
                    key={mod.id}
                    onClick={() => onToggleModifier(mod.id)}
                    className="flex items-center justify-between p-4 rounded-3xl transition-all"
                    style={{
                      background: isSelected ? '#e8f8fd' : '#fff',
                      border: `1px solid ${isSelected ? '#00b4d8' : '#f3f4f6'}`,
                    }}
                  >
                    <div className="text-left">
                      <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 16, color: '#101718' }}>
                        {mod.name}
                      </div>
                      <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: 14, color: isSelected ? '#00b2d6' : '#5e858d' }}>
                        {mod.price === 0 ? '$0.00' : `+$${mod.price.toFixed(2)}`}
                      </div>
                    </div>
                    {/* Checkbox */}
                    <div className="flex items-center justify-center w-6 h-6 rounded-full border-2 transition-all shrink-0"
                      style={{ borderColor: isSelected ? '#00b4d8' : '#d1d5db', background: isSelected ? '#00b4d8' : 'transparent' }}>
                      {isSelected && (
                        <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                          <path d="M1 4l3.5 3.5L11 1" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Sticky footer */}
        <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-[#f3f4f6] shadow-[0_-4px_20px_rgba(0,0,0,0.05)] pt-4 pb-8 px-4 rounded-t-[32px]">
          {/* Quantity stepper */}
          <div className="flex items-center justify-center gap-6 mb-4">
            <button onClick={() => onSetQuantity(quantity - 1)}
              className="flex items-center justify-center w-12 h-12 rounded-full"
              style={{ background: 'rgba(0,178,214,0.1)' }}>
              <svg width="16" height="3" viewBox="0 0 16 3"><rect width="16" height="3" rx="1.5" fill="#00b2d6"/></svg>
            </button>
            <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 24, color: '#101718', minWidth: 32, textAlign: 'center' }}>
              {quantity}
            </span>
            <button onClick={() => onSetQuantity(quantity + 1)}
              className="flex items-center justify-center w-12 h-12 rounded-full shadow-lg"
              style={{ background: '#00b2d6', boxShadow: '0 10px 15px -3px rgba(0,178,214,0.3)' }}>
              <svg width="16" height="16" viewBox="0 0 16 16">
                <rect x="7" y="0" width="2" height="16" rx="1" fill="#fff"/>
                <rect x="0" y="7" width="16" height="2" rx="1" fill="#fff"/>
              </svg>
            </button>
          </div>

          {/* Add button */}
          <div className="relative">
            {showTourHint && (
              <>
                <style>{`
                  @keyframes mod-hint-in {
                    0%   { opacity: 0; transform: translateY(6px); }
                    15%  { opacity: 1; transform: translateY(0); }
                    80%  { opacity: 1; }
                    100% { opacity: 0.8; }
                  }
                  @keyframes mod-hint-bounce {
                    0%, 100% { transform: translateY(0); }
                    50%       { transform: translateY(5px); }
                  }
                  @keyframes mod-btn-glow {
                    0%, 100% { box-shadow: 0 10px 15px -3px rgba(0,178,214,0.25), 0 0 0 0 rgba(0,180,216,0.6); }
                    50%       { box-shadow: 0 10px 15px -3px rgba(0,178,214,0.25), 0 0 0 6px rgba(0,180,216,0); }
                  }
                `}</style>
                {/* Bouncing chip above button */}
                <div
                  className="absolute pointer-events-none z-10 w-full flex justify-center"
                  style={{ bottom: '100%', paddingBottom: 8, animation: 'mod-hint-in 0.4s ease forwards' }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 6,
                      background: 'rgba(0,180,216,0.15)',
                      border: '1px solid rgba(0,180,216,0.55)',
                      borderRadius: 20,
                      padding: '5px 14px',
                      animation: 'mod-hint-bounce 1.1s ease-in-out infinite',
                    }}
                  >
                    <span style={{ fontSize: 15, lineHeight: 1 }}>👆</span>
                    <span style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: 13,
                      fontWeight: 700,
                      color: '#00b4d8',
                      letterSpacing: '0.2px',
                    }}>
                      ¡Toca Agregar!
                    </span>
                  </div>
                </div>
              </>
            )}
            <button onClick={onAdd}
              className="w-full h-14 rounded-3xl flex items-center justify-between px-6"
              style={{
                background: 'linear-gradient(to right, #00b4d8, #48cae4)',
                animation: showTourHint ? 'mod-btn-glow 1.5s ease-in-out infinite' : undefined,
                boxShadow: showTourHint
                  ? '0 10px 15px -3px rgba(0,178,214,0.25), 0 0 0 3px rgba(0,180,216,0.35)'
                  : '0 10px 15px -3px rgba(0,178,214,0.25)',
              }}>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 18, color: '#fff', letterSpacing: '0.45px' }}>
                Agregar
              </span>
              <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 20, color: '#fff' }}>
                ${lineTotal.toFixed(2)}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
