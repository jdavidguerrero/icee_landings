export default function QuoteSection() {
  return (
    <section className="bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">

            {/* Decorative quotation mark */}
            <div className="inline-flex items-center justify-center mb-6" aria-hidden="true">
              <svg
                className="w-16 h-16 fill-current text-[#00B4D8]/20"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 40.667V64h23.111V40.667H7.704C7.704 28.444 16 20.963 32.593 19.556V0C12.148 1.481 0 14.222 0 40.667zM64 40.667V64H40.889V40.667h15.407C56.296 28.444 48 20.963 31.407 19.556V0C51.852 1.481 64 14.222 64 40.667z" />
              </svg>
            </div>

            <blockquote>
              <p className="text-2xl md:text-3xl font-playfair-display text-slate-800 italic mb-6 leading-snug">
                "Más de una década construyendo infraestructura de pagos segura, certificada y escalable para el sector financiero en América Latina y Estados Unidos."
              </p>
              <footer>
                <cite className="text-slate-500 font-medium not-italic">
                  — Icee Electronics S.A.S · Certificados PCI-DSS Nivel 1
                </cite>
              </footer>
            </blockquote>

          </div>

        </div>
      </div>
    </section>
  )
}
