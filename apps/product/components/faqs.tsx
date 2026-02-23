const faqItems = [
  {
    question: '¿Necesito internet para usar Icee POS?',
    answer:
      'No. Icee POS tiene modo offline completo. Las transacciones se guardan localmente y se sincronizan cuando recuperas la conexión.',
  },
  {
    question: '¿Cuánto dura la batería del terminal?',
    answer:
      'El terminal tiene batería para 12+ horas de uso continuo. Ideal para un día completo de operaciones sin necesidad de enchufar.',
  },
  {
    question: '¿Acepta EBT / Food Stamps?',
    answer:
      'Estamos trabajando en ello. La compatibilidad con EBT estará disponible próximamente.',
  },
  {
    question: '¿Cómo recibo el dinero de mis ventas?',
    answer:
      'Los fondos se depositan directamente en tu cuenta bancaria en 1–2 días hábiles (T+1).',
  },
  {
    question: '¿Hay contrato de permanencia?',
    answer:
      'No. Puedes cancelar en cualquier momento sin penalidades ni costos ocultos.',
  },
  {
    question: '¿Para qué tipos de negocio es Icee POS?',
    answer:
      'Food trucks, taquerías, panaderías, swap meets, mercados, bodegas, y cualquier negocio hispano en EE.UU.',
  },
]

export default function Faqs() {
  // Split into two columns
  const leftColumn = faqItems.slice(0, 3)
  const rightColumn = faqItems.slice(3)

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20" data-aos="fade-up">
          {/* Section header */}
          <div className="pb-12">
            <h2 className="h2">Preguntas frecuentes</h2>
          </div>

          {/* Columns */}
          <div className="md:flex md:space-x-12 space-y-8 md:space-y-0">
            {/* Left column */}
            <div className="w-full md:w-1/2 space-y-8">
              {leftColumn.map((item) => (
                <div key={item.question} className="space-y-2">
                  <h4 className="text-xl font-bold">{item.question}</h4>
                  <p className="text-slate-500">{item.answer}</p>
                </div>
              ))}
            </div>

            {/* Right column */}
            <div className="w-full md:w-1/2 space-y-8">
              {rightColumn.map((item) => (
                <div key={item.question} className="space-y-2">
                  <h4 className="text-xl font-bold">{item.question}</h4>
                  <p className="text-slate-500">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
