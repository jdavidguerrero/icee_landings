'use client'

import { useEffect, useState } from 'react'
import { type DemoScreen } from './hooks/useDemoState'

interface TourStep {
  paso?: string
  titulo: string
  sub: string
}

const STEPS: Record<DemoScreen, TourStep> = {
  catalog:      { paso: '1 de 4', titulo: 'Toca un producto',       sub: 'Elige lo que quieres vender' },
  modifiers:    { paso: '2 de 4', titulo: 'Personaliza tu orden',   sub: 'Agrega extras o ajusta la cantidad' },
  cart:         { paso: '3 de 4', titulo: 'Revisa antes de cobrar', sub: 'Confirma los totales y elige cómo pagar' },
  payment:      { paso: '4 de 4', titulo: 'Cobra con un toque',     sub: 'NFC, chip o efectivo' },
  confirmation: {                  titulo: '¡Venta completada!',    sub: 'Así de fácil es Icee POS 🎉' },
}

interface Props {
  screen: DemoScreen
  onDismiss: () => void
}

export default function DemoTourBubble({ screen, onDismiss }: Props) {
  const [visible, setVisible] = useState(false)
  const step = STEPS[screen]

  // Slide in after screen transition finishes
  useEffect(() => {
    setVisible(false)
    const t = setTimeout(() => setVisible(true), 180)
    return () => clearTimeout(t)
  }, [screen])

  // Auto-dismiss on confirmation
  useEffect(() => {
    if (screen !== 'confirmation') return
    const t = setTimeout(onDismiss, 2800)
    return () => clearTimeout(t)
  }, [screen, onDismiss])

  return (
    <div
      style={{
        width: 260,
        transition: 'opacity 0.3s ease, transform 0.3s ease',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(10px)',
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      {/* Triangle pointing up at device */}
      <div style={{
        width: 0,
        height: 0,
        borderLeft: '9px solid transparent',
        borderRight: '9px solid transparent',
        borderBottom: '9px solid rgba(11,37,69,0.97)',
        margin: '0 auto',
        filter: 'drop-shadow(0 -1px 0 rgba(0,180,216,0.2))',
      }} />

      {/* Bubble card */}
      <div style={{
        background: 'rgba(11,37,69,0.97)',
        border: '1px solid rgba(0,180,216,0.28)',
        borderRadius: 14,
        padding: '11px 36px 11px 14px',
        position: 'relative',
        boxShadow: '0 12px 30px rgba(0,0,0,0.45)',
        backdropFilter: 'blur(10px)',
      }}>
        {/* Step pill */}
        {step.paso && (
          <span style={{
            display: 'inline-block',
            background: 'rgba(0,180,216,0.15)',
            border: '1px solid rgba(0,180,216,0.3)',
            borderRadius: 20,
            padding: '1px 8px',
            fontSize: 10,
            fontWeight: 700,
            color: '#00b4d8',
            letterSpacing: '0.5px',
            marginBottom: 6,
            fontFamily: "'Outfit', sans-serif",
            textTransform: 'uppercase' as const,
          }}>
            PASO {step.paso}
          </span>
        )}

        {/* Title */}
        <div style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: 14,
          fontWeight: 700,
          color: '#fff',
          marginBottom: 3,
          lineHeight: 1.3,
        }}>
          {screen === 'confirmation' ? '🎉 ' : '→ '}{step.titulo}
        </div>

        {/* Sub */}
        <div style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: 12,
          color: 'rgba(148,163,184,0.9)',
          lineHeight: 1.4,
        }}>
          {step.sub}
        </div>

        {/* Dismiss × */}
        {screen !== 'confirmation' && (
          <button
            onClick={onDismiss}
            style={{
              position: 'absolute',
              top: 8,
              right: 10,
              background: 'none',
              border: 'none',
              color: 'rgba(148,163,184,0.5)',
              fontSize: 15,
              cursor: 'pointer',
              lineHeight: 1,
              padding: 3,
              transition: 'color 0.15s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.85)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(148,163,184,0.5)')}
            aria-label="Cerrar guía"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  )
}
