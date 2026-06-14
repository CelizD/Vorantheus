import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { blogPosts } from '@/data/blog'
import BlogGrid from './BlogGrid'

export const metadata: Metadata = {
  title: 'Blog | Vorantheus',
  description:
    'Artículos sobre desarrollo de software, tecnología y estrategias digitales para hacer crecer tu negocio en México.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog | Vorantheus',
    description:
      'Artículos sobre desarrollo de software, tecnología y estrategias digitales para hacer crecer tu negocio en México.',
    url: '/blog',
  },
}

export default function BlogPage() {
  return (
    <>
      <Navbar />

      {/* Dark Hero */}
      <section className="relative bg-black overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 60% 60% at 30% 40%, rgba(0,113,227,0.12) 0%, transparent 65%)',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-36 pb-24 text-center">
          <p className="text-[#0071E3] text-sm font-semibold uppercase tracking-widest mb-4">
            Recursos y aprendizaje
          </p>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 tracking-tight">
            Blog
          </h1>
          <p className="text-white/50 text-xl max-w-2xl mx-auto leading-relaxed">
            Artículos sobre desarrollo de software, tecnología y cómo hacer crecer tu negocio.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="bg-[#F5F5F7] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <BlogGrid posts={blogPosts} />
        </div>
      </section>

      <Footer />
    </>
  )
}
