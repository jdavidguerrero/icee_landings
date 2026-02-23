import Hero from '@/components/hero-home'
import PciTrustBar from '@/components/pci-trust-bar'
import Stats from '@/components/stats'
import FeaturesBlocks from '@/components/features-blocks'
import FeaturedProduct from '@/components/featured-product'
import PresenceSection from '@/components/presence-section'
import TestimonialsSection from '@/components/testimonials-section'
import ClientsLogosSection from '@/components/clients-logos-section'
import Clients from '@/components/clients'
import QuoteSection from '@/components/quote-section'

export default function Home() {
  return (
    <>
      <Hero />
      <PciTrustBar />
      <Stats />
      <FeaturesBlocks />
      <FeaturedProduct />
      <PresenceSection />
      <TestimonialsSection />
      <ClientsLogosSection />
      <Clients />
      <QuoteSection />
    </>
  )
}
