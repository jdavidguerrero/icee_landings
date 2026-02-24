import React from 'react'

interface DeviceFrameProps {
  children: React.ReactNode
}

export default function DeviceFrame({ children }: DeviceFrameProps) {
  return (
    <div className="relative flex justify-center select-none">
      {/* Outer device shell */}
      <div
        className="relative"
        style={{
          width: 280,
          background: 'linear-gradient(145deg, #2a2a3e 0%, #1a1a2e 50%, #141422 100%)',
          borderRadius: 36,
          padding: '14px 10px 20px',
          boxShadow:
            '0 50px 100px -20px rgba(0,0,0,0.6), 0 30px 60px -30px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08), inset 0 -1px 0 rgba(0,0,0,0.4)',
        }}
      >
        {/* Top bar — camera + sensors */}
        <div className="flex items-center justify-center gap-2 mb-2 px-2">
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 6px #22c55e' }} />
          <div style={{ width: 48, height: 5, borderRadius: 3, background: 'rgba(255,255,255,0.08)' }} />
          <div style={{ width: 5, height: 5, borderRadius: '50%', background: 'rgba(255,255,255,0.15)' }} />
        </div>

        {/* Screen bezel */}
        <div
          style={{
            borderRadius: 20,
            overflow: 'hidden',
            background: '#000',
            boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.05)',
            // Force the screen to exactly 390×680 scaled to 260px wide
            width: 260,
            height: 498,
          }}
        >
          {/* Scaled screen content — Figma screens are 390px wide, we display at 260px */}
          <div
            style={{
              width: 390,
              height: 748,
              transformOrigin: 'top left',
              transform: 'scale(0.6667)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {children}
          </div>
        </div>

        {/* Bottom printer zone */}
        <div className="mt-3 px-2">
          <div
            style={{
              height: 8,
              borderRadius: 4,
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.06)',
            }}
          />
          <div
            style={{
              height: 4,
              borderRadius: 2,
              background: 'rgba(255,255,255,0.03)',
              marginTop: 4,
              width: '60%',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          />
        </div>
      </div>

      {/* Base / stand */}
      <div
        style={{
          position: 'absolute',
          bottom: -12,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 100,
          height: 12,
          background: 'linear-gradient(to bottom, #1a1a2e, #111120)',
          borderRadius: '0 0 8px 8px',
          boxShadow: '0 8px 20px rgba(0,0,0,0.4)',
        }}
      />
    </div>
  )
}
