import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { getBlogPost, getDynamicBlogPosts } from '@/data/blog'

type BlogArticlePageProps = {
  params: Promise<{ slug: string }>
}

function formatDate(date: string) {
  return new Date(`${date}T00:00:00`).toLocaleDateString('es-MX', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function generateStaticParams() {
  return getDynamicBlogPosts().map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params,
}: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post?.content) {
    return {}
  }

  return {
    title: `${post.title} | Vorantheus`,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
    },
  }
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post?.content) {
    notFound()
  }

  return (
    <>
      <Navbar />

      <section className="relative bg-black overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 60% 60% at 30% 40%, rgba(0,113,227,0.10) 0%, transparent 65%)',
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 pt-36 pb-20 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-white/40 hover:text-white/70 text-sm mb-6 transition-colors duration-200"
          >
            ← Volver al Blog
          </Link>
          <p className="text-[#0071E3] text-xs font-semibold uppercase tracking-widest mb-4">
            {post.category}
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight">
            {post.title}
          </h1>
          <p className="text-white/40 text-sm">
            {formatDate(post.date)} · {post.readTime} de lectura
          </p>
        </div>
      </section>

      <section className="bg-[#F5F5F7] py-20">
        <div className="max-w-3xl mx-auto px-6">
          <article className="bg-white rounded-3xl p-10 shadow-card border border-black/[0.04]">
            {post.content.intro.map((paragraph) => (
              <p key={paragraph} className="text-[#6E6E73] leading-relaxed mb-5">
                {paragraph}
              </p>
            ))}

            {post.content.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-2xl font-bold text-[#1D1D1F] mb-4 mt-10">
                  {section.heading}
                </h2>

                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph} className="text-[#6E6E73] leading-relaxed mb-5">
                    {paragraph}
                  </p>
                ))}

                {section.bullets ? (
                  <ul className="mb-5 flex flex-col gap-3">
                    {section.bullets.map((item) => (
                      <li key={item.title} className="flex gap-3">
                        <span className="mt-1.5 w-2 h-2 min-w-[8px] rounded-full bg-[#0071E3]" />
                        <span className="text-[#6E6E73] text-sm leading-relaxed">
                          <strong className="text-[#1D1D1F]">{item.title}:</strong> {item.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}

            <div className="mt-10 pt-8 border-t border-black/[0.06] text-center">
              <p className="text-[#1D1D1F] font-semibold text-lg mb-2">
                {post.content.ctaTitle}
              </p>
              <p className="text-[#6E6E73] text-sm mb-6">{post.content.ctaText}</p>
              <Link
                href={post.content.ctaHref}
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#0071E3] hover:bg-[#0077ED] text-white font-semibold rounded-full transition-all duration-200"
              >
                {post.content.ctaLabel}
              </Link>
            </div>
          </article>
        </div>
      </section>

      <Footer />
    </>
  )
}
