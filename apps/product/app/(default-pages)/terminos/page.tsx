import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Términos de Uso | Icee POS',
  description: 'Términos y condiciones de uso del servicio Icee POS.',
}

export default function TerminosPage() {
  return (
    <section className="relative bg-[#060F1E] min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-20">
        <div className="prose prose-invert prose-slate max-w-none">
          <h1>Términos de Uso</h1>
          <p className="text-slate-400 text-sm">Última actualización: marzo 2026</p>

          <h2>1. Aceptación de los términos</h2>
          <p>
            Al acceder o utilizar la plataforma Icee POS (el "Servicio"), usted acepta quedar vinculado por
            estos Términos de Uso. Si no está de acuerdo con alguna parte de los términos, no podrá acceder
            al Servicio. El Servicio es proporcionado por Icee Electronics S.A.S.
          </p>

          <h2>2. Descripción del servicio</h2>
          <p>
            Icee POS es una plataforma de punto de venta (POS) diseñada para negocios hispanos en los
            Estados Unidos. El Servicio incluye hardware terminal, software POS en español, procesamiento
            de pagos con tarjeta, modo offline, e impresión de recibos.
          </p>

          <h2>3. Requisitos para usar el servicio</h2>
          <ul>
            <li>Tener al menos 18 años de edad.</li>
            <li>Operar un negocio legalmente constituido en los Estados Unidos.</li>
            <li>Proporcionar información veraz y actualizada al registrarse.</li>
            <li>Mantener la seguridad de sus credenciales de acceso.</li>
          </ul>

          <h2>4. Planes y pagos</h2>
          <p>
            El Servicio se ofrece bajo planes de suscripción mensual. Los precios están expresados en
            dólares estadounidenses (USD) e incluyen el acceso al software y soporte técnico básico.
            El hardware puede adquirirse por separado o bajo esquema de financiamiento.
          </p>
          <ul>
            <li><strong>Plan único:</strong> $49/mes + 2.70% + 20¢ por transacción — acceso completo a todas las funciones, catálogo ilimitado, modo offline, reportes y soporte en español.</li>
          </ul>
          <p>
            Los cargos se realizan de forma mensual a la tarjeta o cuenta bancaria registrada. Los precios
            pueden cambiar con 30 días de notificación previa.
          </p>

          <h2>5. Cancelación</h2>
          <p>
            Puede cancelar su suscripción en cualquier momento sin penalidad. La cancelación será efectiva
            al final del período de facturación actual. No se realizan reembolsos por períodos parciales.
            En caso de financiamiento de hardware, aplican los términos del contrato de financiamiento.
          </p>

          <h2>6. Procesamiento de pagos</h2>
          <p>
            El procesamiento de pagos con tarjeta está sujeto a los términos del procesador de pagos
            asociado. Icee POS no almacena datos de tarjetas de crédito. Todos los datos de pago se
            procesan de forma cifrada conforme a los estándares PCI-DSS. Las transacciones se depositan
            en su cuenta bancaria en un plazo de T+1 días hábiles.
          </p>

          <h2>7. Uso aceptable</h2>
          <p>Usted se compromete a no utilizar el Servicio para:</p>
          <ul>
            <li>Procesar transacciones fraudulentas o ilegales.</li>
            <li>Vender productos o servicios prohibidos por la ley.</li>
            <li>Interferir con el funcionamiento del sistema o de otros usuarios.</li>
            <li>Intentar acceder sin autorización a los sistemas de Icee POS.</li>
          </ul>

          <h2>8. Propiedad intelectual</h2>
          <p>
            Todo el software, diseño, marcas y contenido del Servicio son propiedad exclusiva de
            Icee Electronics S.A.S. o sus licenciantes. El uso del Servicio no le otorga ningún
            derecho de propiedad sobre dichos elementos.
          </p>

          <h2>9. Limitación de responsabilidad</h2>
          <p>
            En la máxima medida permitida por la ley, Icee Electronics S.A.S. no será responsable
            por daños indirectos, incidentales, especiales o consecuentes derivados del uso o la
            imposibilidad de usar el Servicio. La responsabilidad total de la empresa no excederá
            el monto pagado por el usuario en los últimos tres meses.
          </p>

          <h2>10. Modificaciones</h2>
          <p>
            Nos reservamos el derecho de modificar estos Términos en cualquier momento. Los cambios
            significativos se notificarán con al menos 15 días de anticipación. El uso continuado
            del Servicio después de dichos cambios constituye aceptación de los nuevos Términos.
          </p>

          <h2>11. Ley aplicable</h2>
          <p>
            Estos Términos se rigen por las leyes del Estado de Florida, Estados Unidos, sin perjuicio
            de las disposiciones sobre conflicto de leyes. Cualquier disputa se resolverá mediante
            arbitraje vinculante conforme a las reglas de la AAA.
          </p>

          <h2>12. Contacto</h2>
          <p>Para preguntas sobre estos Términos de Uso:</p>
          <ul>
            <li><strong>Empresa:</strong> Icee Electronics S.A.S.</li>
            <li><strong>Correo:</strong> <a href="mailto:admin@iceepos.com">admin@iceepos.com</a></li>
            <li><strong>WhatsApp:</strong> <a href="https://wa.me/17863860989">+1 786-386-0989</a></li>
          </ul>

        </div>
      </div>
    </section>
  )
}
