'use client'

import { useState } from 'react'

export default function LangToggle() {
  const [lang, setLang] = useState<'es' | 'en'>('es')

  return (
    <div className="flex items-center gap-0 rounded-full border border-slate-600/50 overflow-hidden text-xs font-semibold ml-3">
      <button
        onClick={() => setLang('es')}
        className={`px-3 py-1.5 transition-colors duration-150 ${
          lang === 'es'
            ? 'text-[#00B4D8] bg-[#00B4D8]/10'
            : 'text-slate-400 hover:text-slate-200 bg-transparent'
        }`}
        aria-label="Español"
        aria-pressed={lang === 'es'}
      >
        ES
      </button>
      <span className="text-slate-600 select-none">|</span>
      <button
        onClick={() => setLang('en')}
        className={`px-3 py-1.5 transition-colors duration-150 ${
          lang === 'en'
            ? 'text-[#00B4D8] bg-[#00B4D8]/10'
            : 'text-slate-400 hover:text-slate-200 bg-transparent'
        }`}
        aria-label="English"
        aria-pressed={lang === 'en'}
      >
        EN
      </button>
    </div>
  )
}
