'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import type { BlogPost } from '@/data/blog'

interface Props {
  posts: BlogPost[]
}

export default function BlogGrid({ posts }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post, i) => (
        <motion.article
          key={post.slug}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="bg-white rounded-3xl shadow-card border border-black/[0.04] flex flex-col overflow-hidden"
        >
          <div className="p-8 flex flex-col flex-1">
            {/* Category */}
            <p className="text-[#0071E3] text-xs font-semibold uppercase tracking-widest mb-4">
              {post.category}
            </p>

            {/* Title */}
            <h2 className="text-[#1D1D1F] font-bold text-xl leading-snug mb-3">
              {post.title}
            </h2>

            {/* Description */}
            <p className="text-[#6E6E73] text-sm leading-relaxed flex-1 mb-6">
              {post.description}
            </p>

            {/* Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-black/[0.06]">
              <span className="text-[#6E6E73] text-xs">
                {new Date(`${post.date}T00:00:00`).toLocaleDateString('es-MX', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}{' '}
                · {post.readTime}
              </span>
              <Link
                href={`/blog/${post.slug}`}
                className="text-[#0071E3] text-sm font-semibold hover:underline transition-all duration-200"
              >
                Leer artículo →
              </Link>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  )
}
