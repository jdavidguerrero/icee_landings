'use client'

import { useEffect, useRef } from 'react'

interface PaymentNfcScreenProps {
  total: number
  onConfirm: () => void
  onCancel: () => void
}

export default function PaymentNfcScreen({ total, onConfirm, onCancel }: PaymentNfcScreenProps) {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      onConfirm()
    }, 3200)
    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  }, [onConfirm])

  return (
    <div
      className="relative size-full flex flex-col"
      style={{
        background: '#0b2545',
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
    >
      {/* Subtle radial glow at top */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 80% 40% at 50% 0%, rgba(0,178,214,0.1) 0%, transparent 70%)',
      }} />

      {/* Top — arrow + amount */}
      <div className="flex flex-col items-center pt-10 pb-4 shrink-0">
        {/* Bounce arrow */}
        <div className="animate-bounce mb-5">
          <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
            <path d="M9 0L17 10H1L9 0Z" fill="rgba(0,180,216,0.7)" />
          </svg>
        </div>
        <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 44, color: '#fff', lineHeight: '55px' }}>
          ${total.toFixed(2)}
        </div>
        <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: 14, color: 'rgba(255,255,255,0.6)', marginTop: 4 }}>
          Total a Pagar
        </div>
      </div>

      {/* Center — NFC animation */}
      <div className="flex-1 flex items-center justify-center">
        <div className="relative flex items-center justify-center" style={{ width: 200, height: 200 }}>
          {/* Pulsating rings */}
          {[1, 2, 3].map(i => (
            <div
              key={i}
              className="absolute rounded-full border"
              style={{
                width: 80 + i * 36,
                height: 80 + i * 36,
                borderColor: `rgba(0,180,216,${0.35 - i * 0.08})`,
                background: `rgba(0,180,216,${0.08 - i * 0.02})`,
                animation: `nfc-pulse ${1.6 + i * 0.3}s ease-out infinite`,
                animationDelay: `${i * 0.25}s`,
              }}
            />
          ))}
          {/* Center circle */}
          <div className="relative z-10 flex items-center justify-center rounded-full"
            style={{
              width: 96,
              height: 96,
              background: '#00b2d6',
              boxShadow: '0 0 30px rgba(0,178,214,0.4)',
            }}>
            {/* NFC icon */}
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M12 20C12 15.6 15.6 12 20 12" stroke="rgba(255,255,255,0.5)" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M8 20C8 13.4 13.4 8 20 8" stroke="rgba(255,255,255,0.3)" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M16 20C16 17.8 17.8 16 20 16" stroke="rgba(255,255,255,0.7)" strokeWidth="2.5" strokeLinecap="round"/>
              <circle cx="20" cy="20" r="3" fill="#fff"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Bottom — instructions + cancel + timer */}
      <div className="flex flex-col items-center pb-8 shrink-0">
        <div className="mb-8 text-center">
          <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 22, color: '#fff', letterSpacing: '0.6px', marginBottom: 4 }}>
            Acerque su tarjeta arriba
          </div>
          <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: 16, color: 'rgba(255,255,255,0.65)' }}>
            Tap card on top
          </div>
        </div>
        <button onClick={onCancel}
          className="flex items-center gap-2 px-6 py-3 rounded-3xl mb-6"
          style={{ border: '1px solid rgba(255,255,255,0.2)' }}>
          <svg width="12" height="12" viewBox="0 0 12 12">
            <path d="M1 1l10 10M11 1L1 11" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: 15, color: 'rgba(255,255,255,0.6)' }}>
            Cancelar / Cancel
          </span>
        </button>
      </div>

      {/* Timer progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[rgba(255,255,255,0.1)]">
        <div
          className="h-full bg-[#00b4d8]"
          style={{ animation: 'timer-fill 3.2s linear forwards' }}
        />
      </div>

      <style>{`
        @keyframes nfc-pulse {
          0% { transform: scale(0.8); opacity: 1; }
          100% { transform: scale(1.4); opacity: 0; }
        }
        @keyframes timer-fill {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  )
}
