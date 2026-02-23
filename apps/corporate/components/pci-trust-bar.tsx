const badges = [
  {
    icon: (
      <svg className="w-5 h-5 text-[#00B4D8] shrink-0" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10 2L3 5v5c0 4.4 3 8.5 7 9.5 4-1 7-5.1 7-9.5V5L10 2z"
          stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"
        />
        <path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: 'PCI-DSS',
    sub: 'Level 1 Certified',
    highlight: true,
  },
  {
    icon: (
      <svg className="w-5 h-5 text-slate-400 shrink-0" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="6" width="14" height="11" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 6V5a3 3 0 016 0v1" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="10" cy="12" r="1.5" fill="currentColor" />
      </svg>
    ),
    label: 'Cifrado 256-bit',
    sub: 'TLS/SSL',
    highlight: false,
  },
  {
    icon: (
      <svg className="w-5 h-5 text-slate-400 shrink-0" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 6v4l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    label: '+6 años',
    sub: 'Certificados PCI',
    highlight: false,
  },
  {
    icon: (
      <svg className="w-5 h-5 text-slate-400 shrink-0" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 8h12M4 12h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    label: 'Visa · MC',
    sub: 'Autorizados',
    highlight: false,
  },
  {
    icon: (
      <svg className="w-5 h-5 text-slate-400 shrink-0" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 10h14M7 6l-4 4 4 4M13 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: '+120K procesos',
    sub: 'Históricos',
    highlight: false,
  },
]

export default function PciTrustBar() {
  return (
    <div className="bg-[#060F1E] border-b border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-4 flex flex-wrap justify-center md:justify-between gap-x-6 gap-y-3">
          {badges.map((badge) => (
            <div
              key={badge.label}
              className={`flex items-center gap-2.5 ${
                badge.highlight
                  ? 'text-[#00B4D8]'
                  : 'text-slate-400'
              }`}
            >
              {badge.icon}
              <div className="leading-tight">
                <span className={`text-xs font-semibold ${badge.highlight ? 'text-[#00B4D8]' : 'text-slate-300'}`}>
                  {badge.label}
                </span>
                <span className="text-xs text-slate-600 ml-1 hidden sm:inline">{badge.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
