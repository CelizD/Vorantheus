import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
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

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
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
