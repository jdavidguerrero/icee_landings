'use client'

import { useEffect, useRef } from 'react'
import { type CartItem } from '../data/demo-products'

interface ConfirmationScreenProps {
  cart: CartItem[]
  subtotal: number
  tax: number
  total: number
  onNewSale: () => void
}

export default function ConfirmationScreen({ cart, subtotal, tax, total, onNewSale }: ConfirmationScreenProps) {
  const checkRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = checkRef.current
    if (!el) return
    el.style.transform = 'scale(0)'
    el.style.opacity = '0'
    requestAnimationFrame(() => {
      el.style.transition = 'transform 0.5s cubic-bezier(0.34,1.56,0.64,1), opacity 0.3s ease'
      el.style.transform = 'scale(1)'
      el.style.opacity = '1'
    })
  }, [])

  const orderNum = '4092'
  const now = new Date()
  const timeStr = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })

  return (
    <div className="bg-[#fafbfd] flex flex-col items-center justify-between px-4 py-6 size-full overflow-y-auto"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", scrollbarWidth: 'none' }}>

      {/* Top: check + title + receipt */}
      <div className="flex flex-col items-center w-full max-w-sm">
        {/* Check icon */}
        <div ref={checkRef} className="mb-6 mt-4">
          <div className="flex items-center justify-center w-20 h-20 rounded-full shadow-xl"
            style={{
              background: 'linear-gradient(135deg, #06d6a0 0%, #04b889 100%)',
              boxShadow: '0 10px 20px rgba(6,214,160,0.3)',
            }}>
            <svg width="36" height="27" viewBox="0 0 36 27" fill="none">
              <path d="M3 13L13 23L33 3" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Title */}
        <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 24, color: '#0b2545', textAlign: 'center', letterSpacing: '0.6px', marginBottom: 20 }}>
          ¡Venta Completada!
        </div>

        {/* Receipt card */}
        <div className="w-full bg-white border border-[#f1f5f9] rounded-3xl shadow-sm overflow-hidden mb-6">
          <div className="px-6 pt-5 pb-4 flex flex-col gap-3">
            {/* Order header */}
            <div className="flex justify-between">
              <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 500, fontSize: 12, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.6px' }}>
                Orden #{orderNum}
              </span>
              <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 500, fontSize: 12, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.6px' }}>
                {timeStr}
              </span>
            </div>

            {/* Items */}
            <div className="flex flex-col gap-3 pb-1">
              {cart.map(item => (
                <div key={item.product.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-6 h-6 rounded-lg"
                      style={{ background: 'rgba(0,180,216,0.1)' }}>
                      <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 12, color: '#00b4d8' }}>
                        {item.quantity}
                      </span>
                    </div>
                    <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 500, fontSize: 15, color: '#334155' }}>
                      {item.product.name}
                    </span>
                  </div>
                  <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 15, color: '#0b2545' }}>
                    ${((item.product.price + item.modifierTotal) * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            <div className="border-t border-dashed border-[#e2e8f0] h-px" />

            {/* Totals */}
            <div className="flex flex-col gap-2">
              {[
                { label: 'Subtotal', val: subtotal },
                { label: 'Impuestos (8%)', val: tax },
                { label: 'Propina', val: 0 },
              ].map(({ label, val }) => (
                <div key={label} className="flex justify-between">
                  <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 400, fontSize: 14, color: '#64748b' }}>{label}</span>
                  <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 500, fontSize: 14, color: '#1e293b' }}>${val.toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-[#f1f5f9] pt-4 flex justify-between items-center">
              <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 18, color: '#0b2545' }}>Total</span>
              <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: 24, color: '#0b2545' }}>${total.toFixed(2)}</span>
            </div>

            {/* Payment badge */}
            <div className="flex items-center justify-center gap-2 py-2 px-3 rounded-2xl bg-[#f8fafc]">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path d="M7.5 0C3.35 0 0 3.35 0 7.5S3.35 15 7.5 15 15 11.65 15 7.5 11.65 0 7.5 0zm0 2a3 3 0 11-.001 6.001A3 3 0 017.5 2zm0 11c-2.21 0-4.17-1.06-5.4-2.7C3.4 9.22 5.35 8.5 7.5 8.5s4.1.72 5.4 1.8C11.67 11.94 9.71 13 7.5 13z" fill="#64748b"/>
              </svg>
              <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 500, fontSize: 14, color: '#64748b' }}>
                Contactless •••• 4532
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTAs */}
      <div className="w-full flex flex-col gap-3 max-w-sm pb-2">
        <button className="h-14 rounded-3xl flex items-center justify-center gap-3"
          style={{
            background: 'linear-gradient(to right, #00b4d8, #48cae4)',
            boxShadow: '0 10px 15px -3px rgba(0,180,216,0.2)',
          }}>
          <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 17, color: '#fff', letterSpacing: '0.45px' }}>
            Imprimir Recibo
          </span>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M4 7V2h10v5M4 13H2a1 1 0 01-1-1V8a1 1 0 011-1h14a1 1 0 011 1v4a1 1 0 01-1 1h-2M4 11h10v5H4v-5z" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button onClick={onNewSale}
          className="h-14 rounded-3xl border-2 border-[#00b4d8] flex items-center justify-center gap-2">
          <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 17, color: '#00b4d8', letterSpacing: '0.45px' }}>
            Nueva Venta
          </span>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <circle cx="9" cy="9" r="8" stroke="#00b4d8" strokeWidth="1.5"/>
            <path d="M9 5v8M5 9h8" stroke="#00b4d8" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>
        <button className="flex justify-center items-center py-3">
          <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: 14, color: '#ef4444' }}>
            Anular esta venta
          </span>
        </button>
      </div>
    </div>
  )
}
