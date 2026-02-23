import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="relative">
      {/* Bg */}
      <div className="absolute inset-0 bg-[#0A1628] -z-10" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Blocks */}
        <div className="grid sm:grid-cols-12 lg:grid-cols-10 gap-8 py-8 border-t border-slate-700">

          {/* 1st block — logo + tagline */}
          <div className="sm:col-span-12 lg:col-span-4 lg:max-w-xs">
            <Link className="block mb-3" href="/" aria-label="Icee POS">
              <Image
                src="/images/logos/icee-white.png"
                width={100}
                height={34}
                style={{ height: 'auto' }}
                alt="Icee POS logo"
              />
            </Link>
            <p className="text-sm text-slate-400">
              La plataforma POS para negocios hispanos en EE.UU.
            </p>
          </div>

          {/* 2nd block — navigation */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-sm text-slate-100 font-bold mb-3">Navegación</h6>
            <ul className="text-sm font-[450] space-y-2">
              <li>
                <a className="text-slate-400 hover:text-[#00B4D8] transition duration-150 ease-in-out" href="#">
                  Inicio
                </a>
              </li>
              <li>
                <a className="text-slate-400 hover:text-[#00B4D8] transition duration-150 ease-in-out" href="#precios">
                  Precios
                </a>
              </li>
              <li>
                <a className="text-slate-400 hover:text-[#00B4D8] transition duration-150 ease-in-out" href="#como-funciona">
                  Cómo funciona
                </a>
              </li>
              <li>
                <a className="text-slate-400 hover:text-[#00B4D8] transition duration-150 ease-in-out" href="#contacto">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* 3rd block — company */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-sm text-slate-100 font-bold mb-3">Empresa</h6>
            <ul className="text-sm font-[450] space-y-2">
              <li>
                <a
                  className="text-slate-400 hover:text-[#00B4D8] transition duration-150 ease-in-out"
                  href="https://iceeelectronics.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Icee Electronics
                </a>
              </li>
              <li>
                <a
                  className="text-slate-400 hover:text-[#00B4D8] transition duration-150 ease-in-out"
                  href="https://wa.me/573104527042?text=Hola%2C%20quiero%20una%20demo%20de%20Icee%20POS"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom area */}
        <div className="pb-4 md:pb-8">
          <div className="text-xs text-slate-500">
            © 2026 Icee POS · Producto de{' '}
            <a
              className="font-medium underline hover:text-[#00B4D8] transition duration-150 ease-in-out"
              href="https://iceeelectronics.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Icee Electronics S.A.S
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
