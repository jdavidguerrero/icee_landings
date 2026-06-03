export const metadata = {
  title: 'Política de Privacidad — Icee Electronics',
  description: 'Política de privacidad y tratamiento de datos personales de Icee Electronics S.A.S.',
}

export default function PrivacidadPage() {
  return (
    <div className="bg-[#060F1E] min-h-screen">
      <section className="relative pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 font-playfair-display">
            Política de Privacidad
          </h1>
          <p className="text-slate-400 text-sm mb-10">Última actualización: junio 2026</p>

          <div className="prose prose-invert prose-slate max-w-none space-y-8 text-slate-300">

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">1. Responsable del Tratamiento</h2>
              <p>Icee Electronics S.A.S., identificada con NIT en Colombia, con presencia en Colombia, Ecuador y Estados Unidos, es responsable del tratamiento de los datos personales recopilados a través de este sitio web.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">2. Datos que Recopilamos</h2>
              <p>Recopilamos datos de contacto (nombre, correo electrónico, teléfono) cuando el usuario voluntariamente los proporciona a través de formularios de contacto o solicitud de información.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">3. Finalidad del Tratamiento</h2>
              <p>Los datos recopilados son utilizados exclusivamente para responder solicitudes de información, gestionar relaciones comerciales y enviar comunicaciones relacionadas con nuestros productos y servicios.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">4. Derechos del Titular</h2>
              <p>De acuerdo con la Ley 1581 de 2012 (Colombia) y normativas aplicables, el titular de los datos tiene derecho a conocer, actualizar, rectificar y suprimir su información personal. Para ejercer estos derechos, puede escribirnos a <a href="mailto:gestioncomercial@iceeelectronics.com" className="text-[#00B4D8] hover:text-[#48CAE4]">gestioncomercial@iceeelectronics.com</a>.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">5. Seguridad</h2>
              <p>Icee Electronics S.A.S. cuenta con certificación PCI-DSS Nivel 2 y aplica medidas técnicas y administrativas para proteger los datos personales contra acceso no autorizado, pérdida o divulgación.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">6. Contacto</h2>
              <p>Para cualquier consulta relacionada con esta política, contáctenos a través de <a href="mailto:gestioncomercial@iceeelectronics.com" className="text-[#00B4D8] hover:text-[#48CAE4]">gestioncomercial@iceeelectronics.com</a> o por WhatsApp al +57 310 452 7042.</p>
            </section>

          </div>
        </div>
      </section>
    </div>
  )
}
