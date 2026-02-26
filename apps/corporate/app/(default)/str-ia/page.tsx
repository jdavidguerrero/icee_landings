export const metadata = {
  title: 'Soluciones STR-IA — Icee Electronics',
  description: 'Renting y venta de robots con inteligencia artificial para la transformación empresarial — IceeBot T10, W3, S100, C30, C20.',
}

import Link from 'next/link'

const robots = [
  {
    id: 'T10',
    name: 'IceeBot T10',
    role: 'Robot de Servicio en Mesa',
    description: 'Robot autónomo de entrega para restaurantes, hoteles y eventos. Navega de forma independiente, entrega pedidos y regresa a su base. Hasta 60 kg de carga, 4 bandejas.',
    features: ['Navegación autónoma LIDAR', 'Hasta 60 kg de carga', '4 bandejas de servicio', 'Pantalla interactiva 10"', 'Batería 12 horas', 'Voz y LED interactivos'],
    modality: ['Renting mensual', 'Venta directa'],
    badge: 'Más vendido',
    badgeColor: 'text-[#00B4D8] bg-[#00B4D8]/10 border-[#00B4D8]/30',
  },
  {
    id: 'W3',
    name: 'IceeBot W3',
    role: 'Robot de Recepción',
    description: 'Robot recepcionista inteligente para hoteles, bancos y centros comerciales. Saluda, guía y asiste a visitantes con IA conversacional y pantalla de autoservicio.',
    features: ['IA conversacional', 'Reconocimiento facial', 'Pantalla táctil 15"', 'Integración CRM', 'Voz natural multi-idioma', 'Navegación autónoma'],
    modality: ['Renting mensual', 'Venta directa'],
    badge: 'Hospitalidad',
    badgeColor: 'text-slate-400 bg-slate-800/60 border-slate-700',
  },
  {
    id: 'S100',
    name: 'IceeBot S100',
    role: 'Robot de Seguridad y Patrullaje',
    description: 'Robot de vigilancia autónoma con cámaras 360°, detección de intrusos, alertas en tiempo real y patrullaje programado para centros comerciales, bodegas y edificios.',
    features: ['Cámaras 360° HD', 'Detección de intrusos IA', 'Patrullaje autónomo', 'Alertas en tiempo real', 'LIDAR de precisión', 'Resistente IP65'],
    modality: ['Renting mensual', 'Venta directa'],
    badge: 'Seguridad',
    badgeColor: 'text-slate-400 bg-slate-800/60 border-slate-700',
  },
  {
    id: 'C30',
    name: 'IceeBot C30',
    role: 'Robot de Limpieza — Superficies Grandes',
    description: 'Robot limpiador autónomo para pisos de alto tráfico. Mapea y limpia superficies de hasta 3.000 m² por ciclo. Ideal para aeropuertos, supermercados y hospitales.',
    features: ['Limpieza hasta 3.000 m²', 'Mapeado 3D autónomo', 'Detección de obstáculos', 'Múltiples modos de limpieza', 'Vaciado semiautomático', 'Reporte de cobertura'],
    modality: ['Renting mensual', 'Venta directa'],
    badge: 'Industrial',
    badgeColor: 'text-slate-400 bg-slate-800/60 border-slate-700',
  },
  {
    id: 'C20',
    name: 'IceeBot C20',
    role: 'Robot de Limpieza — Espacios Medianos',
    description: 'Solución compacta de limpieza autónoma para restaurantes, oficinas y tiendas. Fácil de operar, silencioso y eficiente con batería de larga duración.',
    features: ['Limpieza hasta 1.000 m²', 'Ultra silencioso <55 dB', 'Batería 8 horas', 'App de control remoto', 'Apto para alfombras y pisos duros', 'Filtro HEPA'],
    modality: ['Renting mensual', 'Venta directa'],
    badge: 'Compacto',
    badgeColor: 'text-slate-400 bg-slate-800/60 border-slate-700',
  },
]

const useCases = [
  { icon: '🍽️', label: 'Restaurantes y Food Courts' },
  { icon: '🏨', label: 'Hoteles y Hospitalidad' },
  { icon: '🏪', label: 'Supermercados' },
  { icon: '🏦', label: 'Bancos y Oficinas' },
  { icon: '✈️', label: 'Aeropuertos' },
  { icon: '🏥', label: 'Hospitales y Clínicas' },
  { icon: '🛒', label: 'Centros Comerciales' },
  { icon: '🏭', label: 'Bodegas e Industria' },
]

