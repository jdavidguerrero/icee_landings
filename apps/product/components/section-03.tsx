export default function Section03() {
  return (
    <section className="mt-12 md:mt-20" data-aos-id-3>
      <div className="relative max-w-7xl mx-auto">
        {/* Bg */}
        <div
          className="absolute inset-0 rounded-tl-[100px] mb-24 md:mb-0 bg-slate-50 pointer-events-none -z-10"
          aria-hidden="true"
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pb-6 pt-12 md:pt-20">

            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16" data-aos="fade-up" data-aos-anchor="[data-aos-id-3]">
              <h2 className="h2 mb-4">Diseñado para tu tipo de negocio</h2>
              <p className="text-lg text-slate-500">
                Sin importar si tienes un food truck, un puesto en el mercado o una bodega, Icee POS se adapta a como tú trabajas.
              </p>
            </div>

            {/* Vertical cards */}
            <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-3 md:max-w-none">

              {/* Food Trucks */}
              <div
                className="relative flex flex-col bg-white rounded-2xl shadow-sm border border-slate-100 p-6"
                data-aos="fade-up"
                data-aos-anchor="[data-aos-id-3]"
                data-aos-delay="100"
              >
                <div className="text-4xl mb-4">🌮</div>
                <h3 className="text-xl font-bold mb-2">Food Trucks y Taquerías</h3>
                <p className="text-slate-500">
                  Catálogo visual con fotos, manejo de propinas, y especiales del día. Perfecto para el ritmo de un food truck.
                </p>
              </div>

              {/* Swap Meets */}
              <div
                className="relative flex flex-col bg-white rounded-2xl shadow-sm border border-slate-100 p-6"
                data-aos="fade-up"
                data-aos-anchor="[data-aos-id-3]"
                data-aos-delay="200"
              >
                <div className="text-4xl mb-4">🛒</div>
                <h3 className="text-xl font-bold mb-2">Mercados y Swap Meets</h3>
                <p className="text-slate-500">
                  Modo offline que no falla, precios ajustables, y manejo de múltiples puntos de venta.
                </p>
              </div>

              {/* Bodegas — coming soon */}
              <div
                className="relative flex flex-col bg-white rounded-2xl shadow-sm border border-slate-100 p-6 opacity-80"
                data-aos="fade-up"
                data-aos-anchor="[data-aos-id-3]"
                data-aos-delay="300"
              >
                {/* Coming soon badge */}
                <div className="absolute top-4 right-4">
                  <span className="inline-flex text-xs font-semibold text-white bg-[#00B4D8] rounded-full px-2.5 py-0.5">
                    Próximamente
                  </span>
                </div>
                <div className="text-4xl mb-4">🏪</div>
                <h3 className="text-xl font-bold mb-2">Bodegas y Tiendas</h3>
                <p className="text-slate-500">
                  Inventario completo, código de barras, y control de stock. En camino.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
