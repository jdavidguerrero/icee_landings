export default function Section07() {
  const checkIcon = (
    <svg className="w-3 h-3 fill-current text-[#00B4D8] mr-3 mt-1.5 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
    </svg>
  )

  const features = [
    { label: 'Acepta tarjeta y Apple Pay / Google Pay', sub: 'Tap to Pay — tu cliente solo acerca la tarjeta' },
    { label: '100% en español', sub: 'Toda la app, reportes y soporte en tu idioma' },
    { label: 'Catálogo ilimitado de productos', sub: 'Agrega todo tu menú con precios y modificadores' },
    { label: 'Propinas configurables', sub: 'Tus clientes pueden dejar propina desde la pantalla' },
    { label: 'Múltiples empleados', sub: 'Cada cajero con su propio acceso y reporte' },
    { label: 'Control de inventario', sub: 'Sabe cuánto tienes y cuánto vendes en tiempo real' },
    { label: 'Modo offline para food trucks', sub: 'Sigue vendiendo aunque no tengas WiFi' },
    { label: 'Reportes de ventas diarios', sub: 'Sabe exactamente cuánto vendiste hoy' },
    { label: 'Soporte en español por WhatsApp', sub: 'Te respondemos el mismo día, en tu idioma' },
  ]

  return (
    <section id="precios" className="relative">
      <div className="absolute inset-0 bg-[#060F1E] -z-10" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="text-center max-w-3xl mx-auto mb-10" data-aos="fade-up">
            <div className="inline-flex items-center text-xs font-semibold text-[#00B4D8] bg-[#00B4D8]/10 border border-[#00B4D8]/20 rounded-full px-3 py-1 mb-4">
              Precio de lanzamiento
            </div>
            <h2 className="h2 text-white mb-4">Todo lo que necesitas para cobrar con tarjeta</h2>
            <p className="text-lg text-slate-400">Sin sorpresas. Sin letras pequeñas. En español.</p>
          </div>

          {/* Single plan card */}
          <div className="max-w-2xl mx-auto mb-8" data-aos="fade-up" data-aos-delay="100">
            <div className="relative bg-[#0A1628] border border-slate-700 rounded-2xl p-8">

              {/* Plan name + price */}
              <div className="text-center mb-8">
                <div className="text-slate-400 text-sm font-medium mb-3">Plan único — todo incluido</div>
                <div className="flex items-baseline justify-center gap-1 mb-1">
                  <span className="text-5xl font-bold text-white">$49</span>
                  <span className="text-xl text-slate-400">/mes</span>
                </div>
                <p className="text-slate-500 text-sm">+ 2.70% + 20¢ por transacción con tarjeta</p>
              </div>

              {/* CTA */}
              <a
                className="btn w-full inline-flex justify-center items-center text-[#0A1628] bg-[#00B4D8] hover:bg-[#48CAE4] font-bold shadow-xs mb-8"
                href="#contacto"
              >
                Solicitar demo gratuita
              </a>

              {/* Features */}
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                {features.map(({ label, sub }) => (
                  <li key={label} className="flex items-start">
                    {checkIcon}
                    <div>
                      <span className="text-slate-200 text-sm font-medium">{label}</span>
                      <p className="text-slate-500 text-xs mt-0.5">{sub}</p>
                    </div>
                  </li>
                ))}
              </ul>

            </div>
          </div>

          {/* Terminal options */}
          <div className="max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="150">
            <h3 className="text-white text-center font-semibold text-lg mb-6">Terminal incluido — tú eliges cómo</h3>
            <div className="grid sm:grid-cols-2 gap-5">

              {/* Loan option */}
              <div className="bg-[#0A1628] border border-slate-700 rounded-xl p-6">
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-3xl font-bold text-white">$0</span>
                  <span className="text-slate-400 text-sm">inicial</span>
                </div>
                <p className="text-slate-400 text-sm">Terminal en préstamo con plan de 12 meses</p>
              </div>

              {/* Buy option */}
              <div className="relative bg-[#0A1628] border border-[#00B4D8] rounded-xl p-6">
                <div className="absolute top-0 right-0 -translate-y-1/2 mr-4 inline-flex text-xs text-white bg-[#00B4D8] font-semibold rounded-full px-3 py-0.5">
                  Popular
                </div>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-3xl font-bold text-white">$299</span>
                  <span className="text-slate-400 text-sm">única vez</span>
                </div>
                <p className="text-slate-400 text-sm">Cómpralo y es tuyo — sin contrato, cancela cuando quieras</p>
              </div>

            </div>
          </div>

          {/* Payment methods */}
          <div className="mt-10 flex flex-wrap justify-center items-center gap-3" data-aos="fade-up" data-aos-delay="200">
            <span className="text-xs text-slate-500 mr-1">Acepta:</span>
            {[
              { label: 'Visa', bg: '#1A1F71', text: 'white' },
              { label: 'Mastercard', bg: '#EB001B', text: 'white' },
              { label: 'Amex', bg: '#2E77BC', text: 'white' },
              { label: 'Apple Pay', bg: '#000000', text: 'white' },
              { label: 'Google Pay', bg: '#FFFFFF', text: '#3C4043', border: '#DADCE0' },
              { label: 'EBT (próx.)', bg: '#1a2744', text: '#93C5FD', border: '#93C5FD33' },
            ].map(({ label, bg, text, border }) => (
              <span
                key={label}
                className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-semibold"
                style={{ background: bg, color: text, border: border ? `1px solid ${border}` : 'none' }}
              >
                {label}
              </span>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
