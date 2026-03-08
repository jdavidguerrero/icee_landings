export const metadata = {
  title: 'Términos de Uso — Icee POS',
  description: 'Términos y condiciones de uso de la plataforma Icee POS, producto de Icee Electronics S.A.S.',
}

export default function TermsPage() {
  return (
    <section className="relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-24 md:py-32">

        {/* Header */}
        <div className="mb-12">
          <span className="inline-block text-xs font-semibold text-[#00B4D8] uppercase tracking-widest mb-4">
            Legal
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Términos de Uso
          </h1>
          <p className="text-slate-400 text-sm">
            Última actualización: 8 de marzo de 2026
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-slate max-w-none prose-headings:text-white prose-headings:font-bold prose-p:text-slate-400 prose-p:leading-relaxed prose-li:text-slate-400 prose-strong:text-slate-200 prose-a:text-[#00B4D8]">

          <p>
            Estos Términos de Uso regulan el acceso y uso de la plataforma <strong>Icee POS</strong>,
            desarrollada y operada por <strong>Icee Electronics S.A.S.</strong> (NIT: en trámite de actualización),
            empresa legalmente constituida en Colombia con presencia en Ecuador y Estados Unidos.
          </p>

          <p>
            Al activar su cuenta o usar la plataforma Icee POS, usted acepta estos términos en su totalidad.
            Si no está de acuerdo, no utilice el servicio.
          </p>

          <h2>1. Descripción del servicio</h2>
          <p>
            Icee POS es una plataforma de punto de venta (POS) diseñada para negocios hispanos en Estados Unidos.
            Incluye software de gestión de ventas, procesamiento de pagos con tarjeta, impresión de recibos,
            reportes de ventas y modo de operación sin conexión a internet.
          </p>

          <h2>2. Requisitos para usar el servicio</h2>
          <ul>
            <li>Ser mayor de 18 años o representante legal de un negocio.</li>
            <li>Proporcionar información veraz y actualizada al registrarse.</li>
            <li>Contar con un negocio legalmente establecido en los estados donde opera.</li>
            <li>Aceptar los términos del procesador de pagos asociado.</li>
          </ul>

          <h2>3. Planes y pagos</h2>
          <p>
            Icee POS se ofrece bajo suscripción mensual. Los planes vigentes y sus precios se publican en{' '}
            <a href="https://iceepos.com/#precios">iceepos.com/#precios</a>. Los precios están expresados en
            dólares estadounidenses (USD) e incluyen:
          </p>
          <ul>
            <li>Acceso al software POS en el terminal asignado.</li>
            <li>Actualizaciones de software durante la vigencia del plan.</li>
            <li>Soporte técnico básico por WhatsApp en horario de atención.</li>
          </ul>
          <p>
            El hardware puede adquirirse por compra directa o bajo modalidad de financiamiento mensual,
            según el plan seleccionado.
          </p>

          <h2>4. Cancelación</h2>
          <p>
            No existen contratos de permanencia obligatoria. Puede cancelar su suscripción en cualquier
            momento sin penalidad, con efecto al final del período de facturación en curso. El hardware
            financiado debe devolverse o liquidarse según las condiciones del acuerdo de financiamiento firmado.
          </p>

          <h2>5. Procesamiento de pagos</h2>
          <p>
            El procesamiento de pagos con tarjeta es gestionado por redes de pago certificadas bajo el
            estándar PCI-DSS. Icee Electronics actúa como facilitador tecnológico y no retiene datos
            de tarjetas. Los fondos se depositan en la cuenta bancaria del comerciante según el calendario
            acordado (generalmente T+1 día hábil).
          </p>

          <h2>6. Uso aceptable</h2>
          <p>Queda prohibido usar Icee POS para:</p>
          <ul>
            <li>Procesar transacciones fraudulentas o de bienes/servicios ilegales.</li>
            <li>Intentar acceder sin autorización a los sistemas o datos de otros usuarios.</li>
            <li>Revender o sublicenciar el acceso a la plataforma sin autorización escrita.</li>
            <li>Realizar ingeniería inversa del software.</li>
          </ul>

          <h2>7. Propiedad intelectual</h2>
          <p>
            Todo el software, diseño, marca y contenido de Icee POS son propiedad de Icee Electronics S.A.S.
            El uso del servicio no le otorga ningún derecho de propiedad sobre el software o la marca.
          </p>

          <h2>8. Limitación de responsabilidad</h2>
          <p>
            Icee Electronics no será responsable por pérdidas de datos causadas por fallas de conectividad,
            daños al hardware por uso indebido, o interrupciones del servicio fuera de nuestro control
            (fuerza mayor, fallas de terceros). Nuestra responsabilidad máxima se limita al valor del
            último mes de suscripción pagado.
          </p>

          <h2>9. Modificaciones al servicio</h2>
          <p>
            Nos reservamos el derecho de modificar, suspender o descontinuar funcionalidades del servicio
            con previo aviso de 30 días. Los cambios en precios se notificarán con al menos 30 días de
            anticipación.
          </p>

          <h2>10. Ley aplicable</h2>
          <p>
            Estos términos se rigen por las leyes de la República de Colombia. Para usuarios en Estados
            Unidos, también aplican las regulaciones federales y estatales pertinentes al procesamiento
            de pagos electrónicos.
          </p>

          <h2>11. Contacto</h2>
          <p>Para consultas sobre estos términos:</p>
          <ul>
            <li><strong>Correo:</strong> <a href="mailto:gestioncomercial@iceeelectronics.com">gestioncomercial@iceeelectronics.com</a></li>
            <li><strong>WhatsApp:</strong> <a href="https://wa.me/573104527042">+57 310 452 7042</a></li>
          </ul>

        </div>
      </div>
    </section>
  )
}
