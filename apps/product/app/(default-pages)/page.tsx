export const metadata = {
  title: 'Icee POS — La plataforma POS para negocios hispanos en EE.UU.',
  description: 'Cobra con tarjeta, imprime recibos y controla tu negocio — todo en español. Planes desde $29/mes.',
}

import Hero from '@/components/hero'
import Section01 from '@/components/section-01'
import DemoSection from '@/components/demo-section'
import Section02 from '@/components/section-02'
import Section03 from '@/components/section-03'
import Section04 from '@/components/section-04'
import Section05 from '@/components/section-05'
import Section06 from '@/components/section-06'
import SectionT2 from '@/components/section-t2'
import TestimonialsSection from '@/components/testimonials-section'
import PciTrustSection from '@/components/pci-trust-section'
import Section07 from '@/components/section-07'
import Faqs from '@/components/faqs'
import Cta from '@/components/cta'

export default function Home() {
  return (
    <>
      <Hero />
      <Section01 />
      <DemoSection />
      <Section02 />
      <Section03 />
      <Section04 />
      <Section05 />
      <Section06 />
      <SectionT2 />
      <TestimonialsSection />
      <PciTrustSection />
      <Section07 />
      <Faqs />
      <Cta />
    </>
  )
}
