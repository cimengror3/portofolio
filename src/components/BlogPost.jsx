'use client'

import { motion } from 'framer-motion'
import { FiCalendar, FiClock, FiArrowLeft } from 'react-icons/fi'
import Link from 'next/link'

export default function BlogPost({ post }) {
  return (
    <article className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8" style={{ zIndex: 1 }}>
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link href="/blog">
          <motion.button
            whileHover={{ x: -5 }}
            className="flex items-center gap-2 text-soft-white/70 hover:text-purple-neon mb-8 transition-colors"
          >
            <FiArrowLeft />
            Back to Blog
          </motion.button>
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="mb-6">
            <span className="glass px-4 py-2 rounded-full text-sm font-medium">
              {post.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            {post.title}
          </h1>

          <div className="flex items-center gap-6 text-soft-white/70 mb-8">
            <div className="flex items-center gap-2">
              <FiCalendar />
              <span>
                {new Date(post.date).toLocaleDateString('id-ID', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FiClock />
              <span>{post.readTime}</span>
            </div>
          </div>

          <div className="relative h-96 rounded-2xl overflow-hidden glass mb-8">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-invert prose-lg max-w-none"
        >
          <div className="glass rounded-xl p-8 md:p-12">
            <div className="text-soft-white/80 leading-relaxed space-y-6">
              <p className="text-xl font-medium text-soft-white mb-6">
                {post.excerpt}
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>

              <h2 className="text-3xl font-bold mt-8 mb-4 text-gradient">
                Introduction
              </h2>

              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </p>

              <h2 className="text-3xl font-bold mt-8 mb-4 text-gradient">
                Main Content
              </h2>

              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>

              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
                quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
              </p>

              <h2 className="text-3xl font-bold mt-8 mb-4 text-gradient">
                Conclusion
              </h2>

              <p>
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
                dolore magnam aliquam quaerat voluptatem.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </article>
  )
}

