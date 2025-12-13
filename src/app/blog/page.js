'use client'

import { motion } from 'framer-motion'
import { blogPosts } from '@/data/blog'
import BlogCard from '@/components/BlogCard'

export default function BlogPage() {
  return (
    <section className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8" style={{ zIndex: 1 }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-gradient">Blog</span>
          </h1>
          <p className="text-soft-white/70 text-lg max-w-2xl mx-auto">
            Artikel dan tulisan tentang development, teknologi, dan pengalaman
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

