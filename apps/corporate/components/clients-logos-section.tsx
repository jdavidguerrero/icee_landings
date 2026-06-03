import Image from 'next/image'

const clients = [
  { name: 'Newland', src: '/images/partners/newland.png' },
  { name: 'Sinova', src: '/images/partners/sinova.png' },
  { name: 'Spectra', src: '/images/partners/spectra.png' },
  { name: 'Urovo', src: '/images/partners/urovo.png' },
  { name: 'Topwise', src: '/images/partners/topwise.png' },
  { name: 'Sunmi', src: '/images/partners/sunmi.png' },
  { name: 'Nexgo', src: '/images/partners/nexgo.png' },
  { name: 'Verifone', src: '/images/partners/verifone.png' },
  { name: 'Ciontek', src: '/images/partners/ciontek.png' },
]

// Duplicate for seamless infinite loop
const track = [...clients, ...clients]

export default function ClientsLogosSection() {
  return (
    <section className="bg-[#060F1E] overflow-hidden border-t border-slate-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-8 md:pt-12 md:pb-14">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-10">
            <h2 className="h3 font-playfair-display text-white mb-3" data-aos="fade-up">
              Empresas que confían en Icee Electronics
            </h2>
            <p className="text-lg text-slate-400" data-aos="fade-up" data-aos-delay="100">
              Sector financiero, retail, tecnología y gobierno — en Colombia, Ecuador y EE.UU.
            </p>
          </div>

        </div>
      </div>

      {/* Infinite marquee — full width, no px constraint */}
      <div className="relative pb-12 md:pb-16">
        {/* Fade edges matching dark section background */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#060F1E] to-transparent" aria-hidden="true" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#060F1E] to-transparent" aria-hidden="true" />

        <div className="flex animate-marquee" style={{ width: 'max-content' }}>
          {track.map((client, index) => (
            <div key={`${client.src}-${index}`} className="shrink-0 mx-6 md:mx-8">
              {/* White card wrapper — logos have light backgrounds */}
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm flex items-center justify-center h-[72px] w-[160px] hover:shadow-md transition-shadow duration-300">
                <Image
                  src={client.src}
                  alt={client.name}
                  width={140}
                  height={52}
                  className="object-contain h-[40px] w-auto max-w-[120px] opacity-90 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
