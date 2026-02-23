import Link from 'next/link'
import Image from 'next/image'
import MobileMenu from './mobile-menu'

export default function Header({ mode = 'dark' }: {
  mode?: string
}) {
  return (
    <header className={`absolute w-full z-30 ${mode !== 'light' && 'dark'}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="shrink-0 mr-4">
            <Link href="/" aria-label="Icee Electronics">
              <Image
                src="/images/logos/icee-white.png"
                alt="Icee Electronics"
                width={160}
                height={52}
                className="object-contain h-[48px] w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">

            {/* Desktop menu links */}
            <ul className="flex grow justify-start flex-wrap items-center">
              <li>
                <Link
                  href="#lineas-negocio"
                  className="font-medium text-slate-800 hover:text-[#00B4D8] dark:text-slate-400 dark:hover:text-[#00B4D8] px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  Soluciones
                </Link>
              </li>
              <li>
                <Link
                  href="#aliados"
                  className="font-medium text-slate-800 hover:text-[#00B4D8] dark:text-slate-400 dark:hover:text-[#00B4D8] px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  Aliados
                </Link>
              </li>
              <li>
                <Link
                  href="https://pos.iceeelectronics.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-slate-800 hover:text-[#00B4D8] dark:text-slate-400 dark:hover:text-[#00B4D8] px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  Icee POS
                </Link>
              </li>
              <li>
                <Link
                  href="https://wa.me/573104527042?text=Hola%2C%20me%20interesa%20Icee%20Electronics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-slate-800 hover:text-[#00B4D8] dark:text-slate-400 dark:hover:text-[#00B4D8] px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  Contacto
                </Link>
              </li>
            </ul>

            {/* Desktop CTA */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="https://wa.me/573104527042?text=Hola%2C%20me%20interesa%20Icee%20Electronics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#00B4D8] dark:text-slate-300 dark:hover:text-white px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out group"
                >
                  WhatsApp{' '}
                  <span className="tracking-normal text-[#00B4D8] group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                    -&gt;
                  </span>
                </Link>
              </li>
            </ul>

          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
