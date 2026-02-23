import './css/style.css'

import localFont from 'next/font/local'
import type { Metadata } from 'next'

const aspekta = localFont({
  src: [
    {
      path: '../public/fonts/Aspekta-350.woff2',
      weight: '350',
    },
    {
      path: '../public/fonts/Aspekta-400.woff2',
      weight: '400',
    },
    {
      path: '../public/fonts/Aspekta-450.woff2',
      weight: '450',
    },
    {
      path: '../public/fonts/Aspekta-500.woff2',
      weight: '500',
    },
    {
      path: '../public/fonts/Aspekta-550.woff2',
      weight: '550',
    },
    {
      path: '../public/fonts/Aspekta-700.woff2',
      weight: '700',
    },
  ],
  variable: '--font-aspekta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Icee POS | Sistema de Punto de Venta para Negocios Hispanos en USA',
  description:
    'Terminal POS todo-en-uno en español. Cobra con tarjeta, imprime recibos, funciona sin internet. Desde $29/mes. Para food trucks, taquerías, swap meets y más.',
  openGraph: {
    title: 'Icee POS | Sistema de Punto de Venta para Negocios Hispanos en USA',
    description:
      'Terminal POS todo-en-uno en español. Cobra con tarjeta, imprime recibos, funciona sin internet. Desde $29/mes.',
    url: 'https://pos.iceeelectronics.com',
    siteName: 'Icee POS',
    locale: 'es_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Icee POS | Sistema de Punto de Venta para Negocios Hispanos en USA',
    description:
      'Terminal POS todo-en-uno en español. Cobra con tarjeta, imprime recibos, funciona sin internet. Desde $29/mes.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${aspekta.variable} font-aspekta antialiased bg-white text-slate-800 font-[350]`}>
        <div className="flex flex-col min-h-screen overflow-hidden">
          {children}
        </div>
      </body>
    </html>
  )
}
