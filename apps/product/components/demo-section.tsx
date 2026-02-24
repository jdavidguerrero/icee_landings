import InteractivePosDemo from './interactive-demo/InteractivePosDemo'

function FeatureBullet({ icon, text }: { icon: string; text: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#00B4D8]/10 shrink-0 text-xl">
        {icon}
      </div>
      <span className="text-slate-300 text-base">{text}</span>
    </div>
  )
}

export default function DemoSection() {
  return (
    <section id="demo" className="relative py-20 overflow-hidden bg-[#060F1E]">
      {/* Background grid pattern */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(0,180,216,0.06) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      {/* Accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-[#00B4D8]/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left — copy */}
          <div data-aos="fade-right">
            <span className="inline-block text-[#00B4D8] font-semibold text-xs uppercase tracking-widest mb-3">
              Demo Interactivo
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
              Prueba el POS<br />ahora mismo
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Toca los productos, arma una orden y completa un cobro.
              Así de fácil es vender con Icee POS.
            </p>

            <div className="space-y-4 mb-10">
              <FeatureBullet icon="⚡" text="Agrega productos en 1 toque" />
              <FeatureBullet icon="💳" text="Cobra con tarjeta o efectivo" />
              <FeatureBullet icon="🧾" text="Recibo automático al instante" />
              <FeatureBullet icon="📶" text="Funciona sin internet — modo offline" />
            </div>

            <a
              href="#contacto"
              className="inline-flex items-center gap-2 bg-[#00B4D8] hover:bg-[#0096B7] text-white font-semibold px-6 py-3 rounded-xl transition-colors shadow-lg shadow-[#00B4D8]/20"
            >
              Solicitar mi demo gratis
              <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
                <path d="M1 6h13M9 1l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Right — device */}
          <div className="flex flex-col items-center lg:items-end gap-4" data-aos="fade-left" data-aos-delay="150">

            {/* "Live demo" badge above the device */}
            <span className="inline-flex items-center gap-2 bg-[#00B4D8]/10 border border-[#00B4D8]/25 rounded-full px-4 py-1.5 text-[11px] font-bold text-[#00B4D8] uppercase tracking-widest select-none">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00B4D8] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00B4D8]" />
              </span>
              Demo interactivo
            </span>

            {/* Device + outer glow */}
            <div className="relative">
              <div className="absolute -inset-8 rounded-full bg-[#00B4D8]/5 blur-2xl pointer-events-none" />
              <InteractivePosDemo />
            </div>

            {/* Instruction label below */}
            <p className="text-slate-500 text-xs text-center lg:text-right" style={{ maxWidth: 280 }}>
              👆 Toca los productos · agrega modificadores · cobra
            </p>

          </div>

        </div>
      </div>
    </section>
  )
}
