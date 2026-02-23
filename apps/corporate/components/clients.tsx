import Image from 'next/image'

const partners = [
  { name: 'Newland',  src: '/images/partners/newland.png'  },
  { name: 'Sinova',   src: '/images/partners/sinova.png'   },
  { name: 'Keenon',   src: '/images/partners/keenon.png'   },
  { name: 'Spectra',  src: '/images/partners/spectra.png'  },
  { name: 'Urovo',    src: '/images/partners/urovo.png'    },
  { name: 'Topwise',  src: '/images/partners/topwise.png'  },
  { name: 'Ciontek',  src: '/images/partners/ciontek.png'  },
  { name: 'Sunmi',    src: '/images/partners/sunmi.png'    },
  { name: 'Nexgo',    src: '/images/partners/nexgo.png'    },
  { name: 'Verifone', src: '/images/partners/verifone.png' },
]

// Duplicate for seamless infinite loop
const track = [...partners, ...partners]

export default function Clients() {
  return (
    <section id="aliados" className="overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-8 md:pt-12 md:pb-14">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-10">
            <h2 className="h3 font-playfair-display text-slate-800 mb-3" data-aos="fade-up">
              Nuestros Aliados Globales
            </h2>
            <p className="text-lg text-slate-500" data-aos="fade-up" data-aos-delay="100">
              Trabajamos con los fabricantes líderes en tecnología de pagos y dispositivos electrónicos.
            </p>
          </div>

        </div>
      </div>

      {/* Infinite marquee — full width, no px constraint */}
      <div className="relative pb-12 md:pb-16">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-white to-transparent" aria-hidden="true" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-white to-transparent" aria-hidden="true" />

        <div className="flex animate-marquee" style={{ width: 'max-content' }}>
          {track.map((partner, index) => (
            <div key={`${partner.name}-${index}`} className="shrink-0 mx-8 md:mx-12">
              <Image
                src={partner.src}
                alt={partner.name}
                width={120}
                height={60}
                className="object-contain h-[46px] w-auto grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
