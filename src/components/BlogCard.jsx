'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiCalendar, FiClock } from 'react-icons/fi'

export default function BlogCard({ post, index }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ scale: 1.03, y: -10 }}
        className="group glass rounded-2xl overflow-hidden hover:border-purple-neon/50 transition-all duration-300 cursor-pointer relative z-10"
      >
        <div className="relative h-64 overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute top-4 left-4">
            <span className="glass px-3 py-1 rounded-full text-xs font-medium">
              {post.category}
            </span>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-neon transition-colors line-clamp-2">
            {post.title}
          </h3>
          <p className="text-soft-white/70 mb-4 line-clamp-3">
            {post.excerpt}
          </p>

          <div className="flex items-center gap-4 text-sm text-soft-white/60">
            <div className="flex items-center gap-2">
              <FiCalendar />
              <span>{new Date(post.date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-2">
              <FiClock />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}

