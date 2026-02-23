import './css/style.css'

import { Inter, Playfair_Display } from 'next/font/google'
import type { Metadata } from 'next'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Icee Electronics | Soluciones en Tecnología de Pagos y Electrónica',
  description: 'Empresa líder en comercialización, mantenimiento y desarrollo de soluciones tecnológicas de pago. +10 años de experiencia. PCI-DSS certificado. Colombia, Ecuador, USA.',
  openGraph: {
    title: 'Icee Electronics | Soluciones en Tecnología de Pagos y Electrónica',
    description: 'Empresa líder en comercialización, mantenimiento y desarrollo de soluciones tecnológicas de pago. +10 años de experiencia. PCI-DSS certificado. Colombia, Ecuador, USA.',
    url: 'https://iceeelectronics.com',
    siteName: 'Icee Electronics',
    locale: 'es_CO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Icee Electronics | Soluciones en Tecnología de Pagos y Electrónica',
    description: 'Empresa líder en comercialización, mantenimiento y desarrollo de soluciones tecnológicas de pago. +10 años de experiencia. PCI-DSS certificado.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${playfair.variable} font-inter antialiased bg-white text-slate-800 tracking-tight`}>
        {children}
      </body>
    </html>
  )
}
