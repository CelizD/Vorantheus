import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import HomeServices from '@/components/HomeServices'
import HomePortfolio from '@/components/HomePortfolio'
import Process from '@/components/Process'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HomeServices />
        <HomePortfolio />
        <Process />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
