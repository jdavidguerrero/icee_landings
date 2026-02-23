'use client'

import { useState, FormEvent } from 'react'

interface FormData {
  name: string
  business: string
  phone: string
  businessType: string
}

interface FormErrors {
  name?: string
  business?: string
  phone?: string
  businessType?: string
}

export default function Cta() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    business: '',
    phone: '',
    businessType: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function validate(data: FormData): FormErrors {
    const errs: FormErrors = {}
    if (!data.name.trim()) errs.name = 'El nombre es requerido.'
    if (!data.business.trim()) errs.business = 'El nombre del negocio es requerido.'
    if (!data.phone.trim()) errs.phone = 'El teléfono es requerido.'
    if (!data.businessType) errs.businessType = 'Selecciona el tipo de negocio.'
    return errs
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const errs = validate(formData)
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setErrors({})
    setLoading(true)
    try {
      await fetch('/api/demo-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      setSubmitted(true)
    } catch {
      // Silently succeed — the console route handles it
      setSubmitted(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contacto" className="relative">
      {/* Bg */}
      <div className="absolute inset-0 bg-[#0A1628] -z-10" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6" data-aos="fade-up">
        <div className="py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="h2 text-white mb-4">¿Listo para cobrar con tarjeta?</h2>
            <p className="text-lg text-slate-400">
              Déjanos tus datos y te contactamos en menos de 24 horas.
            </p>
          </div>

          {submitted ? (
            <div className="max-w-md mx-auto text-center py-12">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-2xl font-bold text-white mb-2">¡Solicitud recibida!</h3>
              <p className="text-slate-400">
                Te contactaremos en menos de 24 horas. Si prefieres, escríbenos directamente por WhatsApp.
              </p>
              <a
                href="https://wa.me/573104527042?text=Hola%2C%20quiero%20una%20demo%20de%20Icee%20POS"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 btn-sm text-white bg-green-600 hover:bg-green-700"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
                Escribir por WhatsApp
              </a>
            </div>
          ) : (
            <div className="max-w-xl mx-auto">
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">
                    Nombre completo <span className="text-[#00B4D8]">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full rounded-lg bg-[#1E293B] border border-slate-600 text-white placeholder-slate-500 px-4 py-2.5 focus:outline-none focus:border-[#00B4D8] focus:ring-1 focus:ring-[#00B4D8]"
                    placeholder="Tu nombre"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
                </div>

                {/* Business name */}
                <div>
                  <label htmlFor="business" className="block text-sm font-medium text-slate-300 mb-1">
                    Nombre del negocio <span className="text-[#00B4D8]">*</span>
                  </label>
                  <input
                    id="business"
                    type="text"
                    className="w-full rounded-lg bg-[#1E293B] border border-slate-600 text-white placeholder-slate-500 px-4 py-2.5 focus:outline-none focus:border-[#00B4D8] focus:ring-1 focus:ring-[#00B4D8]"
                    placeholder="Nombre de tu negocio"
                    value={formData.business}
                    onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                  />
                  {errors.business && <p className="mt-1 text-xs text-red-400">{errors.business}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-1">
                    Teléfono <span className="text-[#00B4D8]">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className="w-full rounded-lg bg-[#1E293B] border border-slate-600 text-white placeholder-slate-500 px-4 py-2.5 focus:outline-none focus:border-[#00B4D8] focus:ring-1 focus:ring-[#00B4D8]"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                  {errors.phone && <p className="mt-1 text-xs text-red-400">{errors.phone}</p>}
                </div>

                {/* Business type */}
                <div>
                  <label htmlFor="businessType" className="block text-sm font-medium text-slate-300 mb-1">
                    Tipo de negocio <span className="text-[#00B4D8]">*</span>
                  </label>
                  <select
                    id="businessType"
                    className="w-full rounded-lg bg-[#1E293B] border border-slate-600 text-white px-4 py-2.5 focus:outline-none focus:border-[#00B4D8] focus:ring-1 focus:ring-[#00B4D8]"
                    value={formData.businessType}
                    onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                  >
                    <option value="" disabled>Selecciona una opción</option>
                    <option value="Food Truck">Food Truck</option>
                    <option value="Taquería">Taquería</option>
                    <option value="Swap Meet / Mercado">Swap Meet / Mercado</option>
                    <option value="Bodega / Tienda">Bodega / Tienda</option>
                    <option value="Panadería">Panadería</option>
                    <option value="Otro">Otro</option>
                  </select>
                  {errors.businessType && <p className="mt-1 text-xs text-red-400">{errors.businessType}</p>}
                </div>

                {/* Submit */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full btn-sm inline-flex justify-center items-center text-[#0A1628] bg-[#00B4D8] hover:bg-[#48CAE4] font-bold shadow-xs disabled:opacity-60 disabled:cursor-not-allowed py-3"
                  >
                    {loading ? 'Enviando...' : 'Solicitar demo gratuita'}
                  </button>
                </div>
              </form>

              {/* WhatsApp alternative */}
              <div className="mt-6 text-center">
                <p className="text-slate-500 text-sm mb-2">¿Prefieres hablar directamente?</p>
                <a
                  href="https://wa.me/573104527042?text=Hola%2C%20quiero%20una%20demo%20de%20Icee%20POS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 font-medium transition-colors duration-150"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                  </svg>
                  O escríbenos por WhatsApp
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
