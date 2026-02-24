'use client'

import { type CartItem } from '../data/demo-products'

interface CartScreenProps {
  cart: CartItem[]
  subtotal: number
  tax: number
  total: number
  onClose: () => void
  onUpdateQty: (productId: number, delta: number) => void
  onCheckout: () => void
  onAddMore: () => void
  showTourHint?: boolean
}

export default function CartScreen({ cart, subtotal, tax, total, onClose, onUpdateQty, onCheckout, onAddMore, showTourHint = false }: CartScreenProps) {
  return (
    <div className="bg-[#fafbfd] flex flex-col size-full" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {/* Header */}
      <div className="bg-[#0b2545] flex items-center justify-between px-4 py-3 shadow-sm shrink-0 z-10" style={{ height: 64 }}>
        <div className="flex-1 pl-10 flex justify-center">
          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 18, color: '#fff', letterSpacing: '-0.45px' }}>
            Tu Orden
          </span>
        </div>
        <button onClick={onClose}
          className="flex items-center justify-center w-10 h-10 rounded-full"
          style={{ background: 'rgba(255,255,255,0.1)' }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 1l12 12M13 1L1 13" stroke="rgba(255,255,255,0.8)" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {/* Cart items — scrollable */}
      <div className="flex-1 overflow-y-auto px-4 pt-4 pb-4 flex flex-col gap-3" style={{ paddingBottom: 200, scrollbarWidth: 'none' }}>
        {cart.map(item => (
          <div key={item.product.id}
            className="bg-white rounded-2xl shadow-sm p-3 flex gap-3">
            {/* Thumbnail */}
            <div className="w-12 h-12 rounded-2xl overflow-hidden bg-[#f3f4f6] shrink-0">
              <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover"
                onError={e => {
                  const t = e.currentTarget
                  t.style.display = 'none'
                  const p = t.parentElement
                  if (p) p.innerHTML = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:22px">${item.product.emoji}</div>`
                }}
              />
            </div>
            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start">
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 16, color: '#0b2545' }}>
                  {item.product.name}
                </span>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 16, color: '#0b2545' }}>
                  ${((item.product.price + item.modifierTotal) * item.quantity).toFixed(2)}
                </span>
              </div>
              {item.selectedModifiers.length > 0 && (
                <div style={{ fontSize: 12, color: '#5e858d', fontStyle: 'italic', marginTop: 2 }}>
                  {item.selectedModifiers.length} extras
                </div>
              )}
              {/* Stepper + Edit */}
              <div className="flex items-center justify-between mt-2.5">
                <div className="flex items-center bg-[#f9fafb] border border-[#f3f4f6] rounded-2xl h-9 p-0.5">
                  <button onClick={() => onUpdateQty(item.product.id, -1)}
                    className="flex items-center justify-center w-9 h-full rounded-l-2xl">
                    <svg width="11" height="2" viewBox="0 0 11 2"><rect width="11" height="2" rx="1" fill="#64748b"/></svg>
                  </button>
                  <span className="w-8 text-center"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 14, color: '#0b2545' }}>
                    {item.quantity}
                  </span>
                  <button onClick={() => onUpdateQty(item.product.id, 1)}
                    className="flex items-center justify-center w-9 h-full rounded-r-2xl">
                    <svg width="11" height="11" viewBox="0 0 11 11">
                      <rect x="5" y="0" width="1.5" height="11" rx=".75" fill="#00b2d6"/>
                      <rect x="0" y="5" width="11" height="1.5" rx=".75" fill="#00b2d6"/>
                    </svg>
                  </button>
                </div>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 12, color: '#00b2d6', cursor: 'pointer' }}>
                  Editar
                </span>
              </div>
            </div>
          </div>
        ))}

        {/* Add more link */}
        <button onClick={onAddMore}
          className="flex items-center justify-center gap-1 py-2">
          <svg width="15" height="15" viewBox="0 0 15 15">
            <rect x="7" y="0" width="1.5" height="15" rx=".75" fill="#00b2d6"/>
            <rect x="0" y="7" width="15" height="1.5" rx=".75" fill="#00b2d6"/>
          </svg>
          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 14, color: '#00b2d6' }}>
            Agregar más productos
          </span>
        </button>
      </div>

      {/* Sticky footer */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-[#f3f4f6] rounded-t-3xl shadow-[0_-4px_20px_rgba(0,0,0,0.06)]">
        <div className="flex flex-col gap-2 px-5 pt-4 pb-1">
          <div className="flex justify-between">
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: 14, color: '#6b7280' }}>Subtotal</span>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: 14, color: '#0b2545' }}>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: 14, color: '#6b7280' }}>Impuesto (8%)</span>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: 14, color: '#0b2545' }}>${tax.toFixed(2)}</span>
          </div>
          <div className="border-t border-dashed border-[#e5e7eb] h-px my-1" />
          <div className="flex justify-between items-center mb-1">
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 18, color: '#0b2545' }}>TOTAL</span>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: 30, color: '#0b2545', lineHeight: '36px' }}>
              ${total.toFixed(2)}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-3 px-5 pb-5">
          {showTourHint && (
            <>
              <style>{`
                @keyframes cart-hint-in {
                  0%   { opacity: 0; transform: translateY(6px); }
                  15%  { opacity: 1; transform: translateY(0); }
                  80%  { opacity: 1; }
                  100% { opacity: 0.8; }
                }
                @keyframes cart-hint-bounce {
                  0%, 100% { transform: translateY(0); }
                  50%       { transform: translateY(5px); }
                }
                @keyframes cart-btn-glow {
                  0%, 100% { box-shadow: 0 10px 15px -3px rgba(0,178,214,0.25), 0 0 0 0 rgba(0,180,216,0.6); }
                  50%       { box-shadow: 0 10px 15px -3px rgba(0,178,214,0.25), 0 0 0 6px rgba(0,180,216,0); }
                }
              `}</style>
              {/* Hint chip above button */}
              <div
                className="pointer-events-none flex justify-center -mb-1"
                style={{ animation: 'cart-hint-in 0.4s ease forwards' }}
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
                    animation: 'cart-hint-bounce 1.1s ease-in-out infinite',
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
                    ¡Toca Cobrar!
                  </span>
                </div>
              </div>
            </>
          )}
          <button onClick={onCheckout}
            className="h-13 rounded-2xl flex items-center justify-between px-6"
            style={{
              height: 52,
              background: 'linear-gradient(to right, #00b2d6, #00c4ec)',
              animation: showTourHint ? 'cart-btn-glow 1.5s ease-in-out infinite' : undefined,
              boxShadow: showTourHint
                ? '0 10px 15px -3px rgba(0,178,214,0.25), 0 0 0 3px rgba(0,180,216,0.35)'
                : '0 10px 15px -3px rgba(0,178,214,0.25)',
            }}>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 18, color: '#fff' }}>
              Cobrar con Tarjeta
            </span>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 18, color: '#fff' }}>
              ${total.toFixed(2)}
            </span>
          </button>
          <button className="h-13 rounded-2xl border-2 border-[#e2e8f0] flex items-center justify-center gap-2"
            style={{ height: 52 }}>
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
              <rect x="1" y="1" width="16" height="12" rx="2" stroke="#0b2545" strokeWidth="1.5"/>
              <path d="M1 5h16" stroke="#0b2545" strokeWidth="1.5"/>
            </svg>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 16, color: '#0b2545' }}>
              Cobrar en Efectivo
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}
