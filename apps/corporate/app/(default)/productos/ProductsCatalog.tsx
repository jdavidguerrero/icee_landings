'use client'

import { useState } from 'react'
import Link from 'next/link'

interface Product {
  name: string
  type: string
  description: string
}

interface Brand {
  id: string
  name: string
  description: string
  products: Product[]
}

const brands: Brand[] = [
  {
    id: 'sunmi',
    name: 'Sunmi',
    description: 'Dispositivos Android todo-en-uno para retail, restaurantes y kioscos de autoservicio.',
    products: [
      { name: 'V3 MIX', type: 'Dispositivo móvil', description: 'Terminal Android portátil con lector de tarjetas integrado y scanner. Ideal para vendedores móviles.' },
      { name: 'V2 S', type: 'Dispositivo móvil', description: 'POS Android compacto con impresora incorporada y pantalla táctil de 5.99".' },
      { name: 'V2 S Plus', type: 'Dispositivo móvil', description: 'Versión mejorada del V2 S con batería de mayor capacidad y conectividad 4G.' },
      { name: 'V2 PRO', type: 'Dispositivo móvil', description: 'Terminal premium con pantalla secundaria para el cliente, ideal para restaurantes y tiendas.' },
      { name: 'L2 S', type: 'Dispositivo móvil', description: 'PDA Android con scanner de código de barras para logística e inventario.' },
      { name: 'T2', type: 'Terminal de sobremesa', description: 'Sistema todo-en-uno de mostrador con impresora térmica integrada y pantalla HD de 14".' },
      { name: 'T2 Mini', type: 'Terminal de sobremesa', description: 'Versión compacta del T2, perfecta para espacios reducidos sin sacrificar funcionalidad.' },
      { name: 'T3 Pro', type: 'Terminal de sobremesa', description: 'POS premium de doble pantalla con impresora, lector de huellas y capacidades avanzadas de pago.' },
      { name: 'K2', type: 'Kiosco', description: 'Kiosco táctil de autoservicio para pedidos, consultas y pagos en restaurantes y puntos de atención.' },
      { name: 'Monedero', type: 'Periférico', description: 'Gaveta portamonedas compatible con impresoras y sistemas POS Sunmi.' },
      { name: 'Base Giratoria', type: 'Periférico', description: 'Soporte giratorio 360° para terminales Sunmi de sobremesa. Facilita la interacción con el cliente.' },
      { name: 'Scanner', type: 'Periférico', description: 'Lector de código de barras 1D/2D Bluetooth compatible con la línea Sunmi.' },
    ],
  },
  {
    id: 'nexgo',
    name: 'Nexgo',
    description: 'Terminales POS certificados para el sector financiero y soluciones de autoservicio para banca y retail.',
    products: [
      { name: 'N96', type: 'Terminal POS', description: 'Terminal Android de alto rendimiento con lector NFC, chip y banda para pagos sin contacto.' },
      { name: 'N82', type: 'Terminal POS', description: 'POS compacto con pantalla táctil e impresora incorporada. Ideal para comercios de tamaño medio.' },
      { name: 'N6', type: 'Terminal POS', description: 'Terminal básico robusto para entornos de alto volumen de transacciones.' },
      { name: 'EF60', type: 'Terminal POS', description: 'Dispositivo ECR con impresora, scanner y conectividad LTE. Solución todo-en-uno para retail.' },
      { name: 'EF910', type: 'Terminal POS', description: 'Terminal premium con doble pantalla y capacidades avanzadas de reportes en tiempo real.' },
      { name: 'UN20', type: 'Autoservicio', description: 'Kiosco de pago autónomo para facturación de servicios públicos y recaudos.' },
      { name: 'KD68', type: 'Autoservicio', description: 'Dispositivo de autoservicio para consulta de saldo, pagos y recargas en puntos de atención.' },
      { name: 'N62', type: 'Autoservicio', description: 'Terminal de autoservicio compacto para consulta y pago de facturas.' },
      { name: 'AF910', type: 'Autoservicio', description: 'Kiosco avanzado con biometría facial, impresora y dispensador de efectivo.' },
      { name: 'Base Cargadora N86', type: 'Periférico', description: 'Base de carga para terminales Nexgo N86. Mantiene el dispositivo cargado y listo.' },
    ],
  },
  {
    id: 'urovo',
    name: 'Urovo',
    description: 'PDAs y terminales industriales para logística, inventario y operaciones de campo.',
    products: [
      { name: 'I900S', type: 'PDA Industrial', description: 'PDA rugosa con scanner 2D de alto rendimiento para logística y almacén. IP67.' },
      { name: 'I9100', type: 'PDA Industrial', description: 'Terminal robusto con Android 10, RFID y scanner para gestión de activos.' },
      { name: 'DT50 5G', type: 'Terminal móvil', description: 'PDA de gama alta con conectividad 5G para operaciones de campo de alta velocidad.' },
      { name: 'DT50 H', type: 'Terminal móvil', description: 'Versión mejorada del DT50 con mayor capacidad de batería y pantalla Full HD.' },
      { name: 'U2', type: 'Terminal POS', description: 'Terminal de pago Android compacto con lector NFC, MSR y EMV. Ideal para datáfonos portátiles.' },
      { name: 'Base Cargadora U2', type: 'Periférico', description: 'Base de carga y comunicación para el Urovo U2. Permite carga y sincronización simultánea.' },
    ],
  },
  {
    id: 'spectra',
    name: 'Spectra',
    description: 'Soluciones POS especializadas para el sector financiero con certificación EMV/PCI-DSS.',
    products: [
      { name: 'Apollo', type: 'Terminal POS', description: 'Terminal Android todo-en-uno con pantalla 15", impresora y doble lector para comercios exigentes.' },
      { name: 'tap-POS', type: 'Terminal POS', description: 'Solución Tap to Pay compacta que convierte cualquier Android en terminal de cobro NFC.' },
      { name: 'S1', type: 'Datáfono', description: 'Datáfono compacto con conectividad LTE y Wi-Fi. Acepta tarjeta, NFC y chip.' },
      { name: 'S1 Plus', type: 'Datáfono', description: 'Versión mejorada del S1 con impresora integrada y batería de larga duración.' },
      { name: 'S1 iReader', type: 'Datáfono', description: 'Lector de tarjetas inteligente para conectar al smartphone. Solución de pagos mPOS.' },
      { name: 'BP80 Bluetooth', type: 'Periférico', description: 'Impresora portátil Bluetooth 80mm compatible con la línea Spectra y otros sistemas POS.' },
      { name: 'Base S1', type: 'Periférico', description: 'Base de carga y comunicación para los terminales Spectra S1 y S1 Plus.' },
    ],
  },
  {
    id: 'ciontek',
    name: 'Ciontek',
    description: 'Terminales financieros robustos con certificaciones internacionales para pagos seguros.',
    products: [
      { name: 'CS20', type: 'Terminal POS', description: 'Terminal Android con pantalla táctil 5", NFC, EMV y MSR. Diseño slim para comercios.' },
      { name: 'CS30', type: 'Terminal POS', description: 'POS todo-en-uno con impresora integrada, pantalla 5.5" y conectividad 4G.' },
      { name: 'CS30 Pro', type: 'Terminal POS', description: 'Versión premium del CS30 con pantalla secundaria para cliente y batería de 5000 mAh.' },
      { name: 'CS50', type: 'Terminal POS', description: 'Terminal de sobremesa de alto rendimiento con doble pantalla y soporte multi-periférico.' },
    ],
  },
]

