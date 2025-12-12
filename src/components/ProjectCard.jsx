'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiArrowRight, FiExternalLink, FiGithub } from 'react-icons/fi'

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.03, y: -10 }}
      className="group glass rounded-2xl overflow-hidden hover:border-purple-neon/50 transition-all duration-300"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 right-4">
          <span className="glass px-3 py-1 rounded-full text-xs font-medium">
            {project.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-neon transition-colors">
          {project.title}
        </h3>
        <p className="text-soft-white/70 mb-4 line-clamp-2">
          {project.shortDescription}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-purple-neon/20 text-purple-neon rounded text-xs"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="px-2 py-1 bg-dark-secondary text-soft-white/70 rounded text-xs">
              +{project.techStack.length - 3}
            </span>
          )}
        </div>

        <Link href={`/projects/${project.slug}`}>
          <motion.button
            whileHover={{ x: 5 }}
            className="flex items-center gap-2 text-purple-neon font-semibold group-hover:text-blue-neon transition-colors"
          >
            Detail Project
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </Link>
      </div>
    </motion.div>
  )
}

