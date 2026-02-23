'use client'

import { useRef, useState } from 'react'

interface LabVideoCardProps {
  src: string
  title: string
  description: string
  bgColor?: string
}

function PlayIcon() {
  return (
    <svg className="fill-current w-5 h-5 ml-1" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 10L4 19V1z" />
    </svg>
  )
}

function LabVideoCard({ src, title, description, bgColor = 'bg-[#0D1F38]' }: LabVideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  const handlePlay = () => {
    const video = videoRef.current
    if (!video) return
    video.play()
    setPlaying(true)
  }

  const handlePause = () => {
    setPlaying(false)
  }

  return (
    <div
      className={`relative rounded-2xl overflow-hidden ${bgColor} shadow-2xl group`}
      data-aos="fade-up"
      data-aos-anchor="[data-aos-id-lab]"
    >
      {/* Video element — preload none for performance */}
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <video
        ref={videoRef}
        controls={playing}
        preload="none"
        onPause={handlePause}
        onEnded={handlePause}
        className="w-full aspect-video object-cover"
        style={{ display: 'block' }}
      >
        <source src={src} type="video/mp4" />
      </video>

      {/* Play overlay — shown when not playing */}
      {!playing && (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer bg-[#0A1628]/60 hover:bg-[#0A1628]/40 transition-colors duration-300"
          onClick={handlePlay}
        >
          {/* Play button */}
          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-[#00B4D8] hover:bg-[#48CAE4] shadow-lg shadow-[#00B4D8]/30 transition-all duration-300 group-hover:scale-110 mb-5">
            <PlayIcon />
          </div>

          {/* Card info */}
          <div className="text-center px-6">
            <h3 className="text-white font-playfair-display text-xl font-bold mb-2">{title}</h3>
            <p className="text-slate-300 text-sm">{description}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default function VideoLabSection() {
  return (
    <section className="bg-[#0A1628] py-16 md:py-24" data-aos-id-lab>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2
            className="h2 font-playfair-display text-white mb-4"
            data-aos="fade-up"
            data-aos-anchor="[data-aos-id-lab]"
          >
            Nuestro Laboratorio
          </h2>
          <p
            className="text-lg text-slate-400"
            data-aos="fade-up"
            data-aos-anchor="[data-aos-id-lab]"
            data-aos-delay="100"
          >
            Instalaciones de clase mundial para reparación, mantenimiento y certificación de dispositivos electrónicos.
          </p>
        </div>

        {/* Video grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <LabVideoCard
            src="/videos/icee_video_lab.mp4"
            title="Taller de Reparación"
            description="Proceso de diagnóstico y reparación especializada de terminales de pago y dispositivos electrónicos."
            bgColor="bg-[#0D1F38]"
          />
          <LabVideoCard
            src="/videos/icee_video_lab2.mp4"
            title="Laboratorio de Certificación"
            description="Infraestructura técnica para pruebas, calibración y certificación de equipos bajo estándares PCI-DSS."
            bgColor="bg-[#0D1F38]"
          />
        </div>

        {/* Bottom stat */}
        <p
          className="text-center text-slate-500 text-sm mt-10"
          data-aos="fade-up"
          data-aos-anchor="[data-aos-id-lab]"
          data-aos-delay="200"
        >
          +120,000 procesos históricos · Certificación PCI-DSS vigente
        </p>

      </div>
    </section>
  )
}