export default function ProductsCatalog() {
  const [activeBrand, setActiveBrand] = useState(brands[0].id)
  const brand = brands.find((b) => b.id === activeBrand) ?? brands[0]

  return (
    <div className="bg-[#060F1E] min-h-screen">

      {/* ── Hero ── */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-[#00B4D8]/5 blur-3xl pointer-events-none" />
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(0,180,216,0.06) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <Link href="/#lineas-negocio" className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-[#00B4D8] mb-6 transition-colors">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Volver al inicio
          </Link>
          <span className="inline-block text-xs font-semibold text-[#00B4D8] uppercase tracking-widest mb-4 bg-[#00B4D8]/10 border border-[#00B4D8]/30 rounded-full px-3 py-1">
            Distribución
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight font-playfair-display">
            Catálogo de Productos
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Hardware financiero y dispositivos electrónicos de las marcas líderes mundiales.
            Distribución al por mayor y al detal para el sector financiero y empresarial.
          </p>
        </div>
      </section>

      {/* ── Brand tabs ── */}
      <section className="sticky top-0 z-20 bg-[#060F1E]/95 backdrop-blur-sm border-b border-slate-800/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-1 overflow-x-auto py-3 scrollbar-none">
            {brands.map((b) => (
              <button
                key={b.id}
                onClick={() => setActiveBrand(b.id)}
                className={`shrink-0 text-sm font-medium px-4 py-2 rounded-lg transition-all duration-200 ${
                  b.id === activeBrand
                    ? 'bg-[#00B4D8] text-white'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                {b.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Brand detail ── */}
      <section className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {/* Brand header */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 font-playfair-display">{brand.name}</h2>
            <p className="text-slate-400">{brand.description}</p>
          </div>

          {/* Products grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {brand.products.map(({ name, type, description }) => (
              <div
                key={name}
                className="bg-[#0A1628] border border-slate-800/70 rounded-xl p-5 hover:border-[#00B4D8]/30 transition-colors duration-200"
              >
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-2">{type}</span>
                <h3 className="text-white font-semibold text-base mb-2">{name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
                <a
                  href={`https://wa.me/573104527042?text=Hola%2C%20me%20interesa%20el%20${encodeURIComponent(brand.name + ' ' + name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#00B4D8] hover:text-[#48CAE4] transition-colors"
                >
                  Cotizar por WhatsApp →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 md:py-20 border-t border-slate-800/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="bg-gradient-to-br from-[#00B4D8]/10 to-[#48CAE4]/5 border border-[#00B4D8]/25 rounded-3xl p-10">
            <h2 className="text-2xl font-bold text-white mb-3 font-playfair-display">
              ¿No ves lo que buscas?
            </h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              Trabajamos con más de 10 marcas líderes. Contáctanos y te ayudamos a encontrar
              el dispositivo que necesita tu operación.
            </p>
            <a
              href="https://wa.me/573104527042?text=Hola%2C%20busco%20un%20dispositivo%20específico%20y%20necesito%20ayuda"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#00B4D8] hover:bg-[#0096B7] text-white font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Hablar con un experto →
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