export default function StrIaPage() {
  return (
    <div className="bg-[#060F1E] min-h-screen">

      {/* ── Hero ── */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
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
            STR-IA · Soluciones de Transformación Robótica
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight font-playfair-display">
            Robots con Inteligencia<br className="hidden md:block" /> Artificial para tu Negocio
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed mb-8">
            Automatiza tareas repetitivas, mejora la experiencia de tus clientes y reduce costos operativos
            con nuestra línea IceeBot. Disponibles en renting mensual o venta directa.
          </p>
          <a
            href="https://wa.me/573104527042?text=Hola%2C%20me%20interesan%20las%20soluciones%20STR-IA%20de%20IceeBot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#00B4D8] hover:bg-[#0096B7] text-white font-semibold px-6 py-3 rounded-xl transition-colors shadow-lg shadow-[#00B4D8]/20"
          >
            Solicitar demostración
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>

      {/* ── Robots catalog ── */}
      <section className="py-16 md:py-20 border-t border-slate-800/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 text-center font-playfair-display">
            Línea IceeBot
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-xl mx-auto">
            5 soluciones robóticas para diferentes necesidades. Todos con soporte técnico especializado y servicio en sitio.
          </p>

          <div className="space-y-6">
            {robots.map(({ id, name, role, description, features, modality, badge, badgeColor }) => (
              <div
                key={id}
                className="bg-[#0A1628] border border-slate-800/70 rounded-2xl p-6 md:p-8 hover:border-[#00B4D8]/30 transition-colors duration-200"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Left */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl font-bold font-playfair-display text-[#00B4D8]">{id}</span>
                      <span className={`text-[10px] font-bold uppercase tracking-widest border rounded-full px-2 py-0.5 ${badgeColor}`}>
                        {badge}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
                    <p className="text-sm text-slate-500 mb-3">{role}</p>
                    <p className="text-slate-400 text-sm leading-relaxed">{description}</p>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {modality.map((m) => (
                        <span key={m} className="text-xs text-[#00B4D8] bg-[#00B4D8]/10 border border-[#00B4D8]/25 rounded-full px-3 py-1">
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right — features */}
                  <div className="md:w-64 shrink-0">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">Características</p>
                    <ul className="space-y-2">
                      {features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
                          <svg className="w-4 h-4 text-[#00B4D8] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-800/60 flex flex-wrap gap-3">
                  <a
                    href={`https://wa.me/573104527042?text=Hola%2C%20me%20interesa%20el%20IceeBot%20${id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#00B4D8]/15 hover:bg-[#00B4D8]/25 border border-[#00B4D8]/30 text-[#00B4D8] font-semibold text-sm px-4 py-2 rounded-lg transition-colors"
                  >
                    Cotizar {name}
                  </a>
                  <a
                    href={`https://wa.me/573104527042?text=Hola%2C%20quiero%20ver%20una%20demo%20del%20IceeBot%20${id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-200 text-sm px-4 py-2 rounded-lg transition-colors"
                  >
                    Solicitar demo en sitio →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Use cases ── */}
      <section className="py-14 border-t border-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-xl font-bold text-white mb-8 font-playfair-display">¿Para qué tipo de negocio?</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {useCases.map(({ icon, label }) => (
              <div key={label} className="bg-[#0A1628] border border-slate-800/60 rounded-xl p-4 text-center">
                <div className="text-2xl mb-2">{icon}</div>
                <p className="text-xs text-slate-400 leading-tight">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Renting callout ── */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="bg-gradient-to-br from-[#00B4D8]/10 to-[#48CAE4]/5 border border-[#00B4D8]/25 rounded-3xl p-10">
            <h2 className="text-2xl font-bold text-white mb-3 font-playfair-display">
              Modelo de Renting — Sin inversión inicial
            </h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              Incorpora robots a tu operación sin desembolsar el costo total del equipo. Con el modelo de renting mensual obtienes
              el robot, mantenimiento, soporte técnico y actualizaciones de software incluidas.
            </p>
            <a
              href="https://wa.me/573104527042?text=Quiero%20conocer%20los%20planes%20de%20renting%20de%20IceeBot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#00B4D8] hover:bg-[#0096B7] text-white font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Ver planes de renting →
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
