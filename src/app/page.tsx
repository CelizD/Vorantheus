import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import PlanetNetworkDashboard from '@/components/PlanetNetworkDashboard'
import TechMarquee from '@/components/TechMarquee'
import HomeServices from '@/components/HomeServices'
import WhyUs from '@/components/WhyUs'
import HomePortfolio from '@/components/HomePortfolio'
import Testimonials from '@/components/Testimonials'
import Process from '@/components/Process'
import FAQ from '@/components/FAQ'
import Guarantee from '@/components/Guarantee'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { faqPageSchema } from '@/lib/schema'

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema()) }}
      />
      <Navbar />
      <main>
        <Hero />
        <PlanetNetworkDashboard />
        <TechMarquee />
        <HomeServices />
        <WhyUs />
        <HomePortfolio />
        <Testimonials />
        <Process />
        <FAQ />
        <Guarantee />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
