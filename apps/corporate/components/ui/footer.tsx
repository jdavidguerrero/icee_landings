import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-[#0A1628]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-slate-700">

          {/* 1st block — Brand */}
          <div className="sm:col-span-12 lg:col-span-4 lg:max-w-xs">
            <div className="mb-4">
              <Link href="/" aria-label="Icee Electronics">
                <Image
                  src="/images/logos/icee-white.png"
                  alt="Icee Electronics"
                  width={120}
                  height={40}
                  className="object-contain h-[40px] w-auto"
                />
              </Link>
            </div>
            <div className="text-slate-400 text-sm leading-relaxed mb-4">
              Soluciones innovadoras en tecnología de pagos y electrónica.
            </div>
            {/* WhatsApp link */}
            <a
              href="https://wa.me/573104527042?text=Hola%2C%20me%20interesa%20Icee%20Electronics"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#00B4D8] hover:text-[#48CAE4] transition duration-150 ease-in-out text-sm font-medium"
              aria-label="WhatsApp"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              +57 310 452 7042
            </a>
            {/* Contact email */}
            <a
              href="mailto:ventas@iceeelectronics.com"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-[#00B4D8] transition duration-150 ease-in-out text-sm mt-2"
            >
              <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              ventas@iceeelectronics.com
            </a>
          </div>

          {/* 2nd block — Empresa */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-sm text-slate-200 font-semibold mb-3">Empresa</h6>
            <ul className="text-sm font-medium space-y-2">
              <li>
                <a href="#lineas-negocio" className="text-slate-400 hover:text-[#00B4D8] transition duration-150 ease-in-out">
                  Líneas de Negocio
                </a>
              </li>
              <li>
                <a href="#aliados" className="text-slate-400 hover:text-[#00B4D8] transition duration-150 ease-in-out">
                  Aliados
                </a>
              </li>
              <li>
                <a href="#aliados" className="text-slate-400 hover:text-[#00B4D8] transition duration-150 ease-in-out">
                  Portal de Aliados
                </a>
              </li>
              <li>
                <a
                  href="mailto:ventas@iceeelectronics.com"
                  className="text-slate-400 hover:text-[#00B4D8] transition duration-150 ease-in-out"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* 3rd block — Soluciones */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-sm text-slate-200 font-semibold mb-3">Soluciones</h6>
            <ul className="text-sm font-medium space-y-2">
              <li>
                <a href="#lineas-negocio" className="text-slate-400 hover:text-[#00B4D8] transition duration-150 ease-in-out">
                  Comercialización
                </a>
              </li>
              <li>
                <a href="#lineas-negocio" className="text-slate-400 hover:text-[#00B4D8] transition duration-150 ease-in-out">
                  Mantenimiento
                </a>
              </li>
              <li>
                <a href="#lineas-negocio" className="text-slate-400 hover:text-[#00B4D8] transition duration-150 ease-in-out">
                  Software
                </a>
              </li>
              <li>
                <a href="#lineas-negocio" className="text-slate-400 hover:text-[#00B4D8] transition duration-150 ease-in-out">
                  STR-IA
                </a>
              </li>
            </ul>
          </div>

          {/* 4th block — Icee POS */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-sm text-slate-200 font-semibold mb-3">Icee POS</h6>
            <ul className="text-sm font-medium space-y-2">
              <li>
                <a
                  href="https://pos.iceeelectronics.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-[#00B4D8] transition duration-150 ease-in-out"
                >
                  Ver plataforma
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/573104527042?text=Hola%2C%20me%20interesa%20Icee%20Electronics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-[#00B4D8] transition duration-150 ease-in-out"
                >
                  Solicitar demo
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-6 md:py-8 border-t border-slate-700">

          {/* Social links */}
          <ul className="flex space-x-6 mb-4 md:order-1 md:ml-4 md:mb-0">
            <li>
              <a
                className="text-[#00B4D8] hover:text-[#48CAE4] transition duration-150 ease-in-out"
                href="https://wa.me/573104527042?text=Hola%2C%20me%20interesa%20Icee%20Electronics"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
            </li>
          </ul>

          {/* Copyright note + legal links */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-500 mr-4">
            <span>© 2026 Icee Electronics S.A.S · Colombia · Ecuador · USA</span>
            <span className="hidden sm:inline text-slate-700" aria-hidden="true">·</span>
            <Link href="/privacidad" className="hover:text-slate-300 transition duration-150 ease-in-out">
              Política de Privacidad
            </Link>
            <span className="hidden sm:inline text-slate-700" aria-hidden="true">·</span>
            <a
              href="https://wa.me/573104527042?text=Hola%2C%20me%20interesa%20Icee%20Electronics"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition duration-150 ease-in-out"
            >
              PCI-DSS Nivel 1
            </a>
          </div>

        </div>

      </div>
    </footer>
  )
}
