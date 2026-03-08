export const metadata = {
  title: 'Política de Privacidad — Icee POS',
  description: 'Política de privacidad y tratamiento de datos personales de Icee POS, producto de Icee Electronics S.A.S.',
}

export default function PrivacyPage() {
  return (
    <section className="relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-24 md:py-32">

        {/* Header */}
        <div className="mb-12">
          <span className="inline-block text-xs font-semibold text-[#00B4D8] uppercase tracking-widest mb-4">
            Legal
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Política de Privacidad
          </h1>
          <p className="text-slate-400 text-sm">
            Última actualización: 8 de marzo de 2026
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-slate max-w-none prose-headings:text-white prose-headings:font-bold prose-p:text-slate-400 prose-p:leading-relaxed prose-li:text-slate-400 prose-strong:text-slate-200 prose-a:text-[#00B4D8]">

          <p>
            Icee Electronics S.A.S. (en adelante "Icee", "nosotros" o "la Empresa"), con domicilio en Colombia,
            es responsable del tratamiento de sus datos personales recopilados a través de la plataforma Icee POS
            y sus sitios web asociados (<strong>iceepos.com</strong>).
          </p>

          <p>
            Esta Política de Privacidad describe cómo recopilamos, usamos, almacenamos y protegemos su información,
            en cumplimiento de la Ley 1581 de 2012 (Colombia), sus decretos reglamentarios, y las normativas
            aplicables en Ecuador y Estados Unidos.
          </p>

          <h2>1. Datos que recopilamos</h2>
          <p>Recopilamos los siguientes tipos de información:</p>
          <ul>
            <li><strong>Datos de contacto:</strong> nombre, número de teléfono, correo electrónico y tipo de negocio, proporcionados voluntariamente al solicitar una demo o contactarnos.</li>
            <li><strong>Datos de uso:</strong> información sobre cómo interactúa con nuestra plataforma (pantallas visitadas, funciones utilizadas, frecuencia de uso).</li>
            <li><strong>Datos de transacciones:</strong> registros de ventas procesadas a través del sistema POS. Los datos de tarjetas de crédito/débito son procesados directamente por redes de pago certificadas y <strong>nunca se almacenan en nuestros servidores</strong>.</li>
            <li><strong>Datos del dispositivo:</strong> modelo del terminal, versión de software y datos de conectividad para fines de soporte técnico.</li>
          </ul>

          <h2>2. Finalidad del tratamiento</h2>
          <p>Utilizamos su información para:</p>
          <ul>
            <li>Prestar y mejorar los servicios de Icee POS.</li>
            <li>Contactarlo para responder solicitudes de demo, soporte o información comercial.</li>
            <li>Enviar comunicaciones relacionadas con el servicio (actualizaciones, alertas de seguridad).</li>
            <li>Cumplir obligaciones legales y regulatorias aplicables.</li>
            <li>Analizar el uso de la plataforma para mejorar la experiencia del usuario.</li>
          </ul>

          <h2>3. Seguridad de los datos y certificación PCI-DSS</h2>
          <p>
            Icee Electronics cuenta con <strong>certificación PCI-DSS vigente por más de 6 años</strong>, el estándar
            internacional de seguridad para el procesamiento de pagos con tarjeta. Esto garantiza que:
          </p>
          <ul>
            <li>Todas las transacciones viajan cifradas punto a punto (P2PE).</li>
            <li>Los datos de tarjetas nunca se almacenan en el dispositivo ni en nuestros servidores.</li>
            <li>Nuestros sistemas son auditados regularmente por entidades certificadoras independientes.</li>
          </ul>

          <h2>4. Compartición de datos</h2>
          <p>No vendemos ni cedemos sus datos personales a terceros con fines comerciales. Podemos compartir información con:</p>
          <ul>
            <li><strong>Procesadores de pago:</strong> estrictamente lo necesario para completar transacciones.</li>
            <li><strong>Proveedores de servicios:</strong> empresas que nos ayudan a operar la plataforma (hosting, soporte), bajo acuerdos de confidencialidad.</li>
            <li><strong>Autoridades competentes:</strong> cuando sea requerido por ley o por orden judicial.</li>
          </ul>

          <h2>5. Derechos del titular</h2>
          <p>Usted tiene derecho a:</p>
          <ul>
            <li>Conocer, actualizar y rectificar sus datos personales.</li>
            <li>Solicitar la supresión de sus datos cuando no exista obligación legal de conservarlos.</li>
            <li>Revocar la autorización de tratamiento de datos en cualquier momento.</li>
            <li>Acceder de forma gratuita a sus datos personales.</li>
          </ul>
          <p>
            Para ejercer estos derechos, escríbanos a{' '}
            <a href="mailto:gestioncomercial@iceeelectronics.com">gestioncomercial@iceeelectronics.com</a>.
          </p>

          <h2>6. Retención de datos</h2>
          <p>
            Conservamos sus datos durante el tiempo necesario para cumplir las finalidades descritas y las
            obligaciones legales aplicables. Los datos de contacto de prospectos se eliminan tras 2 años
            sin actividad comercial.
          </p>

          <h2>7. Cookies y tecnologías similares</h2>
          <p>
            Nuestro sitio web utiliza cookies esenciales para su funcionamiento. No utilizamos cookies de
            rastreo publicitario de terceros. Puede configurar su navegador para rechazar cookies, aunque
            esto puede afectar algunas funcionalidades del sitio.
          </p>

          <h2>8. Cambios a esta política</h2>
          <p>
            Podemos actualizar esta Política de Privacidad periódicamente. Le notificaremos cambios
            significativos a través del correo electrónico registrado o mediante un aviso destacado en
            nuestra plataforma.
          </p>

          <h2>9. Contacto</h2>
          <p>
            Para consultas sobre esta política o el tratamiento de sus datos personales:
          </p>
          <ul>
            <li><strong>Empresa:</strong> Icee Electronics S.A.S.</li>
            <li><strong>Correo:</strong> <a href="mailto:gestioncomercial@iceeelectronics.com">gestioncomercial@iceeelectronics.com</a></li>
            <li><strong>WhatsApp:</strong> <a href="https://wa.me/573104527042">+57 310 452 7042</a></li>
          </ul>

        </div>
      </div>
    </section>
  )
}
