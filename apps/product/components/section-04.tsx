export default function Section04() {
  const rows = [
    {
      feature: 'Español nativo',
      square: '❌ Parcial',
      toast: '❌',
      clover: '❌',
      icee: '✅ Completo',
    },
    {
      feature: 'Impresora integrada',
      square: '❌ Externo',
      toast: '✅',
      clover: '✅',
      icee: '✅ Incluida',
    },
    {
      feature: 'Costo hardware',
      square: '$400+',
      toast: '$800+',
      clover: '$600+',
      icee: '✅ Desde $150',
    },
    {
      feature: 'Modo offline',
      square: '❌',
      toast: 'Parcial',
      clover: '❌',
      icee: '✅ Completo',
    },
    {
      feature: 'Fee mensual',
      square: '2.6%+$0.10',
      toast: '$165+/mes',
      clover: '$60–90/mes',
      icee: '✅ $29–49/mes',
    },
    {
      feature: 'Soporte en español',
      square: 'Limitado',
      toast: '❌',
      clover: '❌',
      icee: '✅ 24/7',
    },
    {
      feature: 'Procesador de pago',
      square: 'Solo Square',
      toast: 'Solo Toast',
      clover: 'Solo Clover',
      icee: '✅ Libre elección',
    },
  ]

  return (
    <section className="mt-6" data-aos-id-4>
      <div className="relative max-w-7xl mx-auto">
        {/* Bg */}
        <div className="absolute inset-0 rounded-tr-[100px] mb-24 md:mb-0 border-2 border-slate-100 pointer-events-none -z-10" aria-hidden="true" />
        <div className="absolute inset-0 rounded-tr-[100px] mb-24 md:mb-0 bg-gradient-to-t from-white pointer-events-none -z-10" aria-hidden="true" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">

            {/* Section header */}
            <div className="max-w-3xl mb-12 md:mb-16" data-aos="fade-up" data-aos-anchor="[data-aos-id-4]">
              <h2 className="h2 mb-4">¿Por qué Icee POS?</h2>
              <p className="text-lg text-slate-500">
                Comparamos honestamente con las alternativas. Tú decides.
              </p>
            </div>

            {/* Comparison table */}
            <div
              className="overflow-x-auto"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-4]"
              data-aos-delay="100"
            >
              <table className="w-full min-w-[600px] text-sm">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left font-semibold text-slate-700 py-3 pr-4 w-40">Característica</th>
                    <th className="text-center font-semibold text-slate-500 py-3 px-4">Square</th>
                    <th className="text-center font-semibold text-slate-500 py-3 px-4">Toast</th>
                    <th className="text-center font-semibold text-slate-500 py-3 px-4">Clover</th>
                    <th className="text-center font-semibold text-white bg-[#0A1628] py-3 px-4 rounded-t-xl">
                      <span className="text-[#00B4D8]">Icee POS</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, index) => (
                    <tr
                      key={row.feature}
                      className={index % 2 === 0 ? 'bg-slate-50/50' : 'bg-white'}
                    >
                      <td className="font-medium text-slate-700 py-3 pr-4">{row.feature}</td>
                      <td className="text-center text-slate-500 py-3 px-4">{row.square}</td>
                      <td className="text-center text-slate-500 py-3 px-4">{row.toast}</td>
                      <td className="text-center text-slate-500 py-3 px-4">{row.clover}</td>
                      <td className="text-center font-semibold text-[#00B4D8] bg-[#0A1628]/5 py-3 px-4">
                        {row.icee}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Agnostic processor note */}
            <p className="mt-4 text-sm text-slate-400 text-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-4]" data-aos-delay="150">
              Funciona con tu procesador actual o te ayudamos a elegir el mejor para tu negocio.
            </p>

          </div>
        </div>
      </div>
    </section>
  )
}
