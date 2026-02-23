export default function Section01() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-28 md:pb-20">
          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-12 md:grid-cols-3 md:-mx-9 md:gap-0 items-start md:max-w-none">

            {/* 1st item — lost sales */}
            <div
              className="relative md:px-9 after:hidden md:after:block after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-px after:h-16 after:bg-slate-200 last:after:hidden"
              data-aos="fade-up"
            >
              <div className="mb-3">
                <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient x1="50%" y1="100%" x2="50%" y2="0%" id="pain-a">
                      <stop stopColor="#0096B7" offset="0%" />
                      <stop stopColor="#00B4D8" offset="100%" />
                    </linearGradient>
                  </defs>
                  <g fillRule="nonzero" fill="none">
                    <path
                      d="M43.443 49.745a1.028 1.028 0 0 1-.262-.019l-23.5-4.9a1 1 0 0 1-.775-1.186l6.2-29.352a1.006 1.006 0 0 1 1.182-.773l23.42 4.885a1 1 0 0 1 .776 1.183l-6.12 29.37a1 1 0 0 1-.921.795v-.003Z"
                      fill="#48CAE4"
                    />
                    <path
                      d="M25 32H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h24a1 1 0 0 1 1 1v30a1 1 0 0 1-1 1ZM8 15.25l3.5 4 6.5-6.5-1-.75-5.5 4.25-2.5-2-1 1Z"
                      fill="url(#pain-a)"
                      style={{ mixBlendMode: 'multiply' }}
                      transform="translate(6 6)"
                    />
                  </g>
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-1">¿Perdiendo ventas por no aceptar tarjeta?</h4>
              <p className="text-slate-500">
                El 65–75% de los vendedores ambulantes son cash-only. Cada cliente sin efectivo es dinero perdido.
              </p>
            </div>

            {/* 2nd item — English apps */}
            <div
              className="relative md:px-9 after:hidden md:after:block after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-px after:h-16 after:bg-slate-200 last:after:hidden"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="mb-3">
                <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient x1="50%" y1="100%" x2="50%" y2="0%" id="pain-b">
                      <stop stopColor="#0096B7" offset="0%" />
                      <stop stopColor="#00B4D8" offset="100%" />
                    </linearGradient>
                  </defs>
                  <g fillRule="nonzero" fill="none">
                    <circle cx="28" cy="28" r="20" fill="#48CAE4" />
                    <path
                      d="M28 12c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16Zm0 2c-2.09 0-4.274 2.317-5.664 6.272A29.27 29.27 0 0 0 21.1 26h13.8a29.27 29.27 0 0 0-1.236-5.728C32.274 16.317 30.09 14 28 14Zm7.878 10H36a14 14 0 0 0-8.674-12.738C29.7 13.375 31.217 16.315 32.2 20h3.678Zm-17.756 0H21.8c.983-3.685 2.5-6.625 4.874-8.738A14 14 0 0 0 18 24h.122Zm-2.1 4h3.99a32.29 32.29 0 0 0 0 4H16.022a13.945 13.945 0 0 1 0-4Zm5.99 0h7.976a28.265 28.265 0 0 1 0 4H22.01a28.265 28.265 0 0 1 0-4Zm9.977 0h3.99a13.945 13.945 0 0 1 0 4h-3.99a32.29 32.29 0 0 0 0-4Zm-1.336 6H21.247c1.39 3.955 3.574 6.272 5.664 6.272 2.09 0 4.274-2.317 5.664-6.272h-.162ZM18.122 34H18a14 14 0 0 0 8.674 12.738C24.3 44.625 22.783 41.685 21.8 38h-3.678Zm19.756 0H34.2c-.983 3.685-2.5 6.625-4.874 8.738A14 14 0 0 0 38 34h-.122Z"
                      fill="url(#pain-b)"
                      style={{ mixBlendMode: 'multiply' }}
                    />
                  </g>
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-1">¿Cansado de apps en inglés?</h4>
              <p className="text-slate-500">
                Square, Toast y Clover no hablan tu idioma. Soporte limitado, menús confusos, y cero contexto hispano.
              </p>
            </div>

            {/* 3rd item — expensive hardware */}
            <div
              className="relative md:px-9 after:hidden md:after:block after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-px after:h-16 after:bg-slate-200 last:after:hidden"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="mb-3">
                <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient x1="50%" y1="100%" x2="50%" y2="0%" id="pain-c">
                      <stop stopColor="#0096B7" offset="0%" />
                      <stop stopColor="#00B4D8" offset="100%" />
                    </linearGradient>
                  </defs>
                  <g fillRule="nonzero" fill="none">
                    <path
                      d="M30.22 38.065h-26a1 1 0 0 1-1-1v-32a1 1 0 0 1 1-1h26a1 1 0 0 1 1 1v32a1 1 0 0 1-1 1Zm-19-24v2h7v-2h-7Zm3 6v2h10v-2h-10Zm-3 6v2h7v-2h-7Z"
                      fill="#48CAE4"
                    />
                    <path
                      d="m51.585 50.536-25.984.907a1 1 0 0 1-1.034-.964l-1.117-31.98a1 1 0 0 1 .965-1.035l25.984-.907a1 1 0 0 1 1.034.964l1.117 31.98a1 1 0 0 1-.965 1.035ZM40.337 38.061l3.832-4.11a.843.843 0 0 0-.042-1.192l-4.11-3.833-1.15 1.235 3.492 3.256-3.257 3.493 1.235 1.15Zm-4.97.173L36.518 37l-3.492-3.257 3.256-3.492-1.234-1.151-3.832 4.11a.843.843 0 0 0 .041 1.192l4.11 3.832Z"
                      fill="url(#pain-c)"
                      style={{ mixBlendMode: 'multiply' }}
                    />
                  </g>
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-1">¿Hardware caro que no entiendes?</h4>
              <p className="text-slate-500">
                iPad + lector + impresora = $800+. Con Icee POS, todo-en-uno desde $150.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
