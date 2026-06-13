import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Pricing from '@/components/Pricing'
import Process from '@/components/Process'
import Portfolio from '@/components/Portfolio'
import FAQ from '@/components/FAQ'
import QuoteForm from '@/components/QuoteForm'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-carbon">
      <Navbar />
      <Hero />
      <Services />
      <Pricing />
      <Process />
      <Portfolio />
      <FAQ />
      <QuoteForm />
      <Contact />
      <Footer />
    </main>
  )
}
